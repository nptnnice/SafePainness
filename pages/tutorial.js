import {
  Input,
  Text,
  Box,
  Avatar,
  Image,
  Flex,
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Progress,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import ReactLoading from 'react-loading'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { storage } from '../firebaseConfig'
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage'

export default function Tutorial(props) {
  // toast for user's feedback
  const toast = useToast()

  // form validation (error when the form is not completed)
  const [error, setError] = useState(false)

  // validate phone format
  const [phoneValid, setPhoneValid] = useState(true)

  // save temporary image file
  const [img, setImg] = useState('')

  // set loading to true when image is uploading
  const [loading, setLoading] = useState(false)

  // set form for storing it into database
  //link
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    img: '',
  })

  // handle input change
  // handle change for firstname
  const getFirstName = (e) => {
    setForm({ ...form, firstname: e.target.value })
  }

  // handle change for lastname
  const getLastName = (e) => {
    setForm({ ...form, lastname: e.target.value })
  }

  // handle change for phone
  const getPhone = (e) => {
    // validate phone format
    if (e.target.value.length < 10) {
      setPhoneValid(true)
    } else if (e.target.value.length > 10) {
      setPhoneValid(false)
    } else {
      setPhoneValid(true)
      setForm({ ...form, phone: e.target.value })
    }
  }

  // handle change for image
  const getImg = (e) => {
    // handle when change image without deleting the previous one
    if (img) {
      deleteImg()
    }
    // upload image to firebase when user choose an image
    if (e.target.files[0]) {
      setImg(e.target.files[0])
      const file = e.target.files[0]
      const date = new Date().toISOString().slice(0, 10)
      const storageRef = ref(storage, `/images/${date}-${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          setLoading(true)
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          console.log('Upload progress is ' + percent)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        // Handle unsuccessful uploads
        (err) => console.log(err),
        () => {
          // Handle successful uploads on complete
          setLoading(false)
          // download firebase storage image url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setForm({ ...form, img: url })
          })
        }
      )
    }
  }

  console.log("This is url " + form.img)
  console.log(typeof(form.img))
  // cancel upload image
  function deleteImg() {
    const date = new Date().toISOString().slice(0, 10)
    const deleteRef = ref(storage, `/images/${date}-${img.name}`)
    deleteObject(deleteRef)
      .then(() => {
        console.log('delete success')
      })
      .catch((error) => {
        console.log('delete error', error)
      })
    setImg('')
    setForm({ ...form, img: '' })
  }

  // handle form submit
  const onSubmit = async () => {
    console.log('form', form)
    // form is completed when firstname and lastname are not empty
    if (form.firstname && form.lastname && phoneValid) {
      setError(false)
      // send form data to database
      try {
        const res = await axios.post('/api/postTest', form)
        console.log("This is res " + res)
        // notify user that the form is submitted
        toast({
          title: 'Success',
          description: 'Your form has been submitted',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } catch (err) {
        console.log('err', err)
      }
      // reset form
      setTimeout(() => {
        window.location.reload()
      }, 4000)
    } else {
      // notify user that the form is not completed
      setError(true)
      toast({
        title: 'Unable to submit',
        description: 'Please complete the form',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  console.log('form', form)

  console

  return (
    <Box sx={GlobalStyle.layout}>
      <Box marginTop="80px">
        <VStack spacing="24px">
          {/* get first name */}
          <FormControl
            id="firstname"
            isRequired
            isInvalid={error && !form.firstname}
          >
            <Input placeholder="firstname" onChange={getFirstName} />
            <FormErrorMessage>Please fill in your firstname</FormErrorMessage>
          </FormControl>
          {/* get last name */}
          <FormControl
            id="lastname"
            isRequired
            isInvalid={error && !form.lastname}
          >
            <Input placeholder="lastname" onChange={getLastName} />
            <FormErrorMessage>Please fill in your lastname</FormErrorMessage>
          </FormControl>
          {/* get phone number */}
          <FormControl id="phone" isInvalid={!phoneValid}>
            <Input placeholder="phone" type="number" onChange={getPhone} />
            <FormErrorMessage>Please enter 10 digits number</FormErrorMessage>
          </FormControl>
          {/* get image */}
          <FormControl id="img">
            <Input type="file" onChange={getImg} />
            {/* show uploading progress */}
            {loading && (
              <ReactLoading
                type={'spin'}
                color={'#000'}
                height={'20px'}
                width={'20px'}
              />
            )}
              {/* show image preview */}
              {form.img ? (
                <Flex align="center">
                  <Image src={form.img} sx={GlobalStyle.profileImg} />
                  <Button onClick={deleteImg}>cancel</Button>
                </Flex>
              ) : null}
          </FormControl>
          {/* submit form */}
          <Button onClick={onSubmit}>Submit</Button>
        </VStack>
        {console.log('props', props)}

        <VStack marginTop="80px">
          {/* show all data from database */}
          {props.test.map((item, index) => (
            <Flex
              key={index}
              justify="space-between"
              align="center"
              width="100%"
            >
              <Text>{item.firstname}</Text>
              <Text>{item.lastname}</Text>
              <Text>{item.phone}</Text>
              <Avatar src={item.img} />
            </Flex>
          ))}
        </VStack>
      </Box>
    </Box>
  )
}

// get data from database
export async function getServerSideProps() {
  const result = await axios.get('http://localhost:3000/api/getTest')
  return {
    props: {
      test: result.data,
    },
  }
}

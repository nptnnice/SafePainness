import {
  Box,
  Flex,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Image,
  SimpleGrid,
  Button,
  chakra,
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import HeadBox from '/components/HeadCenter'
import { useState } from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import ReactLoading from 'react-loading'
import { storage } from '/firebaseConfig'
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage'


export default function AddRecord() {
  let imgStyle = {
    objectFit: 'cover',
    borderRadius: '12px',
    width: '100%',
    height: '160px',
  }
  let imgBox = {
    position: 'relative',
  }
  let close = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    cursor: 'pointer',
    color: Colour.lightBlack,
  }

  const [isError, setIsError] = useState(false)

  const [isExceed, setIsExceed] = useState(false)
  
  const toast = useToast()

  const [image, setImage] = useState('')

  const [loading, setLoading] = useState(false)

  const getCurrentSymptom = (e) => {
    setForm({ ...form, symptom: e.target.value })
  }
  const getComment = (e) => {
    setForm({...form, comment: e.target.value})
  }
  const getPainSeverity = (e) => {
    setForm({...form, painScale: e})
  }

  const [error, setError] = useState(false)

  const [form, setForm] = useState({
    symptom: '',
    painScale: '',
    image: '',
    comment: '',
  })
  
  console.log(form)

  // handle change for image
  const getImg = (e) => {
    // handle when change image without deleting the previous one
    if (image) {
      deleteImg()
    }
    // upload image to firebase when user choose an image
    if (e.target.files[0]) {
      setImage(e.target.files[0])
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
            setForm({ ...form, image: url })
          })
        }
      )
    }
  }

  console.log("This is URL "+ form.image)
  console.log(typeof(form.image))
  
  // cancel upload image
  function deleteImg() {
    const date = new Date().toISOString().slice(0, 10)
    const deleteRef = ref(storage, `/images/${date}-${image.name}`)
    deleteObject(deleteRef)
      .then(() => {
        console.log('delete success')
      })
      .catch((error) => {
        console.log('delete error', error)
      })
    setImage('')
    setForm({ ...form, image: '' })
  }

  function uploadSingleFile(e) {
    setIsExceed(false)
    if (e.target.files.length > 4) {
      setIsExceed(true)
      return
    }
    setIsError(false)
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    )
    console.log(ImagesArray)
    setForm({ ...form, image: [...form.image, ...ImagesArray] })
  }

  function deleteFile(e) {
    const s = form.image.filter((item, index) => index !== e)
    setForm({ ...form, image: s })
  }

  const onSend = async () => {
    //setIsExceed(false)
      try {
        const result = await axios.post('/api/recordManager/addRecord', {
          symptom: form.symptom,
          painScale: form.painScale,
          image: form.image,
          comment: form.comment,
        })
        console.log("This is Result " + result)
      } catch (err) {
        console.log(err)
      }
      // setTimeout(() => {
      //   window.location.reload()
      //   }, 1500)
        toast({
          title: 'Response submitted',
          description: 'Your response has been submitted',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
    
    /*
    if (!form.symptom || !form.painScale) {
      setIsError(true)
      console.log('form is invalid')
      toast({
        title: 'An error occurred.',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } else {
      if (form.image.length > 4) {
        setIsExceed(true)
        setForm({ ...form, image: [] })
        return
      }
      setIsError(false)
      console.log('form is valid')
      var now = new Date().toLocaleString()
      setForm({ ...form, datetime: now })
      console.log(form)
      try {
        const result = await axios.post('/api/recordManager/addRecord', {
          symptom: form.symptom,
          painScale: form.painScale,
          image: form.image,
          comment: form.comment,
          datetime: form.datetime,
        })
          console.log(result)
      } catch (err) {
          console.log(err)
      }
      toast({
        title: 'Submit successfully',
        description: 'Your record has been submitted.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      // reload page
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }
  }*/
}

  // console.log('form', form)

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadBox topic="symptom tracking" />
      <Box sx={GlobalStyle.layout}>
        <VStack sx={GlobalStyle.infoBox} align="left" spacing={16}>
          {/* ==================== Symptom ==================== */}
          <FormControl isRequired isInvalid={isError && !form.symptom}>
            <FormLabel sx={GlobalStyle.labelText}>Symptom</FormLabel>
            <Textarea
              sx={GlobalStyle.inputStyle}
              placeholder="Fill in your current symptom"
              onChange={getCurrentSymptom}
            />
            {console.log(form.symptom)}
          </FormControl>

          {/* ==================== Pain scale ==================== */}
          <FormControl isRequired isInvalid={isError && !form.painScale}>
            <FormLabel sx={GlobalStyle.labelText}>Pain severity</FormLabel>
            <Box sx={GlobalStyle.sliderBox}>
              <Slider
                defaultValue={4.5}
                min={0}
                max={10}
                step={1}
                sx={GlobalStyle.labelText}
                onChange={getPainSeverity}
              >
                {console.log(form.painScale)}
                <SliderMark value={0}>0</SliderMark>
                <SliderMark value={1}>1</SliderMark>
                <SliderMark value={2}>2</SliderMark>
                <SliderMark value={3}>3</SliderMark>
                <SliderMark value={4}>4</SliderMark>
                <SliderMark value={5}>5</SliderMark>
                <SliderMark value={6}>6</SliderMark>
                <SliderMark value={7}>7</SliderMark>
                <SliderMark value={8}>8</SliderMark>
                <SliderMark value={9}>9</SliderMark>
                <SliderMark value={10}>10</SliderMark>
                <SliderTrack bg={Colour.grey}>
                  <SliderFilledTrack bg={Colour.turquoise} />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
            </Box>
            <FormErrorMessage marginTop="16px" sx={GlobalStyle.errorText}>
              Please select pain severity
            </FormErrorMessage>
          </FormControl>

          {/* ==================== Upload picture ==================== */}
          <FormControl isInvalid={isExceed}>
            <FormLabel sx={GlobalStyle.labelText}>
              Upload picture of your symptom{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Optional)
              </chakra.span>
            </FormLabel>
            <Input
              type="file"
              sx={GlobalStyle.inputStyle}
              onChange={getImg}
              multiple
              isDisabled={form.image.length >= 4}
            />
            {/* show uploading progress */}
            {loading && (
              <ReactLoading
                type={'spin'}
                color={'#000'}
                height={'20px'}
                width={'20px'}
              />
            )}
            
            {!isExceed ? (
              <FormHelperText sx={GlobalStyle.greyMediumText}>
                You can upload up to 4 pictures.
              </FormHelperText>
            ) : (
              <FormErrorMessage sx={GlobalStyle.errorText}>
                Too many files selected.
              </FormErrorMessage>
            )}

            <SimpleGrid
              templateColumns="repeat(auto-fill, minmax(160px, 1fr))"
              sx={GlobalStyle.gridStyle}
              marginTop="24px"
            >
              {/* {form.image.map((item, index) => {
                return (
                  <Box sx={imgBox} key={item}>
                    <CloseIcon
                      sx={close}
                      onClick={() => {
                        deleteFile(index)
                      }}
                      />
                    <Image src={item} sx={imgStyle} />
                  </Box>
                )
              })} */}
            </SimpleGrid>
          </FormControl>

          {/* ==================== Comment ==================== */}
          <FormControl>
            <FormLabel sx={GlobalStyle.labelText}>
              Comment to your doctor{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Optional)
              </chakra.span>
            </FormLabel>
            <Textarea
              sx={GlobalStyle.inputStyle}
              onChange={getComment}
            />
          </FormControl>
        </VStack>

        {/* ==================== Submit button ==================== */}
        <Box sx={GlobalStyle.btnBox}>
          <Button sx={GlobalStyle.blueBtn} onClick={onSend}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>

    
  )
}

// export async function getServerSideProps() {
//   const result = axios.post('/api/recordManager/addRecord')
//   return {
//     props: {
//       AddrecordtoDB: result.data,
//     }
//   }
// }
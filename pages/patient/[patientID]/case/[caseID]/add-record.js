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
import { useAppContext } from '/context/UserContext'
import ReactLoading from 'react-loading'
import { storage } from '/firebaseConfig'
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage'

export default function AddRecord() {

  const {user} = useAppContext()

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

  const [loading, setLoading] = useState(false)

  const getCurrentSymptom = (e) => {
    setForm({ ...form, symptom: e.target.value })
  }
  const getComment = (e) => {
    setForm({ ...form, comment: e.target.value })
  }
  const getPainSeverity = (e) => {
    setForm({ ...form, painScale: e })
  }

  const [error, setError] = useState(false)

  const [storeImg, setStoreImg] = useState([])

  const [image, setImage] = useState([])
  const [form, setForm] = useState({
    symptom: '',
    painScale: '',
    comment: '',
  })

  console.log(form)

  //input image and collect url
  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      //setStoreImg(e.target.files[i])
      //push new image into array next to old one
      setStoreImg((prevState) => [...prevState, e.target.files[i]])
      //setStoreImg({ ...storeImg, [i]: e.target.files[i] })
      //setStoreImg((prevState) => [...prevState, e.target.files[i]])
      const file = e.target.files[i]
      const date = new Date().toISOString().slice(0, 10)
      const storageRef = ref(storage, `/images/${date}-${file.name}`)
      console.log(ref)
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
            setImage((prevState) => [...prevState, url])
          })
        }
      )
    }
  }

  //delete preview image from array and firebase storage
  function rmImage (i) {
    const date = new Date().toISOString().slice(0, 10)
    const deleteRef = ref(storage, `/images/${date}-${storeImg[0].name}`)
    console.log("This is deleteRef")
    console.log(deleteRef)
    deleteObject(deleteRef)
      .then(() => {
        console.log('delete success')
      })
      .catch((err) => {
        console.log(err)
      })
   
    const newStoreImg = [...storeImg]
    newStoreImg.splice(i, 1)
    setStoreImg(newStoreImg)

    const newImages = [...image]
    newImages.splice(i, 1)
    setImage(newImages)
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

  const onSend = async () => {
    setIsExceed(false)
    if (!form.symptom || !form.painScale) {
      setIsError(true)
      console.log('form is invalid')
      toast({
        title: 'An error occurred.',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      if (image.length > 4) {
        setIsExceed(true)
        console.log('Too many files')
        toast({
          title: 'An error occurred.',
          description: 'Too many files uploaded. Max 4 files.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        
      } else {
        setIsError(false)
        console.log('form is valid')
        var now = new Date().toLocaleString()
        setForm({ ...form, datetime: now })
        console.log(form)
        try {
          const result = await axios.post('/api/recordManager/addRecord', {
            caseID: user.caseID,
            symptom: form.symptom,
            painScale: form.painScale,
            comment: form.comment,
            datetime: form.datetime,
            image: image,
          })
          console.log(result)
        } catch (err) {
          console.log(err)
        }
        toast({
          title: 'Submit successfully',
          description: 'Your record has been submitted.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        // reload page
        setTimeout(() => {
          window.location.reload()
        }, 4000)
      }
    }
  }

  console.log(storeImg)
  console.log(typeof(storeImg))

  // console.log('form', form)
  console.log('This is image ')
  console.log(image)

  console.log(typeof(image))
  // console.log("This is "+files)
  // console.log(files)
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
            <FormErrorMessage sx={GlobalStyle.errorText}>
                Please fill in your current symptom
              </FormErrorMessage>
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
              onChange={handleChange}
              multiple
              // isDisabled={form.image.length > 4}
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
                Too many files selected. Please select up to 4 files.
              </FormErrorMessage>
            )}
            {/* show image preview */}
            {image.map((item, index) => (
              <Flex align="center" key={index}>
                <Image src={item} sx={GlobalStyle.profileImg} />
                <Button onClick={rmImage}>cancel</Button>
              </Flex>
              // <Box key={index} sx={GlobalStyle.imageBox}>
              //   <Image
              //     src={item}
              //     alt="preview"
              //     sx={GlobalStyle.imageStyle}
              //     borderRadius="10px"
              //   />
              // </Box>
            ))}

            {/* {files.map((file, key) => {
              return (
                <Flex align="center">
                  <Image src={URL.createObjectURL(file)} sx={GlobalStyle.profileImg} />
                </Flex>
              )
            })}  */}
            {/* {(form.image.length > 0) ? (
              <Flex align="center">
                <Image src={form.image} sx={GlobalStyle.profileImg} />
                <Button onClick={deleteImg}>cancel</Button>
              </Flex>
            ) : null} */}

            {}

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
            <Textarea sx={GlobalStyle.inputStyle} onChange={getComment} />
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

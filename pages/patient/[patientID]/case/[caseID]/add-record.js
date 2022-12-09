import {
  Box,
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
import {
  bgColor,
  layout,
  inputStyle,
  btnPosition,
  contentBox,
  mediumText,
  greyMediumText,
  errorText,
  autoGrid,
  squareImg,
  sliderBox,
  blueBtn,
  removeBtn,
} from '/style-props/Sharedstyles'
import Colour from '/Colour'
import HeadBox from '/components/HeadCenter'
import { useState, useEffect } from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useAppContext } from '/context/UserContext'
import { useRouter } from 'next/router'
import ReactLoading from 'react-loading'
import { storage } from '/firebaseConfig'
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage'

export default function AddRecord() {
  // router
  const router = useRouter()
  const caseID = router.query.caseID
  const patientID = router.query.patientID

  // context
  const { user, setUser } = useAppContext()

  // check if user is logged in
  useEffect(() => {
    if (sessionStorage.getItem('token') == null) {
      sessionStorage.clear()
      setUser(null)
      router.push('/')
      setTimeout(() => {
        alert('Please login first')
      }, 500)
    } else {
      if (jwt_decode(sessionStorage.getItem('token')).role != 'patient') {
        alert('You cannot access this page')
      }
    }
  }, [])

  // toast
  const toast = useToast()

  // check if image is exceed
  const [isExceed, setIsExceed] = useState(false)

  // check if form is valid
  const [isError, setIsError] = useState(false)

  // set when image is uploading
  const [loading, setLoading] = useState(false)

  // set form data
  const [storeImg, setStoreImg] = useState([])
  const [image, setImage] = useState([])
  const [form, setForm] = useState({
    caseID: caseID,
    symptom: '',
    painScale: '',
    comment: '',
  })

  // get form data
  const getCurrentSymptom = (e) => {
    setForm({ ...form, symptom: e.target.value })
  }
  const getComment = (e) => {
    setForm({ ...form, comment: e.target.value })
  }
  const getPainSeverity = (e) => {
    setForm({ ...form, painScale: e })
  }

  //input image and collect url
  function uploadFile(e) {
    setIsExceed(false)
    if (e.target.files.length > 4 - image.length) {
      setIsExceed(true)
      return
    }
    setIsError(false)
    if (e.target.files) {
      const date = new Date().toISOString().slice(0, 10)
      for (let i = 0; i < e.target.files.length; i++) {
        const storageRef = ref(
          storage,
          `/images/records/${date}-${e.target.files[i].name}`
        )
        const uploadTask = uploadBytesResumable(storageRef, e.target.files[i])
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
              let temp = image
              temp.push(url)
              setImage(temp)
              setStoreImg((prevState) => [...prevState, e.target.files[i]])
            })
          }
        )
      }
    }
  }

  // delete preview image
  function deleteFile(index) {
    const remainImage = image.filter((item, i) => index !== i)
    setImage(remainImage)
    // delete image from firebase storage
    const date = new Date().toISOString().slice(0, 10)
    for (let i = 0; i < storeImg.length; i++) {
      if (i === index) {
        const deleteRef = ref(
          storage,
          `/images/records/${date}-${storeImg[i].name}`
        )
        deleteObject(deleteRef)
          .then(() => {
            console.log('delete success')
          })
          .catch((error) => {
            console.log('delete error', error)
          })
      }
    }
    const temp = storeImg.filter((item, i) => index !== i)
    setStoreImg(temp)
  }

  // send form data
  const onClickSend = async () => {
    Object.assign(form, {
      image: image,
      senderID: user.userID,
      senderName: user.name,
      patientID: patientID,
    })
    console.log(form)
    setIsExceed(false)
    if (!form.symptom || !form.painScale) {
      setIsError(true)
      toast({
        title: 'An error occurred.',
        description: 'Please fill in all the required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      setIsError(false)
      console.log(form)
      try {
        const res = await axios.post('/api/recordManager/addRecord', form)
        console.log(res)
        toast({
          title: 'Submit successfully',
          description: 'Your record has been submitted.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        // redirect to record list
        setTimeout(() => {
          router.push(`/patient/${patientID}/case/${caseID}/record`)
        }, 3000)
      } catch (err) {
        console.log(err)
        toast({
          title: 'Error',
          description: 'Please try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    }
  }

  return (
    <Box sx={bgColor}>
      <HeadBox topic="symptom tracking" />
      <Box sx={layout}>
        <VStack sx={contentBox} align="left" spacing={16}>
          {/* ==================== Symptom ==================== */}
          <FormControl isRequired isInvalid={isError && !form.symptom}>
            <FormLabel sx={mediumText}>Symptom</FormLabel>
            <Textarea
              sx={inputStyle}
              placeholder="Fill in your current symptom"
              onChange={getCurrentSymptom}
            />
            {console.log(form.symptom)}
            <FormErrorMessage sx={errorText}>
              Please fill in your current symptom
            </FormErrorMessage>
          </FormControl>

          {/* ==================== Pain scale ==================== */}
          <FormControl isRequired isInvalid={isError && !form.painScale}>
            <FormLabel sx={mediumText}>Pain severity</FormLabel>
            <Box sx={sliderBox}>
              <Slider
                defaultValue={4.5}
                min={0}
                max={10}
                step={1}
                sx={mediumText}
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
            <FormErrorMessage sx={errorText} marginTop="16px">
              Please select pain severity
            </FormErrorMessage>
          </FormControl>

          {/* ==================== Upload picture ==================== */}
          <FormControl isInvalid={isExceed}>
            <FormLabel sx={mediumText}>
              Upload picture of your symptom{' '}
              <chakra.span sx={greyMediumText}>(Optional)</chakra.span>
            </FormLabel>
            <Input
              type="file"
              sx={inputStyle}
              onChange={uploadFile}
              multiple
              isDisabled={image.length >= 4}
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
            {/* check error */}
            {!isExceed ? (
              <FormHelperText sx={greyMediumText}>
                You can upload up to 4 pictures.
              </FormHelperText>
            ) : (
              <FormErrorMessage sx={errorText}>
                Too many files selected. Please select up to 4 files.
              </FormErrorMessage>
            )}

            {/* show image preview */}
            <SimpleGrid sx={autoGrid} marginTop="12px">
              {image.map((image, index) => (
                <Box key={index} sx={{ position: 'relative' }}>
                  <Image src={image} sx={squareImg} />
                  <CloseIcon onClick={() => deleteFile(index)} sx={removeBtn} />
                </Box>
              ))}
            </SimpleGrid>
          </FormControl>

          {/* ==================== Comment ==================== */}
          <FormControl>
            <FormLabel sx={mediumText}>
              Comment to your doctor{' '}
              <chakra.span sx={greyMediumText}>(Optional)</chakra.span>
            </FormLabel>
            <Textarea sx={inputStyle} onChange={getComment} />
          </FormControl>
        </VStack>

        {/* ==================== Submit button ==================== */}
        <Box sx={btnPosition}>
          <Button sx={blueBtn} onClick={() => onClickSend()}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

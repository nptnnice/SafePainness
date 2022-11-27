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
  Tooltip,
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
import { useRouter } from 'next/router'
import ReactLoading from 'react-loading'
import { storage } from '/firebaseConfig'
import url from '/url'
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage'

export default function AddRecord(props) {

  const router = useRouter()
  const caseID = router.query.caseID
  const patientID = router.query.patientID

  const { user } = useAppContext()

  let profileImg = {
    boxSize: { base: '120px', sm: '150px', md: '180px' },
    //position: 'relative',
    objectFit: 'cover',
  }

  let img = {
    boxSize: { base: '120px', sm: '150px', md: '180px' },
    position: 'relative',
    objectFit: 'cover',
    borderRadius: '12px',
  }

  let imgBox = {
    boxSize: { base: '120px', sm: '150px', md: '180px' },
    position: 'relative',
    objectFit: 'cover',
  }
  let close = {
    position: 'absolute',
    right: '8px',
    top: '8px',
    cursor: 'pointer',
    color: Colour.lightBlack,
    _hover: {
      color: Colour.white,
    },
  }

  console.log(caseID)

  const [isExceed, setIsExceed] = useState(false)
  const [isError, setIsError] = useState(false)
  
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

//delete preview image
function deleteFile(index) {
  // console.log(index)
  // console.log(tempImg[index])
  // console.log(form.img[index])
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

  console.log(storeImg)

  for (let i = 0; i < storeImg.length; i++) {
    console.log(storeImg[i].name)
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
            caseID: caseID,
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
  // console.log(typeof (storeImg))

  // console.log('form', form)
  // console.log('This is image ')
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
              onChange={uploadFile}
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
          <Flex direction='row' gap={4}>
            {image.map((item, index) => (
              <Box sx={imgBox} >
                <Flex align="center" key={index} >
                  <Image src={item} sx={img} />
                  <CloseIcon onClick={() => deleteFile(index)} sx={close} />
                  {/* <Button onClick={rmImage}>cancel</Button> */}
                </Flex>
              </Box>
            ))}
          </Flex>
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


export async function getServerSideProps(context) {

  const caseList = await axios.post(`${url}/api/caseManager/getMyCases`, {
    patientID: context.params.patientID,
  })
  return {
    props: {
      caseList: caseList.data,
    },
  }
}

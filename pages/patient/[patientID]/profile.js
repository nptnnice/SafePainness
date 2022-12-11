import { useState, useEffect } from 'react'
import HeadCenter from '/components/HeadCenter'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useAppContext } from '/context/UserContext'
import url from '../../../url'
import jwt_decode from 'jwt-decode'
import { storage } from '/firebaseConfig'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import ReactLoading from 'react-loading'
import {
  flexStyle,
  flexStyle2,
  fileBtn,
  oldfileBtn,
  upload,
  removeBtn,
} from '../../../style-props/Profilestyles'
import {
  contentBox,
  profileImg,
  bgColor,
  layout,
  headingText,
  mediumText,
  inputStyle,
  gridStyle,
  tabBox,
  tabSelected,
  btnPosition,
  whiteBtn,
  blueBtn,
  editBtn,
} from '../../../style-props/Sharedstyles'
import {
  Text,
  Box,
  Flex,
  Input,
  Avatar,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  VStack,
  Button,
  ButtonGroup,
  Image,
  SimpleGrid,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react'

export default function PatientProfile(props) {
  const { patientInfo } = props

  // router
  const router = useRouter()
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
        router.push('/')
        setTimeout(() => {
          alert('You cannot access this page')
        }, 500)
      }
    }
  }, [])

  // toast
  const toast = useToast()

  // set form data
  const [form, setForm] = useState(patientInfo)
  const [previousForm, setPreviousForm] = useState(patientInfo)

  // set edit mode
  const [isEdit, setIsEdit] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isErrorUsername, setIsErrorUsername] = useState(false)
  const [isErrorEmail, setIsErrorEmail] = useState(false)
  const [isErrorPhone, setIsErrorPhone] = useState(false)

  // handle image
  const [selectedFile, setSelectedFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  //check username is already in database
  const checkUsername = async () => {
    let res = await axios.get('/api/userManager/checkUsername', {
      headers: { username: form.username },
    })
    if (
      res.data === 'User already exist' &&
      form.username !== previousForm.username
    ) {
      setIsErrorUsername(true)
      return 0
    } else {
      setIsErrorUsername(false)
      return 1
    }
  }

  // check phone number format
  const checkPhone = () => {
    let regExp = /^[0-9]+$/g
    let result = regExp.test(form.phoneNumber)

    if (result && form.phoneNumber.length === 10) {
      setIsErrorPhone(false)
      return 1
    } else {
      setIsErrorPhone(true)
      return 0
    }
  }

  //check email
  const checkEmail = async () => {
    let res = await axios.get('/api/userManager/checkEmail', {
      headers: { email: form.email },
    })
    if (res.data === 'Email not found' || form.email == previousForm.email) {
      setIsErrorEmail(false)
      return 1
    } else {
      setIsErrorEmail(true)
      return 0
    }
  }

  // preview image before save
  const onSelectFile = (e) => {
    if (form.image == '' || form.image == null) {
      uploadImage(e.target.files[0])
    } else {
      // preview with blob first if there is image
      const objectUrl = URL.createObjectURL(e.target.files[0])
      setForm({ ...form, image: objectUrl })
      setSelectedFile(e.target.files[0])
    }
  }

  // remove image in edit mode
  const removeImage = () => {
    setForm({ ...form, image: '' })
    setSelectedFile(null)
  }

  // save image to firebase
  const uploadImage = async (file) => {
    const storageRef = ref(storage, `/images/patient/${patientID}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        setIsUploading(true)
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
        setIsUploading(false)
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setForm({ ...form, image: url })
        })
      }
    )
  }

  // save to database
  const saveDatabase = async () => {
    try {
      const res = await axios.put('/api/patientManager/updatePatient', form)
      console.log('res', res)
      toast({
        title: 'Update successfully',
        description: 'Your account has been updated.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (err) {
      console.log('err', err)
    }
  }

  // save form
  const onClickSave = async () => {
    // if form.image is objecturl, upload image to firebase
    if (form.image.search('blob') != -1) {
      uploadImage(selectedFile)
      Object.assign(form, { image: previousForm.image })
    }
    console.log('form', form)
    let isUsernameValid = await checkUsername()
    let isEmailValid = await checkEmail()
    let isPhoneNumValid = checkPhone()
    if (
      form.firstName &&
      form.lastName &&
      form.username &&
      form.password &&
      form.phoneNumber &&
      form.email &&
      isUsernameValid &&
      isEmailValid &&
      isPhoneNumValid
    ) {
      await saveDatabase()
      setIsEdit(false)
      setIsError(false)
    } else {
      setIsError(true)
      toast({
        title: 'Error',
        description: 'Please fill in all the required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  // cancel edit
  const onClickCancel = () => {
    setForm(previousForm)
    setIsEdit(false)
    setIsErrorPhone(false)
    setIsErrorUsername(false)
    setIsErrorEmail(false)
  }

  return (
    <Box sx={bgColor}>
      <HeadCenter topic="my profile" />

      <VStack sx={layout} align="start" spacing={8}>
        <Text sx={headingText}>Patient ID: {form.patientID}</Text>
        {/* ==================== Basic information ==================== */}
        <Box sx={contentBox}>
          <Flex sx={flexStyle}>
            <FormControl width="180px">
              {!isEdit ? (
                <FormLabel>
                  <Avatar sx={profileImg} src={form.image} />
                </FormLabel>
              ) : (
                <>
                  <FormLabel>
                    {form.image != '' ? (
                      <Avatar sx={profileImg} src={form.image} />
                    ) : (
                      <Box sx={fileBtn}>
                        <Text sx={upload}>Upload photo</Text>
                      </Box>
                    )}
                  </FormLabel>
                  <Input
                    type="file"
                    onChange={(e) => {
                      onSelectFile(e)
                    }}
                    sx={oldfileBtn}
                  />
                  <Image
                    sx={removeBtn}
                    src="/images/remove.png"
                    onClick={() => removeImage()}
                  />
                </>
              )}
              {/* show uploading progress */}
              {isUploading && (
                <ReactLoading
                  type={'spin'}
                  color={'#000'}
                  height={'20px'}
                  width={'20px'}
                />
              )}
            </FormControl>

            <Box flex="1">
              <SimpleGrid columns={{ base: 1, sm: 2 }} sx={gridStyle}>
                <FormControl isInvalid={isError && !form.firstName}>
                  <FormLabel sx={mediumText}>First Name</FormLabel>
                  <Input
                    sx={inputStyle}
                    value={form.firstName}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, firstName: e.target.value })
                    }}
                  />
                </FormControl>

                <FormControl isInvalid={isError && !form.lastName}>
                  <FormLabel sx={mediumText}>Last Name</FormLabel>
                  <Input
                    sx={inputStyle}
                    value={form.lastName}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, lastName: e.target.value })
                    }}
                  />
                </FormControl>

                <FormControl
                  isInvalid={isErrorUsername || (isError && !form.username)}
                >
                  <FormLabel sx={mediumText}>Username</FormLabel>
                  <Input
                    sx={inputStyle}
                    value={form.username}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, username: e.target.value })
                    }}
                  />
                  {isErrorUsername ? (
                    <FormErrorMessage>Username already exists</FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl isInvalid={isError && !form.password}>
                  <FormLabel sx={mediumText}>Password</FormLabel>
                  <Input
                    sx={inputStyle}
                    type={isEdit ? 'text' : 'password'}
                    value={form.password}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, password: e.target.value })
                    }}
                  />
                </FormControl>

                <FormControl isReadOnly>
                  <FormLabel sx={mediumText}>Date of birth</FormLabel>
                  <Input
                    sx={inputStyle}
                    type="date"
                    value={form.birthDate.substring(0, 10)}
                    opacity="0.8"
                  />
                </FormControl>

                <Flex sx={flexStyle2}>
                  <FormControl isReadOnly>
                    <FormLabel sx={mediumText}>Sex</FormLabel>
                    <Input sx={inputStyle} value={form.sex} opacity="0.8" />
                  </FormControl>

                  <FormControl isReadOnly>
                    <FormLabel
                      sx={Object.assign({ whiteSpace: 'nowrap' }, mediumText)}
                    >
                      Blood group
                    </FormLabel>
                    <Input
                      sx={inputStyle}
                      value={form.bloodGroup}
                      opacity="0.8"
                    />
                  </FormControl>
                </Flex>

                <FormControl
                  isInvalid={isErrorPhone || (isError && !form.phoneNumber)}
                >
                  <FormLabel sx={mediumText}>Phone number</FormLabel>
                  <Input
                    sx={inputStyle}
                    type="number"
                    value={form.phoneNumber}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, phoneNumber: e.target.value })
                    }}
                  />
                  {isErrorPhone ? (
                    <FormErrorMessage>
                      Please enter 10 digit numbers
                    </FormErrorMessage>
                  ) : null}
                </FormControl>

                <FormControl
                  isInvalid={isErrorEmail || (isError && !form.email)}
                >
                  <FormLabel sx={mediumText}>Email</FormLabel>
                  <Input
                    sx={inputStyle}
                    value={form.email}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value })
                    }}
                  />
                  {isErrorEmail ? (
                    <FormErrorMessage>Email already exists</FormErrorMessage>
                  ) : null}
                </FormControl>
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>

        {/* ==================== Medical information ==================== */}
        <Tabs variant="enclosed" width="100%">
          <TabList>
            <Tab sx={tabSelected}>Medical Information</Tab>
          </TabList>
          <TabPanels>
            <TabPanel sx={tabBox}>
              <VStack spacing="24px">
                <FormControl>
                  <FormLabel sx={mediumText}>Medical conditions</FormLabel>
                  <Textarea
                    sx={inputStyle}
                    value={form.medCondition}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, medCondition: e.target.value })
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={mediumText}>Allergy</FormLabel>
                  <Textarea
                    sx={inputStyle}
                    value={form.allergy}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, allergy: e.target.value })
                    }}
                  />
                </FormControl>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* ==================== Button ==================== */}
        <Box sx={btnPosition}>
          {!isEdit ? (
            <Button
              sx={editBtn}
              onClick={() => {
                setIsEdit(!isEdit)
              }}
            >
              Edit
            </Button>
          ) : (
            <ButtonGroup gap={4}>
              <Button sx={whiteBtn} onClick={() => onClickCancel()}>
                Cancel
              </Button>
              <Button
                sx={blueBtn}
                onClick={() => {
                  onClickSave()
                }}
              >
                Save
              </Button>
            </ButtonGroup>
          )}
        </Box>
      </VStack>
    </Box>
  )
}
export async function getServerSideProps(context) {
  const patientResult = await axios.get(
    `${url}/api/patientManager/getPatient`,
    {
      headers: {
        patientID: context.params.patientID,
      },
    }
  )
  return {
    props: {
      patientInfo: patientResult.data,
    },
  }
}

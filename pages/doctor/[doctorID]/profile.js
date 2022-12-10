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
import {
  flexStyle,
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
  Grid,
  GridItem,
  Image,
  FormErrorMessage,
} from '@chakra-ui/react'

export default function DoctorProfile(props) {
  const { doctorInfo } = props

  // router
  const router = useRouter()
  const doctorID = router.query.doctorID

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
      if (jwt_decode(sessionStorage.getItem('token')).role != 'doctor') {
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
  const [form, setForm] = useState(doctorInfo)
  const [previousForm, setPreviousForm] = useState(doctorInfo)

  // set edit mode
  const [isEdit, setIsEdit] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isErrorUsername, setIsErrorUsername] = useState(false)
  const [isErrorEmail, setIsErrorEmail] = useState(false)
  const [isErrorPhone, setIsErrorPhone] = useState(false)

  // handle image
  const [selectedFile, setSelectedFile] = useState(null)

  //check username is already in database
  const checkUsername = async (e) => {
    let username = e.target.value
    let res = await axios.get('/api/userManager/checkUsername', {
      headers: { username: username },
    })
    if (
      res.data === 'User already exist' &&
      username !== previousForm.username
    ) {
      setForm({ ...form, username: username })
      setIsErrorUsername(true)
    } else {
      console.log('username available')
      setForm({ ...form, username: username })
      setIsErrorUsername(false)
    }
  }

  // check phone number format
  const checkPhone = (e) => {
    let regExp = /^[0-9]+$/g
    let result = regExp.test(e.target.value)
    let phone = e.target.value

    if (result && phone.length === 10) {
      setIsErrorPhone(false)
      setForm({ ...form, phoneNumber: phone })
    } else {
      setIsErrorPhone(true)
      setForm({ ...form, phoneNumber: phone })
    }
  }

  //check email
  const checkEmail = async (e) => {
    let email = e.target.value
    let res = await axios.get('/api/userManager/checkEmail', {
      headers: { email: email },
    })
    if (res.data === 'Email not found' || email == previousForm.email) {
      setForm({ ...form, email: email })
      setIsErrorEmail(false)
    } else {
      setForm({ ...form, email: email })
      setIsErrorEmail(true)
    }
  }

  // preview image before save
  const onSelectFile = (e) => {
    if (form.image == '' || form.image == null) {
      // upload to firebase if no image
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
    const storageRef = ref(storage, `/images/doctor/${doctorID}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    await uploadTask.on(
      'state_changed',
      (snapshot) => {
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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setForm({ ...form, image: url })
        })
      }
    )
  }

  // save to database
  const saveDatabase = async () => {
    try {
      const res = await axios.put('/api/doctorManager/updateDoctor', form)
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
    if (
      form.firstName &&
      form.lastName &&
      form.username &&
      form.password &&
      form.phoneNumber &&
      form.department &&
      !isErrorEmail &&
      !isErrorUsername &&
      !isErrorPhone
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
        <Text sx={headingText}>Doctor ID: {doctorID}</Text>

        <Box sx={contentBox}>
          <Flex sx={flexStyle}>
            {/* ==================== Profile image ==================== */}
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
            </FormControl>

            <Box flex="1">
              <Grid sx={gridStyle}>
                {/* ==================== First name ==================== */}
                <FormControl isInvalid={isError && !form.firstName}>
                  <FormLabel sx={mediumText}>First name</FormLabel>
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

                {/* ==================== Last name ==================== */}
                <FormControl isInvalid={isError && !form.lastName}>
                  <FormLabel sx={mediumText}>Last name</FormLabel>
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

                {/* ==================== Username ==================== */}
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
                      checkUsername(e)
                    }}
                  />
                  {isErrorUsername ? (
                    <FormErrorMessage>Username already exists</FormErrorMessage>
                  ) : null}
                </FormControl>

                {/* ==================== Password ==================== */}
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

                {/* ==================== Date of birth ==================== */}
                <FormControl isReadOnly>
                  <FormLabel sx={mediumText}>Date of birth</FormLabel>
                  <Input
                    sx={inputStyle}
                    type="date"
                    value={form.birthDate.substring(0, 10)}
                    opacity="0.8"
                  />
                </FormControl>

                {/* ==================== Phone number ==================== */}
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
                      checkPhone(e)
                    }}
                  />
                  {isErrorPhone ? (
                    <FormErrorMessage>
                      Please enter 10 digit numbers
                    </FormErrorMessage>
                  ) : null}
                </FormControl>

                <GridItem colSpan={{ base: 1, sm: 2 }}>
                  {/* ==================== Email ==================== */}
                  <FormControl isInvalid={isErrorEmail}>
                    <FormLabel sx={mediumText}>Email</FormLabel>
                    <Input
                      sx={inputStyle}
                      value={form.email}
                      isDisabled={!isEdit}
                      _disabled={{ opacity: 0.8 }}
                      onChange={(e) => {
                        checkEmail(e)
                      }}
                    />
                    {isErrorEmail ? (
                      <FormErrorMessage>Email already exists</FormErrorMessage>
                    ) : null}
                  </FormControl>
                </GridItem>
              </Grid>
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
                <FormControl isReadOnly>
                  <FormLabel sx={mediumText}>Medical License</FormLabel>
                  <Input
                    sx={inputStyle}
                    value={form.licenseNO}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, licenseNO: e.target.value })
                    }}
                  />
                </FormControl>
                <FormControl isInvalid={isError && !form.department}>
                  <FormLabel sx={mediumText}>Department</FormLabel>
                  <Input
                    sx={inputStyle}
                    value={form.department}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, department: e.target.value })
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
  const doctorResult = await axios.get(`${url}/api/doctorManager/getDoctor`, {
    headers: {
      doctorID: context.params.doctorID,
    },
  })
  return {
    props: {
      doctorInfo: doctorResult.data,
    },
  }
}

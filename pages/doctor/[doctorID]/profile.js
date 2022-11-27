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
} from '@chakra-ui/react'
import HeadCenter from '/components/HeadCenter'
import GlobalStyle from '../../../Style'
import Colour from '/Colour'
import { useState, useEffect, useRef } from 'react'
import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import url from '../../../url'
import { storage } from '/firebaseConfig'
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage'

export default function DoctorProfile(props) {
  let flexStyle = {
    gap: '24px',
    flexDirection: { base: 'column', md: 'row' },
  }
  let oldfileBtn = {
    opacity: '0',
    position: 'absolute',
    zIndex: '-1',
  }

  const toast = useToast()
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState('')
  const [form, setForm] = useState({
    doctorID: props.doctorInfo[0].doctorID,
    roleID: props.doctorInfo[0].roleID,
    firstName: props.doctorInfo[0].firstName,
    lastName: props.doctorInfo[0].lastName,
    birthDate: props.doctorInfo[0].birthDate,
    citizenID: props.doctorInfo[0].citizenID,
    licenseNO: props.doctorInfo[0].licenseNO,
    phoneNumber: props.doctorInfo[0].phoneNumber,
    username: props.doctorInfo[0].username,
    password: props.doctorInfo[0].password,
    email: props.doctorInfo[0].email,
    department: props.doctorInfo[0].department,
    image: props.doctorInfo[0].image,
  })
  const previousImg = useRef(form.image)
  const previousForm = useRef(form)
  const handleCancel = () => {
    setIsEdit(!isEdit)
    setShow(!show)
    setPreview(previousImg.current)
    setForm(previousForm.current)
  }

  // create a preview, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  //Upload image to firebase storage first time
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    if (selectedFile) {
      deleteImg()
    }
    setSelectedFile(e.target.files[0])
    const doctorID = router.query.doctorID
    const file = e.target.files[0]
    const storageRef = ref(storage, `/images/doctor/${doctorID}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
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

  //Delete image from firebase storage
  function deleteImg() {
    const doctorID = router.query.doctorID
    const deleteRef = ref(storage, `/images/doctor/${doctorID}`)
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

  //Update doctor info
  const handleSave = async () => {
    if (selectedFile) {
      const doctorID = router.query.doctorID
      const file = selectedFile
      const storageRef = ref(storage, `/images/doctor/${doctorID}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
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
        (err) => console.log(err)
      )
    }
    if (
      form.firstName &&
      form.lastName &&
      form.username &&
      form.password &&
      form.birthDate &&
      form.licenseNO &&
      form.department &&
      form.phoneNumber
    ) {
      try {
        const res = await axios.post('/api/doctorManager/updateDoctor', form)
        console.log('res', res)
        console.log('form is valid')
        console.log(form)
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
      //reload page
      setTimeout(() => {
        window.location.reload()
      }, 4000)
    } else {
      console.log('form is invalid')
      toast({
        title: 'An error occurred.',
        description: 'Please try again',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  //Update doctor info with first time image
  const onSaveClick = async () => {
    console.log('form', form)
    if (
      form.firstName &&
      form.lastName &&
      form.username &&
      form.password &&
      form.birthDate &&
      form.licenseNO &&
      form.department &&
      form.phoneNumber
    ) {
      try {
        const res = await axios.post('/api/doctorManager/updateDoctor', form)
        console.log('res', res)
        console.log('form is valid')
        console.log(form)
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
      //reload page
      setTimeout(() => {
        window.location.reload()
      }, 4000)
    } else {
      console.log('form is invalid')
      toast({
        title: 'An error occurred.',
        description: 'Please try again',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadCenter topic="my profile" />

      <VStack sx={GlobalStyle.layout} align="start" spacing={8}>
        <Text sx={GlobalStyle.headingText}>Doctor ID: {form.doctorID}</Text>
        {/* ==================== Basic information ==================== */}
        <Box sx={GlobalStyle.infoBox}>
          <Flex sx={flexStyle}>
            <FormControl width="180px">
              {!isEdit ? (
                <FormLabel>
                  <Avatar sx={GlobalStyle.profileImg} src={form.image} />
                </FormLabel>
              ) : (
                <>
                  <FormLabel cursor="pointer">
                    <Avatar
                      sx={GlobalStyle.profileImg}
                      src={selectedFile ? preview : form.image}
                    />
                  </FormLabel>
                  <Input
                    type="file"
                    onChange={(e) => {
                      if (form.image === null || form.image === '') {
                        onSelectFile(e)
                      } else {
                        setSelectedFile(e.target.files[0])
                      }
                    }}
                    sx={oldfileBtn}
                  />
                </>
              )}
            </FormControl>
            <Box flex="1">
              <Grid sx={GlobalStyle.gridStyle}>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>First name</FormLabel>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    value={form.firstName}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, firstName: e.target.value })
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Last name</FormLabel>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    value={form.lastName}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, lastName: e.target.value })
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Username</FormLabel>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    value={form.username}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, username: e.target.value })
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Password</FormLabel>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    type={show ? 'text' : 'password'}
                    value={form.password}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, password: e.target.value })
                    }}
                  />
                </FormControl>
                <FormControl isReadOnly>
                  <FormLabel sx={GlobalStyle.labelText}>
                    Date of birth
                  </FormLabel>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    type="date"
                    value={form.birthDate.substring(0, 10)}
                    opacity="0.8"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Phone number</FormLabel>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    value={form.phoneNumber}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, phoneNumber: e.target.value })
                    }}
                  />
                </FormControl>
                <GridItem colSpan={{ base: 1, sm: 2 }}>
                  <FormControl>
                    <FormLabel sx={GlobalStyle.labelText}>Email</FormLabel>
                    <Input
                      sx={GlobalStyle.inputStyle}
                      value={form.email}
                      isDisabled={!isEdit}
                      _disabled={{ opacity: 0.8 }}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value })
                      }}
                    />
                  </FormControl>
                </GridItem>
              </Grid>
            </Box>
          </Flex>
        </Box>

        {/* ==================== Medical information ==================== */}
        <Tabs variant="enclosed" width="100%">
          <TabList>
            <Tab sx={GlobalStyle.tabSelected}>Medical Information</Tab>
          </TabList>
          <TabPanels>
            <TabPanel sx={GlobalStyle.tabBox}>
              <VStack spacing="24px">
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>
                    Medical License
                  </FormLabel>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    value={form.licenseNO}
                    isDisabled={!isEdit}
                    _disabled={{ opacity: 0.8 }}
                    onChange={(e) => {
                      setForm({ ...form, licenseNO: e.target.value })
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Department</FormLabel>
                  <Input
                    sx={GlobalStyle.inputStyle}
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
        <Box sx={GlobalStyle.btnBox}>
          {!isEdit ? (
            <Button
              sx={GlobalStyle.editBtn}
              onClick={() => {
                setIsEdit(!isEdit), setShow(!show)
              }}
            >
              Edit
            </Button>
          ) : (
            <ButtonGroup gap={4}>
              <Button sx={GlobalStyle.whiteBtn} onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                sx={GlobalStyle.blueBtn}
                onClick={() => {
                  setIsEdit(!isEdit)
                  setShow(!show)
                  if (form.image === null || form.image === '') {
                    onSaveClick()
                  } else {
                    handleSave()
                  }
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
  const doctorInfo = await axios.post(`${url}/api/doctorManager/getDoctor`, {
    doctorID: context.params.doctorID,
  })
  return {
    props: {
      doctorInfo: doctorInfo.data,
    },
  }
}

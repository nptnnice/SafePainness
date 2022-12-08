import {
  Text,
  Input,
  Button,
  ButtonGroup,
  SimpleGrid,
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  chakra,
  VStack,
} from '@chakra-ui/react'
import HeadCenter from '../components/HeadCenter'
import GlobalStyle from '../Style'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'

export default function CreateDoctorAccount() {
  let flexStyle = {
    gap: '24px',
    width: '100%',
  }

  const [show, setShow] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isErrorUsername, setIsErrorUsername] = useState(false)
  const [isErrorEmail, setIsErrorEmail] = useState(false)
  const [isErrorPhone, setIsErrorPhone] = useState(false)
  const toast = useToast()
  const router = useRouter()
  const onClickCancel = () => {
    router.push('/')
  }

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    birthDate: '',
    citizenID: '',
    licenseNO: '',
    department: '',
    phoneNumber: '',
    email: '',
    image: '',
  })

  //check username is already in database
  const checkUsername = async (e) => {
    let username = e.target.value
    let res = await axios.post('/api/checkUsername', { username: username })
    if (res.data === 'User already exist') {
      setIsErrorUsername(true)
      setForm({ ...form, username: '' })
    } else {
      setIsErrorUsername(false)
      setForm({ ...form, username: username })
    }
  }
  // check phone number format
  const checkPhone = (e) => {
    let regExp = /^[0-9]+$/g
    let result = regExp.test(e.target.value)
    let phone = e.target.value

    if (result && phone.length === 10) {
      setForm({ ...form, phoneNumber: phone })
      setIsErrorPhone(false)
    } else {
      setForm({ ...form, phoneNumber: '' })
      setIsErrorPhone(true)
    }
  }
  //check email
  const checkEmail = async (e) => {
    let email = e.target.value
    let res = await axios.post('/api/checkEmail', { email: email })
    if (res.data === 'Email not found') {
      setIsErrorEmail(false)
      setForm({ ...form, email: email })
    } else {
      setIsErrorEmail(true)
    }
  }

  //Create Doctor Account
  const onCreateDoctor = async () => {
    console.log('form', form)
    if (
      form.firstName &&
      form.lastName &&
      form.username &&
      form.password &&
      form.birthDate &&
      form.citizenID &&
      form.licenseNO &&
      form.department &&
      form.phoneNumber
    ) {
      setIsError(false)
      try {
        const res = await axios.post('/api/doctorManager/addDoctor', form)
        console.log('res', res)
        console.log('form is valid')
        console.log(form)
        toast({
          title: 'Submit successfully',
          description: 'Your account has been created.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } catch (err) {
        console.log('err', err)
      }
      //reload page
      setTimeout(() => {
        router.push('./')
      }, 4000)
    } else {
      setIsError(true)
      console.log('form is invalid')
      toast({
        title: 'An error occurred.',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <HeadCenter topic="Create Doctor Account" />

      <VStack sx={GlobalStyle.layout} align="start" spacing={8}>
        {/* ==================== Basic information ==================== */}
        <Text sx={GlobalStyle.headingText}>Basic Information</Text>
        <SimpleGrid columns={{ base: 1, sm: 2 }} sx={GlobalStyle.gridStyle}>
          <FormControl isRequired isInvalid={isError && !form.firstName}>
            <FormLabel sx={GlobalStyle.labelText}>First Name</FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, firstName: e.target.value })
              }}
            />
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.lastName}>
            <FormLabel sx={GlobalStyle.labelText}>Last Name</FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, lastName: e.target.value })
              }}
            />
          </FormControl>

          <FormControl
            isRequired
            isInvalid={
              (isErrorUsername && !form.username) || (isError && !form.username)
            }
          >
            <FormLabel sx={GlobalStyle.labelText}>Username</FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              onChange={(e) => checkUsername(e)}
            />
            {isErrorUsername ? (
              <FormErrorMessage>Username already exists</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.password}>
            <FormLabel sx={GlobalStyle.labelText}>Password</FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              type={show ? 'text' : 'password'}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value })
              }}
            />
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.birthDate}>
            <FormLabel sx={GlobalStyle.labelText}>Date of birth</FormLabel>
            <Input
              type="date"
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, birthDate: e.target.value })
              }}
            />
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.citizenID}>
            <FormLabel sx={GlobalStyle.labelText}>Citizen ID</FormLabel>
            <Input
              type="number"
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, citizenID: e.target.value })
              }}
            />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid
          gap={{ base: '16px', md: '24px' }}
          width={{ base: '100%', md: '60%' }}
        >
          <FormControl isRequired isInvalid={isError && !form.licenseNO}>
            <FormLabel sx={GlobalStyle.labelText}>
              Medical License Number
            </FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              width="100%"
              onChange={(e) => {
                setForm({ ...form, licenseNO: e.target.value })
              }}
            />
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.department}>
            <FormLabel sx={GlobalStyle.labelText}>Department</FormLabel>
            <Input
              type="text"
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, department: e.target.value })
              }}
            />
          </FormControl>
        </SimpleGrid>

        <Box sx={GlobalStyle.divider}></Box>

        {/* ==================== Contact information ==================== */}
        <Text sx={GlobalStyle.headingText}>Contact Information</Text>
        <Flex sx={flexStyle}>
          <FormControl
            isRequired
            isInvalid={
              (isErrorPhone && !form.phoneNumber) ||
              (isError && !form.phoneNumber)
            }
          >
            <FormLabel sx={GlobalStyle.labelText}>Phone Number</FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              type="number"
              onChange={(e) => checkPhone(e)}
            />
            {isErrorPhone ? (
              <FormErrorMessage>Please enter 10 digit numbers</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl isInvalid={isErrorEmail}>
            <FormLabel sx={GlobalStyle.labelText}>
              Email{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Optional)
              </chakra.span>
            </FormLabel>
            <Input
              type="email"
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                checkEmail(e)
              }}
            />
            {isErrorEmail ? (
              <FormErrorMessage>Email already exists</FormErrorMessage>
            ) : null}
          </FormControl>
        </Flex>

        {/* ==================== Button ==================== */}
        <Box sx={GlobalStyle.btnBox}>
          <ButtonGroup sx={GlobalStyle.btnGroup}>
            <Button sx={GlobalStyle.whiteBtn} onClick={onClickCancel}>
              Cancel
            </Button>

            <Button sx={GlobalStyle.blueBtn} onClick={onCreateDoctor}>
              Create
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </>
  )
}

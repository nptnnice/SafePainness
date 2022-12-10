import HeadCenter from '/components/HeadCenter'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  ButtonGroup,
  SimpleGrid,
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react'
import { flexStyle } from '/style-props/Profilestyles'
import {
  layout,
  headingText,
  mediumText,
  inputStyle,
  gridStyle,
  btnPosition,
  btnGroup,
  whiteBtn,
  blueBtn,
  divider,
  iconInput,
  errorText,
} from '/style-props/Sharedstyles'

export default function CreateDoctorAccount() {
  // router
  const router = useRouter()

  // toast
  const toast = useToast()

  // set show password
  const [show, setShow] = useState(false)
  const handlePassword = () => setShow(!show)

  // check error
  const [isError, setIsError] = useState(false)
  const [isErrorUsername, setIsErrorUsername] = useState(false)
  const [isErrorEmail, setIsErrorEmail] = useState(false)
  const [isErrorPhone, setIsErrorPhone] = useState(false)

  // click cancel
  const onClickCancel = () => {
    router.push('/')
  }

  // set form
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

  // check username is already in database
  const checkUsername = async (e) => {
    let username = e.target.value
    let res = await axios.get('/api/userManager/checkUsername', {
      headers: { username: username },
    })
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

  // check email
  const checkEmail = async (e) => {
    let email = e.target.value
    let res = await axios.get('/api/userManager/checkEmail', {
      headers: { email: email },
    })
    if (res.data === 'Email not found') {
      setIsErrorEmail(false)
      setForm({ ...form, email: email })
    } else {
      setIsErrorEmail(true)
      setForm({ ...form, email: '' })
    }
  }

  // Create Doctor Account
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
      form.phoneNumber &&
      form.email
    ) {
      setIsError(false)
      try {
        const res = await axios.post('/api/doctorManager/addDoctor', form)
        console.log('res', res)
        toast({
          title: 'Submit successfully',
          description: 'Your account has been created.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        //reload page
        setTimeout(() => {
          router.push('/')
        }, 3000)
      } catch (err) {
        console.log('err', err)
      }
    } else {
      setIsError(true)
      console.log('form is invalid')
      toast({
        title: 'Error',
        description: 'Please fill in all the required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <HeadCenter topic="Create Doctor Account" />

      <VStack sx={layout} align="start" spacing={8}>
        <Text sx={headingText}>Basic Information</Text>
        <SimpleGrid columns={{ base: 1, sm: 2 }} sx={gridStyle}>
          {/* ==================== First name ==================== */}
          <FormControl isRequired isInvalid={isError && !form.firstName}>
            <FormLabel sx={mediumText}>First Name</FormLabel>
            <Input
              sx={inputStyle}
              onChange={(e) => {
                setForm({ ...form, firstName: e.target.value })
              }}
            />
          </FormControl>

          {/* ==================== Last name ==================== */}
          <FormControl isRequired isInvalid={isError && !form.lastName}>
            <FormLabel sx={mediumText}>Last Name</FormLabel>
            <Input
              sx={inputStyle}
              onChange={(e) => {
                setForm({ ...form, lastName: e.target.value })
              }}
            />
          </FormControl>

          {/* ==================== username ==================== */}
          <FormControl
            isRequired
            isInvalid={
              (isErrorUsername && !form.username) || (isError && !form.username)
            }
          >
            <FormLabel sx={mediumText}>Username</FormLabel>
            <Input sx={inputStyle} onChange={(e) => checkUsername(e)} />
            {isErrorUsername ? (
              <FormErrorMessage sx={errorText}>
                Username already exists
              </FormErrorMessage>
            ) : null}
          </FormControl>

          {/* ==================== password ==================== */}
          <FormControl isRequired isInvalid={isError && !form.password}>
            <FormLabel sx={mediumText}>Password</FormLabel>
            <InputGroup>
              <Input
                sx={inputStyle}
                type={show ? 'text' : 'password'}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value })
                }}
              />
              <InputRightElement>
                {show ? (
                  <ViewIcon sx={iconInput} onClick={handlePassword} />
                ) : (
                  <ViewOffIcon sx={iconInput} onClick={handlePassword} />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>

          {/* ==================== birthdate ==================== */}
          <FormControl isRequired isInvalid={isError && !form.birthDate}>
            <FormLabel sx={mediumText}>Date of birth</FormLabel>
            <Input
              type="date"
              sx={inputStyle}
              onChange={(e) => {
                setForm({ ...form, birthDate: e.target.value })
              }}
            />
          </FormControl>

          {/* ==================== citizen id ==================== */}
          <FormControl isRequired isInvalid={isError && !form.citizenID}>
            <FormLabel sx={mediumText}>Citizen ID</FormLabel>
            <Input
              type="number"
              sx={inputStyle}
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
          {/* ==================== license number ==================== */}
          <FormControl isRequired isInvalid={isError && !form.licenseNO}>
            <FormLabel sx={mediumText}>Medical License Number</FormLabel>
            <Input
              sx={inputStyle}
              width="100%"
              onChange={(e) => {
                setForm({ ...form, licenseNO: e.target.value })
              }}
            />
          </FormControl>

          {/* ==================== department ==================== */}
          <FormControl isRequired isInvalid={isError && !form.department}>
            <FormLabel sx={mediumText}>Department</FormLabel>
            <Input
              type="text"
              sx={inputStyle}
              onChange={(e) => {
                setForm({ ...form, department: e.target.value })
              }}
            />
          </FormControl>
        </SimpleGrid>

        <Box sx={divider}></Box>

        <Text sx={headingText}>Contact Information</Text>
        <Flex sx={flexStyle}>
          {/* ==================== phone number ==================== */}
          <FormControl
            isRequired
            isInvalid={
              (isErrorPhone && !form.phoneNumber) ||
              (isError && !form.phoneNumber)
            }
          >
            <FormLabel sx={mediumText}>Phone Number</FormLabel>
            <Input
              sx={inputStyle}
              type="number"
              onChange={(e) => checkPhone(e)}
            />
            {isErrorPhone ? (
              <FormErrorMessage sx={errorText}>
                Please enter 10 digit numbers
              </FormErrorMessage>
            ) : null}
          </FormControl>

          {/* ==================== email ==================== */}
          <FormControl
            isRequired
            isInvalid={
              (isErrorEmail && !form.email) || (isError && !form.email)
            }
          >
            <FormLabel sx={mediumText}>Email</FormLabel>
            <Input
              type="email"
              sx={inputStyle}
              onChange={(e) => {
                checkEmail(e)
              }}
            />
            {isErrorEmail ? (
              <FormErrorMessage sx={errorText}>
                Email already exists
              </FormErrorMessage>
            ) : null}
          </FormControl>
        </Flex>

        {/* ==================== Button ==================== */}
        <Box sx={btnPosition}>
          <ButtonGroup sx={btnGroup}>
            <Button sx={whiteBtn} onClick={() => onClickCancel()}>
              Cancel
            </Button>

            <Button sx={blueBtn} onClick={() => onCreateDoctor()}>
              Create
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </>
  )
}

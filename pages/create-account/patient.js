import { flexStyle, flexStyle2 } from '/style-props/Profilestyles'
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
  greyMediumText,
  errorText,
} from '/style-props/Sharedstyles'
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
  Select,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import HeadCenter from '/components/HeadCenter'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'

export default function CreatePatientAccount() {
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
    sex: '',
    birthDate: '',
    citizenID: '',
    phoneNumber: '',
    username: '',
    password: '',
    email: '',
    bloodGroup: '',
    medCondition: '',
    allergy: '',
    image: '',
  })

  //check username is already in database
  const checkUsername = async () => {
    let res = await axios.get('/api/userManager/checkUsername', {
      headers: { username: form.username },
    })
    if (res.data === 'User already exist') {
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
    if (res.data === 'Email not found') {
      setIsErrorEmail(false)
      return 1
    } else {
      setIsErrorEmail(true)
      return 0
    }
  }

  //Create Patient Account
  const onCreatePatient = async () => {
    console.log('form', form)
    let isUsernameValid = await checkUsername()
    let isEmailValid = await checkEmail()
    let isPhoneNumValid = checkPhone()
    if (
      form.firstName &&
      form.lastName &&
      form.username &&
      form.password &&
      form.birthDate &&
      form.sex &&
      form.bloodGroup &&
      form.citizenID &&
      form.medCondition &&
      form.allergy &&
      form.phoneNumber &&
      form.email &&
      isUsernameValid &&
      isEmailValid &&
      isPhoneNumValid
    ) {
      setIsError(false)
      try {
        const res = await axios.post('/api/patientManager/addPatient', form)
        console.log('res', res)
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
        router.push('/')
      }, 3000)
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

  return (
    <>
      <HeadCenter topic="Create Patient Account" />

      <VStack sx={layout} align="start" spacing={8}>
        {/* ==================== Basic information ==================== */}
        <Text sx={headingText}>Basic Information</Text>
        <SimpleGrid columns={{ base: 1, sm: 2 }} sx={gridStyle}>
          <FormControl isRequired isInvalid={isError && !form.firstName}>
            <FormLabel sx={mediumText}>First Name</FormLabel>
            <Input
              sx={inputStyle}
              onChange={(e) => {
                setForm({ ...form, firstName: e.target.value })
              }}
            />
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.lastName}>
            <FormLabel sx={mediumText}>Last Name</FormLabel>
            <Input
              sx={inputStyle}
              onChange={(e) => {
                setForm({ ...form, lastName: e.target.value })
              }}
            />
          </FormControl>

          <FormControl
            isRequired
            isInvalid={isErrorUsername || (isError && !form.username)}
          >
            <FormLabel sx={mediumText}>Username</FormLabel>
            <Input
              sx={inputStyle}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
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

          <Flex sx={flexStyle2}>
            <FormControl isRequired isInvalid={isError && !form.sex}>
              <FormLabel sx={mediumText}>Sex</FormLabel>
              <Select
                placeholder="Choose"
                sx={inputStyle}
                onChange={(e) => {
                  setForm({ ...form, sex: e.target.value })
                }}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="undefined">Undefinded</option>
              </Select>
            </FormControl>

            <FormControl isRequired isInvalid={isError && !form.bloodGroup}>
              <FormLabel sx={mediumText} whiteSpace="nowrap">
                Blood group
              </FormLabel>
              <Select
                placeholder="Choose"
                sx={inputStyle}
                onChange={(e) => {
                  setForm({ ...form, bloodGroup: e.target.value })
                }}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Select>
            </FormControl>
          </Flex>
        </SimpleGrid>
        <SimpleGrid
          gap={{ base: '16px', md: '24px' }}
          width={{ base: '100%', md: '75%' }}
        >
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

          <FormControl isRequired isInvalid={isError && !form.medCondition}>
            <FormLabel sx={mediumText} marginBottom="0">
              Medical conditions{' '}
            </FormLabel>
            <Text sx={greyMediumText} marginBottom="5px">
              (Fill the blank with dash (-), if the answer is no.)
            </Text>
            <Textarea
              sx={inputStyle}
              onChange={(e) => {
                setForm({ ...form, medCondition: e.target.value })
              }}
            />
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.allergy}>
            <FormLabel sx={mediumText} marginBottom="0">
              Allergy
            </FormLabel>
            <Text sx={greyMediumText} marginBottom="5px">
              (Fill the blank with dash (-), if the answer is no.)
            </Text>
            <Textarea
              sx={inputStyle}
              onChange={(e) => {
                setForm({ ...form, allergy: e.target.value })
              }}
            />
          </FormControl>
        </SimpleGrid>

        <Box sx={divider}></Box>

        {/* ==================== Contact information ==================== */}
        <Text sx={headingText}>Contact Information</Text>
        <Flex sx={flexStyle}>
          <FormControl
            isRequired
            isInvalid={isErrorPhone || (isError && !form.phoneNumber)}
          >
            <FormLabel sx={mediumText}>Phone Number</FormLabel>
            <Input
              type="number"
              sx={inputStyle}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
            />
            {isErrorPhone ? (
              <FormErrorMessage sx={errorText}>
                Please enter 10 digit numbers
              </FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl
            isRequired
            isInvalid={isErrorEmail || (isError && !form.email)}
          >
            <FormLabel sx={mediumText}>Email</FormLabel>
            <Input
              type="email"
              sx={inputStyle}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value })
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

            <Button sx={blueBtn} onClick={() => onCreatePatient()}>
              Create
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </>
  )
}

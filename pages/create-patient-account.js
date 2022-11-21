import {
  Text,
  Input,
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
  chakra,
  VStack,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import HeadCenter from '../components/HeadCenter'
import Colour from '../Colour'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'

export default function CreatePatientAccount() {
  let flexStyle = {
    gap: '24px',
    width: '100%',
  }

  const [show, setShow] = useState(false)
  const [isError, setIsError] = useState(false)
  const router = useRouter()
  const toast = useToast()
  const onClickCancel = () => {
    router.push('/')
  }
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

  // check phone number format
  const checkPhone = (e) => {
    let regExp = /^[0-9]+$/g
    let result = regExp.test(e.target.value)
    let phone = e.target.value

    if (result && phone.length === 10) setForm({ ...form, phoneNumber: phone })
    else setForm({ ...form, phoneNumber: '' })
  }

  //Create Patient Account
  const onCreatePatient = async () => {
    console.log('form', form)
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
      form.phoneNumber
    ) {
      setIsError(false)
      try {
        const res = await axios.post('/api/patientManager/addPatient', form)
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
      <HeadCenter topic="Create Patient Account" />

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

          <FormControl isRequired isInvalid={isError && !form.username}>
            <FormLabel sx={GlobalStyle.labelText}>Username</FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, username: e.target.value })
              }}
            />
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

          <Flex sx={flexStyle}>
            <FormControl isRequired isInvalid={isError && !form.sex}>
              <FormLabel sx={GlobalStyle.labelText}>Sex</FormLabel>
              <Select
                placeholder="Choose"
                sx={GlobalStyle.inputStyle}
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
              <FormLabel sx={GlobalStyle.labelText} whiteSpace="nowrap">
                Blood group
              </FormLabel>
              <Select
                placeholder="Choose"
                sx={GlobalStyle.inputStyle}
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
        <VStack spacing="24px">
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

          <FormControl isRequired isInvalid={isError && !form.medCondition}>
            <FormLabel sx={GlobalStyle.labelText}>
              Medical conditions{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Fill the blank with dash (-), if the answer is no.)
              </chakra.span>
            </FormLabel>
            <Textarea
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, medCondition: e.target.value })
              }}
            />
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.allergy}>
            <FormLabel sx={GlobalStyle.labelText}>
              Allergy{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Fill the blank with dash (-), if the answer is no.)
              </chakra.span>
            </FormLabel>
            <Textarea
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, allergy: e.target.value })
              }}
            />
          </FormControl>
        </VStack>

        <Box sx={GlobalStyle.divider}></Box>

        {/* ==================== Contact information ==================== */}
        <Text sx={GlobalStyle.headingText}>Contact Information</Text>
        <Flex sx={flexStyle}>
          <FormControl isRequired isInvalid={isError && !form.phoneNumber}>
            <FormLabel sx={GlobalStyle.labelText}>Phone Number</FormLabel>
            <Input
              type="tel"
              sx={GlobalStyle.inputStyle}
              onChange={(e) => checkPhone(e)}
            />
            <FormErrorMessage>Please enter 10 digit numbers</FormErrorMessage>
          </FormControl>

          <FormControl>
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
                setForm({ ...form, email: e.target.value })
              }}
            />
          </FormControl>
        </Flex>

        {/* ==================== Button ==================== */}
        <Box sx={GlobalStyle.btnBox}>
          <ButtonGroup sx={GlobalStyle.btnGroup}>
            <Button sx={GlobalStyle.whiteBtn} onClick={onClickCancel}>
              Cancel
            </Button>

            <Button sx={GlobalStyle.blueBtn} onClick={onCreatePatient}>
              Create
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </>
  )
}

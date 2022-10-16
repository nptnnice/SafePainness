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
  chakra,
  VStack,
  Avatar,
} from '@chakra-ui/react'
import HeadCenter from '../components/HeadCenter'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState, useEffect } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useToast } from '@chakra-ui/react'

export default () => {
  let flexStyle = {
    gap: '24px',
    width: '100%',
    flexDirection: { base: 'column', sm: 'row' },
    alignItems: { base: 'flex-start', sm: 'flex-end' },
  }
  let iconInput = {
    color: Colour.lightBlack,
    cursor: 'pointer',
    marginTop: '8px',
  }

  const [show, setShow] = useState(false)
  const handlePassword = () => setShow(!show)
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [isError, setIsError] = useState(false)
  const toast = useToast()

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    birthdate: '',
    citizenid: '',
    licenseno: '',
    department: '',
    phonenumber: '',
    email: '',
    photo: '',
  })

  // create a preview, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    setForm({ ...form, photo: objectUrl })
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    // use one file
    setSelectedFile(e.target.files[0])
  }

  // check phone number format
  const checkPhone = (e) => {
    let regExp = /^[0-9]+$/g
    let result = regExp.test(e.target.value)
    let phone = e.target.value

    if (result && phone.length === 10) setForm({ ...form, phonenumber: phone })
    else setForm({ ...form, phonenumber: '' })
  }

  const onCreateDoctor = () => {
    if (
      form.firstname &&
      form.lastname &&
      form.username &&
      form.password &&
      form.birthdate &&
      form.citizenid &&
      form.licenseno &&
      form.department &&
      form.phonenumber
    ) {
      setIsError(false)
      console.log('form is valid')
      console.log(form)
      toast({
        title: 'Submit successfully',
        description: 'Your account has been created.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      //reload page
      setTimeout(() => {
        window.location.reload()
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
        <Flex sx={flexStyle}>
          {selectedFile ? (
            <Avatar src={preview} sx={GlobalStyle.profileImg} />
          ) : (
            <Avatar sx={GlobalStyle.profileImg} />
          )}
          <FormControl>
            <Input
              type="file"
              onChange={onSelectFile}
              sx={GlobalStyle.inputStyle}
            />
          </FormControl>
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 2 }} sx={GlobalStyle.gridStyle}>
          <FormControl isRequired isInvalid={isError && !form.firstname}>
            <FormLabel sx={GlobalStyle.labelText}>First Name</FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, firstname: e.target.value })
              }}
            />
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.lastname}>
            <FormLabel sx={GlobalStyle.labelText}>Last Name</FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, lastname: e.target.value })
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
            <InputGroup>
              <Input
                sx={GlobalStyle.inputStyle}
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

          <FormControl isRequired isInvalid={isError && !form.birthdate}>
            <FormLabel sx={GlobalStyle.labelText}>Date of birth</FormLabel>
            <Input
              type="date"
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, birthdate: e.target.value })
              }}
            />
          </FormControl>

          <FormControl isRequired isInvalid={isError && !form.citizenid}>
            <FormLabel sx={GlobalStyle.labelText}>Citizen ID</FormLabel>
            <Input
              type="number"
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, citizenid: e.target.value })
              }}
            />
          </FormControl>
        </SimpleGrid>

        <VStack spacing="24px">
          <FormControl isRequired isInvalid={isError && !form.licenseno}>
            <FormLabel sx={GlobalStyle.labelText}>
              Medical License Number
            </FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              onChange={(e) => {
                setForm({ ...form, licenseno: e.target.value })
              }}
            />
            <FormHelperText sx={GlobalStyle.greyMediumText}>
              Doctors must be verified by the medical license number
            </FormHelperText>
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
        </VStack>

        <Box sx={GlobalStyle.divider}></Box>

        {/* ==================== Contact information ==================== */}
        <Text sx={GlobalStyle.headingText}>Contact Information</Text>
        <Flex sx={flexStyle}>
          <FormControl isRequired isInvalid={isError && !form.phonenumber}>
            <FormLabel sx={GlobalStyle.labelText}>Phone Number</FormLabel>
            <Input
              sx={GlobalStyle.inputStyle}
              type="number"
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
            <Link href="/">
              <Button sx={GlobalStyle.whiteBtn}>Cancel</Button>
            </Link>
            <Button sx={GlobalStyle.blueBtn} onClick={onCreateDoctor}>
              Create
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </>
  )
}

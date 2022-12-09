import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Input,
  Text,
  VStack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { iconInput } from '../style-props/Sharedstyles'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useAppContext } from '../context/UserContext'

export default function LoginModal({ isOpen, onClose }) {
  let clickText = {
    color: Colour.lightBlue,
    fontFamily: 'IBM Plex Sans',
    fontWeight: '500',
    fontSize: { base: '16px', md: '18px' },
    cursor: 'pointer',
    _hover: {
      textDecoration: 'underline',
    },
  }
  let footModal = {
    justifyContent: 'center',
  }

  // set router
  const router = useRouter()
  const onClickForgotpassword = () => {
    router.push('./forgot-password')
  }

  // context
  const { user, setUser } = useAppContext()

  // set show password
  const [show, setShow] = useState(false)
  const handlePassword = () => setShow(!show)

  // set input
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // get username
  const getUsername = (e) => {
    setIsUsernameValid(true)
    setIsPasswordValid(true)
    setUsername(e.target.value)
  }
  const getPassword = (e) => {
    setIsUsernameValid(true)
    setIsPasswordValid(true)
    setPassword(e.target.value)
  }

  // set error
  const [error, setError] = useState(false)
  const [isUsernameValid, setIsUsernameValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)

  // handle login
  const onLogin = async () => {
    console.log('username: ' + username, '\npassword: ' + password)

    // check if username and password is empty
    if (username && password) {
      setError(false)
      try {
        const res = await axios.post('/api/login', {
          username: username,
          password: password,
        })
        console.log(res)
        if (res.data == 'User not found') {
          setIsUsernameValid(false)
        } else if (res.data == 'Wrong password') {
          setIsPasswordValid(false)
        } else {
          // if login success, set token and user context
          sessionStorage.setItem('token', res.data.token)
          // sessionStorage.setItem('userID', res.data.userID)
          // sessionStorage.setItem('role', res.data.role)
          // sessionStorage.setItem('image', res.data.image)
          // sessionStorage.setItem(
          //   'name',
          //   res.data.firstName + ' ' + res.data.lastName
          // )
          setUser({
            // token: res.data.token,
            userID: res.data.userID,
            role: res.data.role,
            image: res.data.image,
            name: res.data.firstName + ' ' + res.data.lastName,
          })

          // redirect to home page
          if (res.data.role == 'doctor') {
            router.push(`/doctor/${res.data.userID}`)
          } else if (res.data.role == 'patient') {
            router.push(`/patient/${res.data.userID}`)
          }
          onClose()
        }
      } catch (err) {
        alert(err)
      }
    } else {
      setError(true)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent sx={GlobalStyle.modalStyle}>
        <ModalHeader textAlign="center">
          <Text sx={GlobalStyle.headingText}>Login</Text>
          <Text sx={GlobalStyle.regularText}>
            Not a member yet? Create an account to start tracking symptom!
          </Text>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <VStack spacing="16px">
            <FormControl isInvalid={error && !username}>
              <FormLabel sx={GlobalStyle.labelText}>Username</FormLabel>
              <Input sx={GlobalStyle.inputStyle} onChange={getUsername} />
              <FormErrorMessage sx={GlobalStyle.errorText}>
                Please enter your username
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={error && !password}>
              <FormLabel sx={GlobalStyle.labelText}>Password</FormLabel>
              <InputGroup>
                <Input
                  sx={GlobalStyle.inputStyle}
                  type={show ? 'text' : 'password'}
                  onChange={getPassword}
                />
                <InputRightElement>
                  {show ? (
                    <ViewIcon sx={iconInput} onClick={handlePassword} />
                  ) : (
                    <ViewOffIcon sx={iconInput} onClick={handlePassword} />
                  )}
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage sx={GlobalStyle.errorText}>
                Please enter your password
              </FormErrorMessage>
            </FormControl>

            {/* Validation */}
            {!isUsernameValid ? (
              <Alert status="error">
                <AlertIcon />
                User is not found
              </Alert>
            ) : !isPasswordValid ? (
              <Alert status="error">
                <AlertIcon />
                Wrong password
              </Alert>
            ) : null}
          </VStack>
        </ModalBody>

        <ModalFooter sx={footModal}>
          <VStack spacing={4}>
            <Button sx={GlobalStyle.blueBtn} onClick={onLogin}>
              Log in
            </Button>
            <Text
              sx={clickText}
              onClick={() => {
                onClickForgotpassword()
                onClose()
              }}
            >
              Forgot password?
            </Text>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

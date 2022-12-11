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
import {
  iconInput,
  clickText,
  commonModal,
  blueBtn,
  headingText,
  regularText,
  mediumText,
  inputStyle,
  errorText,
} from '../style-props/Sharedstyles'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useAppContext } from '../context/UserContext'

export default function LoginModal({ isOpen, onClose }) {
  // set router
  const router = useRouter()

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

  // set onCLose
  const onCloseModal = () => {
    onClose()
    setUsername('')
    setPassword('')
    setError(false)
    setIsUsernameValid(true)
    setIsPasswordValid(true)
  }

  // handle login
  const onLogin = async () => {
    // console.log('username: ' + username, '\npassword: ' + password)
    // check if username and password is empty
    if (username && password) {
      setError(false)
      try {
        const res = await axios.post('/api/userManager/login', {
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
          setUser({
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

  // handle forgot password
  const onClickForgotpassword = () => {
    router.push('./forgot-password')
  }

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal} isCentered>
      <ModalOverlay />
      <ModalContent sx={commonModal}>
        <ModalHeader textAlign="center">
          <Text sx={headingText}>Login</Text>
          <Text sx={regularText}>
            Not a member yet? Create an account to start tracking symptom!
          </Text>
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <VStack spacing="16px">
            <FormControl isInvalid={error && !username}>
              <FormLabel sx={mediumText}>Username</FormLabel>
              <Input sx={inputStyle} onChange={getUsername} />
              <FormErrorMessage sx={errorText}>
                Please enter your username
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={error && !password}>
              <FormLabel sx={mediumText}>Password</FormLabel>
              <InputGroup>
                <Input
                  sx={inputStyle}
                  type={show ? 'text' : 'password'}
                  onChange={getPassword}
                />
                <InputRightElement>
                  {show ? (
                    <ViewIcon sx={iconInput} onClick={() => handlePassword()} />
                  ) : (
                    <ViewOffIcon
                      sx={iconInput}
                      onClick={() => handlePassword()}
                    />
                  )}
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage sx={errorText}>
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

        <ModalFooter justifyContent="center">
          <VStack spacing={4}>
            <Button sx={blueBtn} onClick={() => onLogin()}>
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

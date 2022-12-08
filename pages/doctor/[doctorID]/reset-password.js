import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Flex,
  FormControl,
  VStack,
  Avatar,
  Center,
  FormErrorMessage,
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import HeadCenter from '/components/HeadCenter'
import Colour from '/Colour'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import axios from 'axios'

export default function ResetPassword() {
  let flexStyle = {
    flexDirection: 'column',
    gap: '5px',
    width: '100%',
  }
  let iconInput = {
    color: Colour.lightBlack,
    cursor: 'pointer',
    marginTop: '8px',
  }
  let Discription = {
    textAlign: 'center',
    color: Colour.lightBlack,
    fontFamily: 'IBM Plex Sans',
    fontWeight: '400',
    fontSize: { base: '16px', md: '18px' },
  }
  let boxStyle = {
    width: '100%',
    borderRadius: '12px',
    backgroundColor: Colour.white,
    padding: { base: '24px 16px', md: '60px 40px' },
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  }
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

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const handlePassword = () => setShow(!show)
  const handlePassword2 = () => setShow2(!show2)
  const [isError, setIsError] = useState(false)
  const [isError2, setIsError2] = useState(false)
  const router = useRouter()
  const toast = useToast()
  const onClickCancel = () => {
    router.push('../../')
  }
  const UserID = router.query.doctorID
  const [password, setPassword] = useState('')
  const [doctorID, setDoctorID] = useState(UserID)
  const checkpassword = (e) => {
    if (e.target.value !== password) {
      setIsError2(true)
    } else {
      setIsError2(false)
      setDoctorID(UserID)
    }
  }
  const onClickReset = async () => {
    if (password) {
      setIsError(false)
      setIsError2(false)
      console.log('password', password)
      console.log('patientID', doctorID)
      try {
        const res = await axios.post('/api/doctorManager/resetPassword', {
          password: password,
          doctorID: doctorID,
        })
        console.log('res', res)
        toast({
          title: 'Password changed!',
          description:
            'Password has been reset successfully, please login again.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } catch (err) {
        console.log('err', err)
      }
      // reload page
      setTimeout(() => {
        router.push('../../')
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
      <Box sx={GlobalStyle.bgColor}>
        <HeadCenter topic="Forgot Password" />
        <Box sx={GlobalStyle.layout}>
          <VStack sx={boxStyle} gap="16px">
            <Center>
              <Avatar sx={GlobalStyle.profileImg} src="/images/key.png" />
            </Center>
            <Text sx={Discription}>Set your new password</Text>
            <Flex sx={flexStyle}>
              <FormControl padding="10px 40px" isRequired isInvalid={isError}>
                <InputGroup>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    placeholder="Enter new password"
                    type={show ? 'text' : 'password'}
                    onChange={(e) => {
                      setPassword(e.target.value)
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
              <FormControl
                padding="0px 40px"
                isRequired
                isInvalid={isError || isError2}
              >
                <InputGroup>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    placeholder="Confirm new password"
                    type={show2 ? 'text' : 'password'}
                    onChange={(e) => {
                      checkpassword(e)
                    }}
                  />
                  <InputRightElement>
                    {show2 ? (
                      <ViewIcon sx={iconInput} onClick={handlePassword2} />
                    ) : (
                      <ViewOffIcon sx={iconInput} onClick={handlePassword2} />
                    )}
                  </InputRightElement>
                </InputGroup>
                {isError2 && (
                  <FormErrorMessage> Passwords do not match </FormErrorMessage>
                )}
              </FormControl>
            </Flex>
            <Button
              sx={GlobalStyle.blueBtn}
              onClick={() => {
                onClickReset()
              }}
            >
              Reset Password
            </Button>
            <Text sx={clickText} onClick={onClickCancel}>
              Cancel
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  )
}

import {
  Text,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  FormControl,
  Avatar,
  Center,
  FormErrorMessage,
} from '@chakra-ui/react'
import {
  clickText,
  bgColor,
  layout,
  profileImg,
  inputStyle,
  blueBtn,
  contentBox,
  iconInput,
  regularText,
} from '/style-props/Sharedstyles'
import HeadCenter from '/components/HeadCenter'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

export default function ResetPassword() {
  // router
  const router = useRouter()
  const token = router.query.userToken

  // set userID
  const [userID, setUserID] = useState('')

  // get userID from token
  useEffect(() => {
    if (token) {
      let decoded = jwt_decode(token)
      setUserID(decoded.userID)
    }
  }, [token])

  // toast
  const toast = useToast()

  // check error
  const [isError, setIsError] = useState(false)
  const [isMatch, setIsMatch] = useState(false)

  // click cancel
  const onClickCancel = () => {
    router.push('/')
  }

  // set showPassword password
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setshowConfirmPassword] = useState(false)
  const handlePassword = () => setShowPassword(!showPassword)
  const handlePassword2 = () => setshowConfirmPassword(!showConfirmPassword)

  // set password
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // check password
  const checkpassword = (e) => {
    if (e.target.value !== password) {
      setIsMatch(false)
    } else {
      setIsMatch(true)
      setConfirmPassword(e.target.value)
    }
  }

  // click reset password
  const onClickReset = async () => {
    if (password && confirmPassword) {
      setIsError(false)
      setIsMatch(true)
      try {
        const res = await axios.put('/api/userManager/reset-password', {
          password: password,
          userID: userID,
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
        // reload page
        setTimeout(() => {
          router.push('/')
        }, 3000)
      } catch (err) {
        console.log('err', err)
      }
    } else {
      setIsError(true)
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
      <Box sx={bgColor}>
        <HeadCenter topic="Forgot Password" />
        <Box sx={layout}>
          <VStack sx={contentBox} gap="16px">
            <Center>
              <Avatar sx={profileImg} src="/images/key.png" />
            </Center>
            <Text sx={Object.assign(regularText, { textAlign: 'center' })}>
              Set your new password
            </Text>
            <VStack width="100%">
              <FormControl
                padding="10px 40px"
                isRequired
                isInvalid={isError && !password}
              >
                <InputGroup>
                  <Input
                    sx={inputStyle}
                    placeholder="Enter new password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                  <InputRightElement>
                    {showPassword ? (
                      <ViewIcon
                        sx={iconInput}
                        onClick={() => handlePassword()}
                      />
                    ) : (
                      <ViewOffIcon
                        sx={iconInput}
                        onClick={() => handlePassword()}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl
                padding="0px 40px"
                isRequired
                isInvalid={isError && !confirmPassword && !isMatch}
              >
                <InputGroup>
                  <Input
                    sx={inputStyle}
                    placeholder="Confirm new password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    onChange={(e) => {
                      checkpassword(e)
                    }}
                  />
                  <InputRightElement>
                    {showConfirmPassword ? (
                      <ViewIcon
                        sx={iconInput}
                        onClick={() => handlePassword2()}
                      />
                    ) : (
                      <ViewOffIcon
                        sx={iconInput}
                        onClick={() => handlePassword2()}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
                {!isMatch && (
                  <FormErrorMessage>Password do not match</FormErrorMessage>
                )}
              </FormControl>
            </VStack>
            <Button
              sx={blueBtn}
              onClick={() => {
                onClickReset()
              }}
            >
              Reset Password
            </Button>
            <Text sx={clickText} onClick={() => onClickCancel()}>
              Cancel
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  )
}

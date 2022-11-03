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
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import HeadCenter from '../components/HeadCenter'
import Colour from '../Colour'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'

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
  const router = useRouter()
  const onClickCancel = () => {
    router.push('./')
  }
  const toast = useToast()
  const onClickReset = () => {
    toast({
      title: 'Password changed!',
      description: 'Password has been reset successfully, please login again.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setTimeout(() => {
      router.push('./')
    }, 4000)
  }

  return (
    <>
      <Box sx={GlobalStyle.bgColor}>
        <HeadCenter topic="Forgot Password" />
        <Box sx={GlobalStyle.layout}>
          <VStack sx={boxStyle} gap="16px">
            <Center>
              <Avatar sx={GlobalStyle.profileImg} src="/images/profile.JPG" />
            </Center>
            <Text sx={Discription}>Set your new password</Text>
            <Flex sx={flexStyle}>
              <FormControl padding="10px 40px">
                <InputGroup>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    placeholder="Enter new password"
                    type={show ? 'text' : 'password'}
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
              <FormControl padding="0px 40px">
                <InputGroup>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    placeholder="Confirm new password"
                    type={show2 ? 'text' : 'password'}
                  />
                  <InputRightElement>
                    {show2 ? (
                      <ViewIcon sx={iconInput} onClick={handlePassword2} />
                    ) : (
                      <ViewOffIcon sx={iconInput} onClick={handlePassword2} />
                    )}
                  </InputRightElement>
                </InputGroup>
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

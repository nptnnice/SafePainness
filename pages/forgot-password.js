import {
  Text,
  Input,
  Button,
  Box,
  FormControl,
  VStack,
  Avatar,
  Center,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import HeadCenter from '../components/HeadCenter'
import Colour from '../Colour'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'

export default function ForgotPassword() {
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
  const router = useRouter()
  const onClickCancel = () => {
    router.push('./')
  }
  const toast = useToast()
  const onSendClick = () => {
    toast({
      title: 'Send email successfully.',
      description:
        'Password reset instruction has been sent, please check your email.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    setTimeout(() => {
      window.location.reload()
    }, 4000)
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
            <Text sx={Discription}>
              Enter your email address and we’ll send you a link to reset your
              password
            </Text>
            <FormControl padding="10px 40px">
              <Input
                sx={GlobalStyle.inputStyle}
                placeholder="Enter your email"
              />
            </FormControl>
            <Button sx={GlobalStyle.blueBtn} onClick={onSendClick}>
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

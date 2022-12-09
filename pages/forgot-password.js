import {
  Text,
  Input,
  Button,
  Box,
  FormControl,
  VStack,
  Avatar,
  Center,
  FormErrorMessage,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import HeadCenter from '../components/HeadCenter'
import Colour from '../Colour'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import emailjs from 'emailjs-com'
import axios from 'axios'
import url from '../url'

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
  let cancelBtn = {
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
  const [isError, setIsError] = useState(false)
  const router = useRouter()
  const onClickCancel = () => {
    router.push('./')
  }
  const toast = useToast()
  const [userLink, setUserLink] = useState(`${url}/reset-password`)
  const checkEmail = async (e) => {
    let email = e.target.value
    let res = await axios.get('/api/checkEmail', { headers: { email: email } })
    if (res.data === 'Email not found') {
      setIsError(true)
      console.log('isError')
    } else {
      setIsError(false)
      console.log('data', res.data)
      // if (res.data[0].roleID == 1) {
      //   setUserLink(`${url}/doctor/res.data.userID/reset-password`)
      //   console.log('userLink', userLink)
      // } else if (res.data[0].roleID == 2) {
      //   setUserLink(`${url}/patient/` + res.data[0].userID + '/reset-password')
      //   console.log('userLink', userLink)
      // }
    }
  }
  // let email = e.target.value
  // let res = await axios.get('/api/checkEmail', { headers: { email: email } })
  // if (res.data === 'Email already exist') {
  //   setIsError(true)
  // } else {
  //   setIsError(false)
  //   console.log('data', res)
  //   if (res.data[0].roleID == 1) {
  //     setUserLink(
  //       '${url}/doctor/' +
  //         res.data[0].userID +
  //         '/reset-password'
  //     )
  //     console.log('userLink', userLink)
  //   } else if (res.data[0].roleID == 2) {
  //     setUserLink(
  //       '${url}/patient/' +
  //         res.data[0].userID +
  //         '/reset-password'
  //     )
  //     console.log('userLink', userLink)
  //   }

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_8yifotl',
        'template_716g5tb',
        e.target,
        'zxExuYmzKG4wq22-p'
      )
      .then(
        (result) => {
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
          }, 4000) //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <Box sx={GlobalStyle.bgColor}>
        <HeadCenter topic="Forgot Password" />
        <Box sx={GlobalStyle.layout}>
          <form onSubmit={sendEmail}>
            <VStack sx={boxStyle} gap="16px">
              <Center>
                <Avatar sx={GlobalStyle.profileImg} src="/images/key.png" />
              </Center>
              <Text sx={Discription}>
                Enter your email address and we’ll send you a link to reset your
                password
              </Text>
              <FormControl padding="10px 40px" isInvalid={isError}>
                <Input type="hidden" name="user_link" value={userLink} />
                <Input
                  sx={GlobalStyle.inputStyle}
                  placeholder="Enter your email"
                  type="email"
                  name="to_email"
                  onChange={(e) => {
                    checkEmail(e)
                  }}
                />
                {isError ? (
                  <FormErrorMessage>Email not found</FormErrorMessage>
                ) : null}
              </FormControl>
              <Button sx={GlobalStyle.blueBtn} type="submit">
                Reset Password
              </Button>
              <Text sx={cancelBtn} onClick={() => onClickCancel()}>
                Cancel
              </Text>
            </VStack>
          </form>
        </Box>
      </Box>
    </>
  )
}

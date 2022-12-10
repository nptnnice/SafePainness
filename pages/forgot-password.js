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
import {
  clickText,
  bgColor,
  layout,
  profileImg,
  inputStyle,
  blueBtn,
  contentBox,
  regularText,
} from '/style-props/Sharedstyles'
import HeadCenter from '../components/HeadCenter'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'
import emailjs from 'emailjs-com'
import axios from 'axios'
import url from '../url'
import jwt from 'jsonwebtoken'

export default function ForgotPassword() {
  // router
  const router = useRouter()

  // toast
  const toast = useToast()

  // check error
  const [isError, setIsError] = useState(false)

  // click cancel
  const onClickCancel = () => {
    router.push('./')
  }

  // set link to send email
  const [userLink, setUserLink] = useState(`${url}/forgot-password`)
  const checkEmail = async (e) => {
    let email = e.target.value
    let res = await axios.get('/api/checkEmail', { headers: { email: email } })
    if (res.data === 'Email not found') {
      setIsError(true)
    } else {
      setIsError(false)
      const userToken = jwt.sign(
        {
          userID: res.data.userID,
        },
        'secret',
        { expiresIn: '1h' }
      )
      setUserLink(`${url}/reset-password/${userToken}`)
    }
  }

  // send email
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
          }, 3000) //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <Box sx={bgColor}>
        <HeadCenter topic="Forgot Password" />
        <Box sx={layout}>
          <form onSubmit={sendEmail}>
            <VStack sx={contentBox} gap="16px">
              <Center>
                <Avatar sx={profileImg} src="/images/key.png" />
              </Center>
              <Text sx={Object.assign(regularText, { textAlign: 'center' })}>
                Enter your email address and we’ll send you a link to reset your
                password
              </Text>

              {/* email input */}
              <FormControl padding="10px 40px" isInvalid={isError}>
                <Input type="hidden" name="user_link" value={userLink} />
                <Input
                  sx={inputStyle}
                  placeholder="Enter your email"
                  type="email"
                  name="to_email"
                  onChange={(e) => {
                    checkEmail(e)
                  }}
                />

                {/* check error */}
                {isError ? (
                  <FormErrorMessage>Email not found</FormErrorMessage>
                ) : null}
              </FormControl>

              {/* button */}
              <Button sx={blueBtn} type="submit">
                Reset Password
              </Button>
              <Text sx={clickText} onClick={() => onClickCancel()}>
                Cancel
              </Text>
            </VStack>
          </form>
        </Box>
      </Box>
    </>
  )
}

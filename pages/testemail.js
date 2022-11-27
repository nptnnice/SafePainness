import React from 'react'
import emailjs from 'emailjs-com'
import { Button, Text, Box, Input, Textarea, FormLabel } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { useState } from 'react'

export default function ContactUs() {
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
          window.location.reload() //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const [userLink, setUserLink] = useState(
    'https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application'
  )

  return (
    <Box sx={GlobalStyle.layout}>
      <form onSubmit={sendEmail}>
        <Text sx={GlobalStyle.headingText}>Email</Text>
        <Input type="hidden" name="user_link" value={userLink} />
        <Text>Email</Text>
        <Input type="email" name="to_email" />
        <Button type="submit">Reset password</Button>
      </form>
    </Box>
  )
}

import {
  Text,
  Box,
  Button,
  Textarea,
  FormLabel,
  FormErrorMessage,
  FormControl,
  VStack,
  useToast,
  flattenTokens,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import GlobalStyle from '/Style'
import HeadInfo from '/components/HeadInfo'
import Responses from '/components/Responses'
import { useAppContext } from '/context/UserContext'
import url from '/url'

export default function Feedback(props) {
  const { feedback, allResponses } = props

  // check role
  const { user } = useAppContext()
  const [roleID, setRoleID] = useState(0)
  useEffect(() => {
    if (user) {
      setRoleID(user.userID)
    }
  }, [user])

  // toast
  const toast = useToast()

  // handle error
  const [error, setError] = useState(false)

  // handle response
  const [form, setForm] = useState({
    message: '',
  })
  const getResponses = (e) => {
    setForm({ ...form, message: e.target.value })
  }

  // handle submit
  const submitResponse = async () => {
    if (form.message) {
      setError(false)
      try {
        const res = await axios.post('/api/responseManager/addResponse', {
          feedbackID: feedback.feedbackID,
          senderID: user.userID,
          message: form.message,
          datetime: new Date(),
        })
        console.log(res)
      } catch (err) {
        console.log(err)
      }
      toast({
        title: 'Success',
        description: 'Your response has been submitted',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      setForm({ message: '' })
      setTimeout(() => {
        window.location.reload()
      }, 4000)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <Box sx={GlobalStyle.bgColor}>
        <HeadInfo
          name="Patient ID"
          patientID="PT000001"
          caseID="2022-000001"
          caseName="Grammar addict"
          doctor="Alan Smith"
        />
        <VStack sx={GlobalStyle.layout} align="start" spacing={8}>
          <Text sx={GlobalStyle.headingText}>Feedback #</Text>
          <Box sx={GlobalStyle.infoBox}>
            <Responses
              feedback={feedback}
              allResponses={allResponses}
              roleID={roleID}
            />
          </Box>
          <Box sx={GlobalStyle.infoBox}>
            <FormControl isInvalid={error && !form.message}>
              <FormLabel sx={GlobalStyle.labelText}>
                {roleID == 1
                  ? 'Response to your patient'
                  : 'Response to your doctor'}
              </FormLabel>
              <Textarea sx={GlobalStyle.inputStyle} onChange={getResponses} />
              <FormErrorMessage marginTop="16px" sx={GlobalStyle.errorText}>
                Please fill in your response
              </FormErrorMessage>
            </FormControl>
          </Box>

          {/* ==== Button ==== */}
          <Box sx={GlobalStyle.btnBox}>
            <Button sx={GlobalStyle.blueBtn} onClick={submitResponse}>
              Submit
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  )
}

export async function getServerSideProps(context) {
  const feedbackID = context.params.feedbackID
  const result = await axios.get(`${url}/api/feedbackManager/getFeedback`, {
    headers: {
      feedbackid: feedbackID,
    },
  })
  const result2 = await axios.get(
    `${url}/api/responseManager/getAllResponses`,
    {
      headers: {
        feedbackid: feedbackID,
      },
    }
  )
  return {
    props: {
      feedback: result.data,
      allResponses: result2.data,
    },
  }
}

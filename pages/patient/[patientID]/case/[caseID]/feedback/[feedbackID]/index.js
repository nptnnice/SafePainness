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
  Flex,
} from '@chakra-ui/react'
import {
  bgColor,
  layout,
  inputStyle,
  btnPosition,
  contentBox,
  headingText,
  mediumText,
  regularText,
  greyMediumText,
  errorText,
  blueBtn,
} from '/style-props/Sharedstyles'
import { flexStyle, boxStyle } from '/style-props/Feedbackstyles'
import axios from 'axios'
import { useState, useEffect } from 'react'
import HeadInfo from '/components/HeadInfo'
import { useRouter } from 'next/router'
import { useAppContext } from '/context/UserContext'
import url from '/url'
import jwt_decode from 'jwt-decode'

export default function Feedback(props) {
  const { feedback, allResponses, feedbacklist } = props

  // router
  const router = useRouter()
  const { caseID, patientID } = router.query

  // find the index of the feedback
  const [feedbackIndex, setFeedbackIndex] = useState(0)
  useEffect(() => {
    for (let i = 0; i < feedbacklist.length; i++) {
      if (feedbacklist[i].feedbackID === feedback.feedbackID) {
        setFeedbackIndex(feedbacklist.length - i)
      }
    }
  }, [])

  // context
  const { user, setUser } = useAppContext()
  const [userRole, setUserRole] = useState('')

  // check if user is logged in
  useEffect(() => {
    if (sessionStorage.getItem('token') == null) {
      sessionStorage.clear()
      setUser(null)
      router.push('/')
      setTimeout(() => {
        alert('Please login first')
      }, 500)
    } else {
      setUserRole(jwt_decode(sessionStorage.getItem('token')).role)
    }
  }, [])

  // toast
  const toast = useToast()

  // check error
  const [error, setError] = useState(false)

  // set response
  const [form, setForm] = useState({
    message: '',
  })
  const getResponses = (e) => {
    setForm({ ...form, message: e.target.value })
  }

  // handle submit
  const onClickSubmit = async () => {
    if (form.message) {
      setError(false)
      try {
        const res = await axios.post('/api/responseManager/addResponse', {
          feedbackID: feedback.feedbackID,
          senderID: user.userID,
          message: form.message,
          senderName: user.name,
          receiverID: user.role === 'doctor' ? patientID : feedback.doctorID,
          patientID: patientID,
          caseID: caseID,
          time: new Date().toISOString(),
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
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <Box sx={bgColor}>
        <HeadInfo
          name="Patient ID"
          patientID={patientID}
          caseID={caseID}
          caseName="Grammar addict"
          // doctor={user.name}
        />

        <VStack sx={layout} align="start" spacing={8}>
          <Text sx={headingText}>Feedback #{feedbackIndex}</Text>
          <Box sx={contentBox}>
            {/* ==================== Feedback ==================== */}
            <Box sx={boxStyle}>
              <Flex sx={flexStyle}>
                <Text sx={mediumText}>
                  Feedback from Dr. {feedback.firstName} {feedback.lastName}
                </Text>
                <Text sx={greyMediumText} textAlign="right">
                  {new Date(feedback.datetime).toLocaleString()}
                </Text>
              </Flex>
              <Text sx={regularText}>{feedback.message}</Text>
            </Box>

            {/* ==================== Response ==================== */}
            {allResponses.map((item, index) => {
              return (
                <Box sx={boxStyle} key={index}>
                  <Flex sx={flexStyle}>
                    <Text sx={mediumText}>
                      Response from {item.firstName} {item.lastName}
                    </Text>
                    <Text sx={greyMediumText} textAlign="right">
                      {new Date(item.datetime).toLocaleString()}
                    </Text>
                  </Flex>
                  <Text sx={regularText}>{item.message}</Text>
                </Box>
              )
            })}
          </Box>

          {/* ==================== Input ==================== */}
          <Box sx={contentBox}>
            <FormControl isInvalid={error && !form.message}>
              <FormLabel sx={mediumText}>
                {userRole === 'doctor'
                  ? 'Response to your patient'
                  : 'Response to your doctor'}
              </FormLabel>
              <Textarea sx={inputStyle} onChange={getResponses} />
              <FormErrorMessage marginTop="16px" sx={errorText}>
                Please fill in your response
              </FormErrorMessage>
            </FormControl>
          </Box>

          {/* ==================== Submit button ==================== */}
          <Box sx={btnPosition}>
            <Button sx={blueBtn} onClick={() => onClickSubmit()}>
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
  const caseID = context.params.caseID

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
  const result3 = await axios.get(`${url}/api/feedbackManager/getAllFeedback`, {
    headers: {
      caseid: caseID,
    },
  })
  return {
    props: {
      feedback: result.data,
      allResponses: result2.data,
      feedbacklist: result3.data,
    },
  }
}

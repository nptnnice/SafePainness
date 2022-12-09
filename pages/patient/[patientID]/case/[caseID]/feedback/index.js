import { Text, Box, Flex, Button } from '@chakra-ui/react'
import {
  bgColor,
  layout,
  turquoiseBtn,
  recordBox,
  boldText,
  greyMediumText,
  breadcrumbFlex,
  contentBox,
} from '/style-props/Sharedstyles'
import HeadInfo from '/components/HeadInfo'
import jwt_decode from 'jwt-decode'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import AddFeedback from '/components/AddFeedback'
import BreadcrumbMenu from '/components/BreadcrumbMenu'
import { useAppContext } from '/context/UserContext'
import url from '/url'

export default function Case(props) {
  const { feedbackList } = props

  // router
  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

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

  // count feedback
  const [feedbackAmount, setFeedbackAmount] = useState(feedbackList.length)

  // add feedback
  const [showAddFeedback, setShowAddFeedback] = useState(false)
  const onClickAddFeedback = () => setShowAddFeedback(!showAddFeedback)

  // click feedback
  const onClickFeedback = (feedbackID) => {
    router.push(`/patient/${patientID}/case/${caseID}/feedback/${feedbackID}`)
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo />

      <Box sx={layout}>
        <Flex sx={breadcrumbFlex}>
          <BreadcrumbMenu />
          {userRole == 'doctor' ? (
            <Button sx={turquoiseBtn} onClick={() => onClickAddFeedback()}>
              + Feedback
            </Button>
          ) : null}
        </Flex>

        <Box sx={contentBox}>
          <AddFeedback isOpen={showAddFeedback} onClose={onClickAddFeedback} />
          {feedbackList.map((feedback, index) => {
            return (
              <Flex
                key={index}
                sx={recordBox}
                onClick={() => onClickFeedback(feedback.feedbackID)}
              >
                <Text sx={boldText}>Feedback #{feedbackAmount - index}</Text>
                <Text sx={greyMediumText}>
                  {new Date(feedback.datetime).toLocaleString()}
                </Text>
              </Flex>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export async function getServerSideProps(context) {
  const result = await axios.get(`${url}/api/feedbackManager/getAllFeedback`, {
    headers: {
      caseid: context.params.caseID,
    },
  })
  return {
    props: {
      feedbackList: result.data,
    },
  }
}

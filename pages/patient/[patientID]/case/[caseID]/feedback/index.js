import {
  Text,
  Box,
  Flex,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import HeadInfo from '/components/HeadInfo'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import AddFeedback from '/components/AddFeedback'
import BreadcrumbMenu from '/components/BreadcrumbMenu'
import { useAppContext } from '/context/UserContext'
import url from '/url'

export default function Case(props) {
  const { feedbackList } = props

  let section2 = {
    marginTop: { base: '24px', md: '16px' },
    position: 'relative',
    width: '100%',
    borderRadius: '12px',
    backgroundColor: Colour.white,
    padding: { base: '24px 16px', md: '40px 20px' },
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  }
  let btnPosition = {
    position: 'absolute',
    right: '0',
    top: { base: '-64px', md: '-72px' },
  }

  // router
  const { user } = useAppContext()
  console.log("This is user")
  console.log(user)

  const router = useRouter()
  console.log("This is router" + router)
  console.log(router)
  const { caseID, name } = router.query
  const patientID = router.query.patientID
  console.log("This is patientID: " + patientID)
  console.log("This is caseID: " + caseID)
  console.log("This is name: " + name)
  
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
      <HeadInfo
        name="Patient ID"
        patientID={patientID}
        caseID={caseID}
        caseName="Grammar addict"
        doctor={user.name}
      />

      <Box sx={GlobalStyle.layout}>
        <BreadcrumbMenu />

        <Box sx={section2}>
          <Box sx={btnPosition}>
            <Button sx={GlobalStyle.turquoiseBtn} onClick={onClickAddFeedback}>
              + Feedback
            </Button>
          </Box>
          <AddFeedback isOpen={showAddFeedback} onClose={onClickAddFeedback} />
          {feedbackList.map((feedback, index) => {
            return (
              <Flex
                key={index}
                sx={GlobalStyle.recordBox}
                onClick={() => onClickFeedback(feedback.feedbackID)}
              >
                <Text sx={GlobalStyle.boldText}>
                  Feedback #{feedbackAmount - index}
                </Text>
                <Text sx={GlobalStyle.greyMediumText}>
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
  const caseID = context.params.caseID
  const result = await axios.get(`${url}/api/feedbackManager/getAllFeedback`, {
    headers: {
      caseid: caseID,
    },
  })
  return {
    props: {
      feedbackList: result.data,
    },
  }
}

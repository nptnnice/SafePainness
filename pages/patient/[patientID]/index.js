import { useRouter } from 'next/router'
import PatientInfo from '/components/PatientInfo'
import axios from 'axios'
import url from '/url'
import { useEffect } from 'react'
import { useAppContext } from '../../../context/UserContext'
import HeadInfo from '/components/HeadInfo'
import { Box, Text, Flex, VStack, Avatar } from '@chakra-ui/react'
import {
  bgColor,
  layout,
  contentBox,
  headingText,
  regularText,
  spanFlex,
  mediumText,
  profileImgSmall,
} from '/style-props/Sharedstyles'
import {
  section,
  onTrack,
  stopTrack,
  caseBox,
  doctornameText,
} from '/style-props/Patientpagestyles'

export default function Patient(props) {
  const { patientInfo, caseList } = props

  // router
  const router = useRouter()
  const patientID = router.query.patientID

  // context
  const { user, setUser } = useAppContext()

  // check if user is logged in
  useEffect(() => {
    if (sessionStorage.getItem('token') == null) {
      sessionStorage.clear()
      setUser(null)
      router.push('/')
      setTimeout(() => {
        alert('Please login first')
      }, 500)
    }
  }, [])

  //click caseID
  const onClickCase = (caseID) => {
    router.push(`./${patientID}/case/${caseID}`)
  }

  return (
    <Box sx={bgColor}>
      <HeadInfo name="Patient ID" patientID={patientInfo.patientID} />
      <Box sx={layout}>
        {/* ==================== Patient information ==================== */}
        <PatientInfo patientInfo={patientInfo} />

        <Box sx={section}>
          <Text sx={headingText}>My Cases</Text>
        </Box>

        {/* ==================== Case list ==================== */}
        <Box sx={contentBox}>
          {caseList.map((item, index) => (
            <Flex
              key={index}
              sx={caseBox}
              onClick={() => {
                onClickCase(item.caseID)
              }}
            >
              <VStack align="start" spacing={1}>
                <Flex sx={spanFlex}>
                  <Text sx={regularText}>Case {item.caseID}:</Text>
                  <Text sx={mediumText}>{item.caseName}</Text>
                </Flex>
                {item.status ? (
                  <Text sx={onTrack}>On Track</Text>
                ) : (
                  <Text sx={stopTrack}>Stop Tracking</Text>
                )}
              </VStack>
              <VStack align="end" spacing={1}>
                <Avatar sx={profileImgSmall} src={item.image} />
                <Text sx={doctornameText}>
                  {item.firstName}&nbsp;{item.lastName}
                </Text>
              </VStack>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export async function getServerSideProps(context) {
  const patientResult = await axios.get(
    `${url}/api/patientManager/getPatient`,
    {
      headers: {
        patientid: context.params.patientID,
      },
    }
  )
  const caseResult = await axios.get(`${url}/api/caseManager/getMyCases`, {
    headers: {
      patientid: context.params.patientID,
    },
  })
  return {
    props: {
      patientInfo: patientResult.data,
      caseList: caseResult.data,
    },
  }
}

import { Box, Text, Flex, VStack } from '@chakra-ui/react'
import {
  layout,
  idText,
  caseText,
  doctorText,
} from '/style-props/Headinfostyles'
import { headBox } from '../style-props/Sharedstyles'
import DoctorInfo from './DoctorInfo'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import url from '/url'

export default function HeadInfo() {
  // router
  const router = useRouter()
  const caseID = router.query.caseID
  const patientID = router.query.patientID

  // handle modal
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  // set info
  const [caseInfo, setCaseInfo] = useState({})
  const [doctorInfo, setDoctorInfo] = useState({})

  // fetch case info
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/api/caseManager/getCase`, {
          headers: {
            caseid: caseID,
          },
        })
        // console.log('res', res)
        setCaseInfo(res.data)
        setDoctorInfo({
          doctorID: res.data.doctorID,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          birthDate: res.data.birthDate,
          citizenID: res.data.citizenID,
          licenseNO: res.data.licenseNO,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
          department: res.data.department,
          image: res.data.image,
        })
      } catch (err) {
        console.log('err', err)
      }
    }
    fetchData()
  }, [])

  return (
    <Box sx={headBox}>
      <Flex sx={layout}>
        <Text sx={idText}>
          Patient ID: {caseID == undefined ? patientID : caseInfo.patientID}
        </Text>
        {caseID && (
          <VStack align={{ base: 'start', md: 'end' }} spacing={0}>
            <Text sx={caseText}>
              Case {caseInfo.caseID}: {caseInfo.caseName}
            </Text>
            <Text sx={doctorText} onClick={handleClick}>
              By Dr. {caseInfo.firstName} {caseInfo.lastName}
            </Text>
            <DoctorInfo
              isOpen={showModal}
              onClose={handleClick}
              doctorInfo={doctorInfo}
            />
          </VStack>
        )}
      </Flex>
    </Box>
  )
}

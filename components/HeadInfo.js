import { Box, Text, Flex, VStack } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import DoctorInfo from './DoctorInfo'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import url from '/url'

export default function HeadInfo() {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  let layout = {
    width: '90%',
    margin: '0 auto',
    maxWidth: '900px',
    justifyContent: 'space-between',
    alignItems: { base: 'start', md: 'end' },
    flexDirection: { base: 'column', md: 'row' },
  }
  let idText = {
    color: Colour.white,
    fontFamily: 'Lato',
    fontSize: { base: '24px', md: '32px' },
    fontWeight: 'bold',
  }
  let caseText = {
    color: Colour.white,
    fontFamily: 'Lato',
    fontSize: { base: '18px', md: '22px' },
    fontWeight: 'medium',
  }
  let doctorText = {
    color: Colour.cream,
    fontFamily: 'Lato',
    fontSize: { base: '16px', md: '20px' },
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    _hover: {
      color: Colour.lightYellow,
    },
  }
  const router = useRouter()
  const caseID = router.query.caseID
  // const { getDoctor } = props

  const [caseInfo, setCaseInfo] = useState({})
  const [doctorInfo, setDoctorInfo] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}/api/caseManager/getCase`, {
          headers: {
            caseid: caseID,
          },
        })
        console.log('res', res)
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

  console.log('doctor', doctorInfo)

  return (
    <Box sx={GlobalStyle.headBox}>
      <Flex sx={layout}>
        <Text sx={idText}>Patient ID: {caseInfo.patientID}</Text>
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

// export async function getServerSideProps(context) {
//   const result = await axios.get(`${url}/api/caseManager/getCase`, {
//     headers: {
//       caseid: context.params.caseID,
//     },
//   })
//   return {
//     props: {
//       caseInfo2: result.data,
//     },
//   }
// }

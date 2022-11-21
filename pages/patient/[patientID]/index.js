import { Box, Text, Flex, VStack, Button, Avatar } from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import HeadInfo from '/components/HeadInfo'
import PatientInfo from '/components/PatientInfo'
import { useRouter } from 'next/router'
import axios from 'axios'
import url from '/url'

export default function Patient(props) {
  let flexStyle = {
    margin: { base: '32px 0 16px', md: '48px 0 20px' },
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
  let onTrack = {
    color: Colour.lightYellow,
    fontFamily: 'Lato',
    fontWeight: 'Bold',
    fontSize: { base: '22px', md: '26px' },
  }
  let stopTrack = {
    color: Colour.turquoise,
    fontFamily: 'Lato',
    fontWeight: 'Bold',
    fontSize: { base: '22px', md: '26px' },
  }
  let caseBox = {
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid',
    borderColor: Colour.grey,
    borderRadius: '12px',
    padding: { base: '8px 16px', md: '8px 20px' },
    marginBottom: '12px',
    cursor: 'pointer',
    transition: 'all 0.1s ease-out',
    width: '100%',
    _hover: {
      borderColor: Colour.turquoise,
    },
  }
  let doctorText = {
    color: Colour.lightBlack,
    textAlign: 'right',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'medium',
    fontSize: { base: '14px', md: '16px' },
    display: { base: 'none', md: 'block' },
  }

  // router
  const router = useRouter()
  const patientID = router.query.patientID

  const onClickCase = (caseID) => {
    router.push(`./${patientID}/case/${caseID}`)
  }

  console.log(props)

  console.log("This is caseList " )
  console.log(props.caseList[0  ])

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo name="Patient ID" patientID={props.patientInfo[0].patientID} />

      <Box sx={GlobalStyle.layout}>
        <PatientInfo patientInfo={props.patientInfo} />

        <Flex sx={flexStyle}>
          <Text sx={GlobalStyle.headingText}>My Cases</Text>
        </Flex>

      

        <Box sx={GlobalStyle.infoBox}>
          {props.caseList.map((item, index) => (
            <Flex
              key={index}
              sx={caseBox}
              onClick={() => {
                onClickCase(item.caseID)
              }}
            > 
            
              <VStack align="start" spacing={1}>
                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.boldText}>Case {item.caseID}:</Text>
                  <Text sx={GlobalStyle.boldText}>{item.caseName}</Text>
                </Flex>
                {item.status ? (
                  <Text sx={onTrack}>On Track</Text>
                ) : (
                  <Text sx={stopTrack}>Stop Tracking</Text>
                )}
              </VStack>
              <VStack align="end" spacing={1}>
                <Avatar sx={GlobalStyle.profileImgSmall} src={item.image} />
                <Text sx={doctorText}>
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
  const patientInfo = await axios.post(`${url}/api/patientManager/getPatient`, {
    patientID: context.params.patientID,
  })
  const caseList = await axios.post(`${url}/api/caseManager/getMyCases`, {
    patientID: context.params.patientID,
  })
  return {
    props: {
      patientInfo: patientInfo.data,
      caseList: caseList.data,
    },
  }
}

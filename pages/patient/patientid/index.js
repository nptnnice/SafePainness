import { Box, Text, Flex, VStack, Button, Avatar } from '@chakra-ui/react'
import GlobalStyle from '../../../Style'
import Colour from '../../../Colour'
import HeadInfo from '../../../components/HeadInfo'
import PatientInfo from '../../../components/PatientInfo'
import { useRouter } from 'next/router'

export default function Patient() {
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

  const router = useRouter()

  const onClickAddCase = () => {
    router.push('./patientid/historytaking/part1')
  }

  const onClickCase = () => {
    router.push('./patientid/caseid')
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo
        name="Patient ID"
        patientID="XXXXXX"
        caseID="XXXX"
        caseName="Grammar addict"
        doctor="Alan Smith"
      />

      <Box sx={GlobalStyle.layout}>
        <PatientInfo />

        <Flex sx={flexStyle}>
          <Text sx={GlobalStyle.headingText}>My Cases</Text>

          {/* <Button sx={GlobalStyle.turquoiseBtn} onClick={onClickAddCase}>
            + Add Case
          </Button> */}
        </Flex>

        <Box sx={GlobalStyle.infoBox}>
          <Flex sx={caseBox} onClick={onClickCase}>
            <VStack align="start" spacing={1}>
              <Flex sx={GlobalStyle.spanFlex}>
                <Text sx={GlobalStyle.boldText}>Case XXXX:</Text>
                <Text sx={GlobalStyle.boldText}>Disease name</Text>
              </Flex>
              <Text sx={onTrack}>On Track</Text>
            </VStack>
            <VStack align="end" spacing={1}>
              <Avatar sx={GlobalStyle.profileImgSmall} src="/images/nice.JPG" />
              <Text sx={doctorText}>Dr.Alan Smith</Text>
            </VStack>
          </Flex>

          <Flex sx={caseBox}>
            <VStack align="start" spacing={1}>
              <Flex sx={GlobalStyle.spanFlex}>
                <Text sx={GlobalStyle.boldText}>Case XXXX:</Text>
                <Text sx={GlobalStyle.boldText}>Disease name</Text>
              </Flex>
              <Text sx={stopTrack}>Stop Track</Text>
            </VStack>
            <VStack align="end" spacing={1}>
              <Avatar sx={GlobalStyle.profileImgSmall} src="/images/nice.JPG" />
              <Text sx={doctorText}>Dr.Alan Smith</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

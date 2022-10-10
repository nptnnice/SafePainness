import {
  Box,
  Text,
  Image,
  Flex,
  Spacer,
  VStack,
  HStack,
  Button,
  chakra,
  Avatar,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import PatientHeader from '../components/PatientHeader'
import CaseSection from '../components/CaseSection'

export default () => {
  let smallBoldText = {
    color: Colour.lightBlack,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: '22px',
  }
  let boldText = {
    color: Colour.lightBlack,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Bold',
    fontSize: '28px',
  }
  let normalText = {
    color: Colour.lightBlack,
    fontFamily: 'IBM Plex Sans',
    fontWeight: '500',
    fontSize: '18px',
  }
  let flexStyle = {
    marginTop: '30px',
    alignItems: 'center',
  }
  let imageStyle = {
    borderRadius: '50%',
    boxSize: '64px',
    objectFit: 'cover',
  }
  let onTrack = {
    color: Colour.lightYellow,
    fontFamily: 'Lato',
    fontWeight: 'Bold',
    fontSize: '28px',
  }
  let stopTrack = {
    color: Colour.turquoise,
    fontFamily: 'Lato',
    fontWeight: 'Bold',
    fontSize: '28px',
  }
  let tabBox = {
    backgroundColor: Colour.white,
    width: '100%',
    padding: '40px 20px',
    borderRadius: '12px',
    marginTop: '16px',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  }
  let caseBox = {
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '2px solid',
    borderColor: Colour.grey,
    borderRadius: '12px',
    padding: '8px 24px',
    marginBottom: '12px',
    cursor: 'pointer',
    transition: 'all 0.1s ease-out',
    width: '100%',
    _hover: {
      borderColor: Colour.turquoise,
    },
  }
  return (
    <Box sx={GlobalStyle.bgColor}>
      <PatientHeader />
      <Box sx={GlobalStyle.layout}>
        <CaseSection />
        <Flex sx={flexStyle}>
          <Text sx={boldText}>My Cases</Text>
          <Spacer />
          <Button sx={GlobalStyle.turquoiseBtn}>+ Add Case</Button>
        </Flex>
        <Box sx={tabBox}>
          <Flex sx={caseBox}>
            <VStack align="start">
              <Text sx={smallBoldText}>Case XXXX: Disease name</Text>
              <Text sx={onTrack}>On Track</Text>
            </VStack>
            <VStack align="end">
              <Avatar sx={imageStyle} src="/images/nice.JPG" />
              <Text sx={normalText}>Dr.Alan Smith</Text>
            </VStack>
          </Flex>
          <Flex sx={caseBox}>
            <VStack align="start">
              <Text sx={smallBoldText}>Case XXXX: Disease name</Text>
              <Text sx={onTrack}>On Track</Text>
            </VStack>
            <VStack align="end">
              <Avatar sx={imageStyle} src="/images/nice.JPG" />
              <Text sx={normalText}>Dr.Alan Smith</Text>
            </VStack>
          </Flex>
          <Flex sx={caseBox}>
            <VStack align="start">
              <Text sx={smallBoldText}>Case XXXX: Disease name</Text>
              <Text sx={stopTrack}>Stop Tracking</Text>
            </VStack>
            <VStack align="end">
              <Avatar sx={imageStyle} src="/images/nice.JPG" />
              <Text sx={normalText}>Dr.Alan Smith</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

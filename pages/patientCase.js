import {
  Box,
  Text,
  Image,
  Flex,
  Spacer,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import PatientHeader from '../components/PatientHeader'

export default () => {
  let flexStyle = {
    marginTop: '30px',
    alignItems: 'center',
  }
  let imageStyle = {
    borderRadius: '50%',
    boxSize: '200px',
    objectFit: 'cover',
  }
  let hStackStyle = {
    justifyContent: 'start',
    gap: '40px',
  }
  let vStackStyle = {
    alignItems: 'left',
    gap: '5px',
  }
  let caseBox = {
    backgroundColor: Colour.white,
    borderRadius: '12px',
    border: '1px solid #D9D9D9',
  }
  return (
    <Box sx={GlobalStyle.bgColor}>
      <PatientHeader />
      <Box sx={GlobalStyle.layout}>
        <HStack sx={GlobalStyle.tabBox} spacing={10} align="left">
          <Image sx={imageStyle} src="/images/nice.JPG" />
          <VStack sx={vStackStyle}>
            <HStack sx={hStackStyle}>
              <Text sx={GlobalStyle.normalText}>First Name: Pakamon</Text>
              <Text sx={GlobalStyle.normalText}>Last Name: Mumu</Text>
            </HStack>
            <HStack sx={hStackStyle}>
              <Text sx={GlobalStyle.normalText}>Age: 22</Text>
              <Text sx={GlobalStyle.normalText}>Blood group: B</Text>
              <Text sx={GlobalStyle.normalText}>Sex: Men</Text>
            </HStack>
            <VStack sx={vStackStyle}>
              <Text sx={GlobalStyle.normalText}>Medical conditions: Test</Text>
              <Text sx={GlobalStyle.normalText}>
                Allgery: Get bothered by grammatical errors
              </Text>
            </VStack>
            <HStack sx={hStackStyle}>
              <Text sx={GlobalStyle.normalText}>Contact: 098-xxx-xxxx</Text>
              <Text sx={GlobalStyle.normalText}>Email: Pokemon@gmail.com</Text>
            </HStack>
          </VStack>
        </HStack>
        <Flex sx={flexStyle}>
          <Text sx={GlobalStyle.headingText}>My Cases</Text>
          <Spacer />
          <Button sx={GlobalStyle.turqBtn}>+ Add Case</Button>
        </Flex>
        <VStack sx={GlobalStyle.tabBox}>
          <Box sx={caseBox}>
            <Text sx={GlobalStyle.normalText}>Temp</Text>
          </Box>
          <Box sx={caseBox}>
            <Text sx={GlobalStyle.normalText}>Temp</Text>
          </Box>
          <Box sx={caseBox}>
            <Text sx={GlobalStyle.normalText}>Temp</Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

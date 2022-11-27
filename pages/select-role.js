import {
  Box,
  Flex,
  Text,
  Image,
  Avatar,
  Spacer,
  Center,
  VStack,
  scaleFadeConfig,
} from '@chakra-ui/react'
import HeadCenter from '../components/HeadCenter'
import GlobalStyle from '/Style'
import Colour from '../Colour'
import { useRouter } from 'next/router'

export default function SelectRole() {
  const router = useRouter()
  let headText = {
    color: Colour.lightBlack,
    fontFamily: 'Lato',
    fontSize: { base: '24px', md: '32px' },
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '50px',
  }
  let textStyle = {
    fontFamily: 'Lato',
    fontSize: { base: '22px', md: '28px' },
    fontWeight: 'black',
    textTransform: 'uppercase',
    color: Colour.lightBlack,
  }
  let flexStyle = {
    gap: '50px',
    flexDirection: { base: 'column', md: 'row' },
  }
  let infoBox = {
    width: '100%',
    borderRadius: '12px',
    backgroundColor: Colour.white,
    padding: { base: '24px 16px', md: '40px 20px' },
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
    transition: 'all 0.2s ease',
    _hover: {
      transform: 'scale(1.05)',
      backgroundColor: Colour.turquoise,
    },
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadCenter topic="create account" />
      <Box sx={GlobalStyle.layout}>
        <Text sx={headText} paddingBottom="50px">
          Choose a role to sign up
        </Text>
        <Flex sx={flexStyle}>
          <Box
            sx={infoBox}
            onClick={() => router.push(`./create-doctor-account`)}
          >
            <VStack>
              <Image
                boxSize={{ base: '200px', md: '250px' }}
                src="/images/doctor.png"
              />
              <Spacer />
              <Text sx={textStyle}>Doctor</Text>
            </VStack>
          </Box>
          <Box
            sx={infoBox}
            onClick={() => router.push(`./create-patient-account`)}
          >
            <VStack>
              <Image
                boxSize={{ base: '200px', md: '250px' }}
                src="/images/patient.png"
              />
              <Spacer />
              <Text sx={textStyle}>Patient</Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

import { Box, Flex, Text, Image, Spacer, VStack } from '@chakra-ui/react'
import HeadCenter from '../../components/HeadCenter'
import { useRouter } from 'next/router'
import { bgColor, layout } from '/style-props/Sharedstyles'
import {
  flexStyle,
  textStyle,
  infoBox,
  headingText,
} from '/style-props/Createaccountstyles'

export default function SelectRole() {
  // router
  const router = useRouter()

  return (
    <Box sx={bgColor}>
      <HeadCenter topic="create account" />
      <VStack sx={layout}>
        <Text sx={headingText}>Choose a role to sign up</Text>
        <Flex sx={flexStyle}>
          <Box sx={infoBox} onClick={() => router.push(`./doctor`)}>
            <VStack>
              <Image
                boxSize={{ base: '200px', md: '250px' }}
                src="/images/doctor.png"
              />
              <Spacer />
              <Text sx={textStyle}>Doctor</Text>
            </VStack>
          </Box>
          <Box sx={infoBox} onClick={() => router.push(`./patient`)}>
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
      </VStack>
    </Box>
  )
}

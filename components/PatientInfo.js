import { Box, Text, Flex, VStack, Avatar } from '@chakra-ui/react'
import GlobalStyle from '../Style'

export default function PatientInfo(props) {
  let layout = {
    gap: '32px',
    flexDirection: { base: 'column', sm: 'column', md: 'row' },
  }
  let infoFlex = {
    justifyContent: 'start',
    gap: { base: '24px', sm: '32px', md: '40px' },
  }

  // get patient info
  const info = props.patientInfo[0]

  // calcuate age from date of birth
  const age = Math.floor(
    (new Date() - new Date(info.birthDate)) / 1000 / 60 / 60 / 24 / 365
  )

  return (
    <Box sx={GlobalStyle.infoBox}>
      <Flex sx={layout}>
        <Avatar sx={GlobalStyle.profileImg} src={info.image} />
        <VStack spacing={4} align="left">
          <Flex sx={infoFlex}>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>First Name: </Text>
              <Text sx={GlobalStyle.regularText}>{info.firstName}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Last Name: </Text>
              <Text sx={GlobalStyle.regularText}>{info.lastName}</Text>
            </Flex>
          </Flex>

          <Flex sx={infoFlex}>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Age: </Text>
              <Text sx={GlobalStyle.regularText}>{age} years</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Blood Group: </Text>
              <Text sx={GlobalStyle.regularText}>{info.bloodGroup}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Sex: </Text>
              <Text sx={GlobalStyle.regularText}>{info.sex}</Text>
            </Flex>
          </Flex>

          <Flex sx={GlobalStyle.spanFlex}>
            <Text sx={GlobalStyle.labelText}>Medical Conditions: </Text>
            <Text sx={GlobalStyle.regularText}>{info.medCondition}</Text>
          </Flex>

          <Flex sx={GlobalStyle.spanFlex}>
            <Text sx={GlobalStyle.labelText}>Allergy: </Text>
            <Text sx={GlobalStyle.regularText}>{info.allergy}</Text>
          </Flex>

          <Flex sx={infoFlex}>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Contact: </Text>
              <Text sx={GlobalStyle.regularText}>{info.phoneNumber}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Email: </Text>
              <Text sx={GlobalStyle.regularText}>{info.email}</Text>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  )
}

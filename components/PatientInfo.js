import { Box, Text, Flex, VStack, Avatar } from '@chakra-ui/react'
import {
  contentBox,
  regularText,
  spanFlex,
  mediumText,
  profileImg,
  spanFlex2,
} from '../style-props/Sharedstyles'
import {
  patientInfoFlex,
  patientInfoLayout,
} from '../style-props/Patientpagestyles'

export default function PatientInfo(props) {
  // get patient info
  const info = props.patientInfo

  // calcuate age from date of birth
  const age = Math.floor(
    (new Date() - new Date(info.birthDate)) / 1000 / 60 / 60 / 24 / 365
  )

  return (
    <Box sx={contentBox}>
      <Flex sx={patientInfoLayout}>
        <Avatar sx={profileImg} src={info.image} />
        <VStack spacing={4} align="left">
          <Flex sx={patientInfoFlex}>
            <Flex sx={spanFlex}>
              <Text sx={mediumText}>First Name: </Text>
              <Text sx={regularText}>{info.firstName}</Text>
            </Flex>
            <Flex sx={spanFlex}>
              <Text sx={mediumText}>Last Name: </Text>
              <Text sx={regularText}>{info.lastName}</Text>
            </Flex>
          </Flex>

          <Flex sx={patientInfoFlex}>
            <Flex sx={spanFlex}>
              <Text sx={mediumText}>Age: </Text>
              <Text sx={regularText}>{age} years</Text>
            </Flex>
            <Flex sx={spanFlex}>
              <Text sx={mediumText}>Blood Group: </Text>
              <Text sx={regularText}>{info.bloodGroup}</Text>
            </Flex>
            <Flex sx={spanFlex}>
              <Text sx={mediumText}>Sex: </Text>
              <Text sx={regularText}>{info.sex}</Text>
            </Flex>
          </Flex>

          <Flex sx={spanFlex2}>
            <Text sx={mediumText}>Medical Conditions: </Text>
            <Text sx={regularText}>{info.medCondition}</Text>
          </Flex>

          <Flex sx={spanFlex2}>
            <Text sx={mediumText}>Allergy: </Text>
            <Text sx={regularText}>{info.allergy}</Text>
          </Flex>

          <Flex sx={patientInfoFlex}>
            <Flex sx={spanFlex}>
              <Text sx={mediumText}>Contact: </Text>
              <Text sx={regularText}>{info.phoneNumber}</Text>
            </Flex>
            <Flex sx={spanFlex}>
              <Text sx={mediumText}>Email: </Text>
              <Text sx={regularText}>{info.email}</Text>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  )
}

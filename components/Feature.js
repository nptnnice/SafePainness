import { Text, Flex, VStack, Image, Box } from '@chakra-ui/react'
import {
  headTextBlack,
  flexStyle,
  flexStyle2,
  featureImg,
} from '../style-props/Homepagestyles'
import { headingText, greyMediumText } from '/style-props/Sharedstyles'

export default function Feature() {
  return (
    <Box textAlign="center">
      <Text sx={headTextBlack}>Get to know about us</Text>
      <Flex sx={flexStyle}>
        <Image sx={featureImg} src="/images/historyTaking.png" />
        <VStack>
          <Text sx={headingText}>Easy history taking</Text>
          <Text sx={greyMediumText}>
            Doctors can take history easier by using our questionnaire which is
            based on SOCRATES, a useful way of exploring a patient&apos;s
            presenting symptoms.
          </Text>
        </VStack>
      </Flex>
      <Flex sx={flexStyle2}>
        <VStack>
          <Text sx={headingText}>Symptom tracking</Text>
          <Text sx={greyMediumText}>
            Symptom tracking can help you keep track of your symptoms easier, so
            you and your doctor can identify patterns and triggers for your
            flares.
          </Text>
        </VStack>
        <Image sx={featureImg} src="/images/tracking.png" />
      </Flex>
      <Flex sx={flexStyle}>
        <Image sx={featureImg} src="/images/feedback.png" />
        <VStack>
          <Text sx={headingText}>Giving feedback</Text>
          <Text sx={greyMediumText}>
            The doctor can monitor the progress of the patient&apos;s symptom
            and give feedback to the patient remotely.
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}

import { Text, Flex, VStack, Image, Box } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

export default () => {
  const headText = {
    color: Colour.lightBlack,
    fontFamily: 'Lato',
    fontSize: { base: '24px', md: '32px' },
    fontWeight: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
  let imgStyle = {
    width: { base: '120px', sm: '140px', md: '160px' },
    marginBottom: '24px',
  }
  let flexStyle = {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px auto 0',
    columnGap: '80px',
    flexDirection: { base: 'column', md: 'row' },
  }
  let flexStyle2 = {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px auto 0',
    columnGap: '80px',
    flexDirection: { base: 'column-reverse', md: 'row' },
  }
  let section = {
    textAlign: 'center',
  }

  return (
    <Box sx={section}>
      <Text sx={headText}>Get to know about us</Text>
      <Flex sx={flexStyle}>
        <Image sx={imgStyle} src="/images/historyTaking.png" />
        <VStack>
          <Text sx={GlobalStyle.headingText}>Easy history taking</Text>
          <Text sx={GlobalStyle.greyMediumText}>
            Doctors can take history easier by using our questionnaire which is
            based on SOCRATES, a useful way of exploring a patient's presenting
            symptoms.
          </Text>
        </VStack>
      </Flex>
      <Flex sx={flexStyle2}>
        <VStack>
          <Text sx={GlobalStyle.headingText}>Symptom tracking</Text>
          <Text sx={GlobalStyle.greyMediumText}>
            Symptom tracking can help you keep track of your symptoms easier, so
            you and your doctor can identify patterns and triggers for your
            flares.
          </Text>
        </VStack>
        <Image sx={imgStyle} src="/images/tracking.png" />
      </Flex>
      <Flex sx={flexStyle}>
        <Image sx={imgStyle} src="/images/feedback.png" />
        <VStack>
          <Text sx={GlobalStyle.headingText}>Giving feedback</Text>
          <Text sx={GlobalStyle.greyMediumText}>
            The doctor can monitor the progress of the patient's symptom and
            give feedback to the patient remotely.
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}

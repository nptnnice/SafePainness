import { Text, Flex, VStack, Image, Box } from '@chakra-ui/react'
import { headingText, boldText, normalText } from '../pages/style'

export default () => {
  let imgStyle = {
    width: '160px',
    marginBottom: '24px',
  }
  let flexStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    gap: '160px',
    marginTop: '40px',
  }
  let section = {
    textAlign: 'center',
  }

  return (
    <Box sx={section}>
      <Text sx={headingText}>Get to know about us</Text>
      <Flex sx={flexStyle}>
        <VStack>
          <Image sx={imgStyle} src="/images/historyTaking.png" />
          <Text sx={boldText}>Feature 1</Text>
          <Text sx={normalText}>Easy history taking</Text>
        </VStack>
        <VStack>
          <Image sx={imgStyle} src="/images/tracking.png" />
          <Text sx={boldText}>Feature 2</Text>
          <Text sx={normalText}>Symptom tracking</Text>
        </VStack>
        <VStack>
          <Image sx={imgStyle} src="/images/feedback.png" />
          <Text sx={boldText}>Feature 3</Text>
          <Text sx={normalText}>Giving feedback</Text>
        </VStack>
      </Flex>
    </Box>
  )
}

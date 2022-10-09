import { Text, Flex } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { FeedbackList } from '../FeedbackList'

export default () => {
  return (
    <>
      {FeedbackList.map((feedback) => {
        return (
          <Flex sx={GlobalStyle.recordBox}>
            <Text sx={GlobalStyle.normalText}>Feedback #{feedback.id}</Text>
            <Text sx={GlobalStyle.greyNormalText}>{feedback.date}</Text>
          </Flex>
        )
      })}
    </>
  )
}

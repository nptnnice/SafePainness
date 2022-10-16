import { Text, Flex } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { FeedbackList } from '../FeedbackList'

export default () => {
  return (
    <>
      {FeedbackList.map((feedback) => {
        return (
          <Flex sx={GlobalStyle.recordBox}>
            <Text sx={GlobalStyle.boldText}>Feedback #{feedback.id}</Text>
            <Text sx={GlobalStyle.greyMediumText}>{feedback.date}</Text>
          </Flex>
        )
      })}
    </>
  )
}

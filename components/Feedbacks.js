import { Text, Flex } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { FeedbackList } from '../FeedbackList'
import { useRouter } from 'next/router'

export default function Feedbacks() {
  const router = useRouter()
  const onClickFeedback = () => {
    router.push('./caseid/feedbackid')
  }
  return (
    <>
      {FeedbackList.map((feedback, index) => {
        return (
          <Flex
            key={index}
            sx={GlobalStyle.recordBox}
            onClick={onClickFeedback}
          >
            <Text sx={GlobalStyle.boldText}>Feedback #{feedback.id}</Text>
            <Text sx={GlobalStyle.greyMediumText}>{feedback.date}</Text>
          </Flex>
        )
      })}
    </>
  )
}

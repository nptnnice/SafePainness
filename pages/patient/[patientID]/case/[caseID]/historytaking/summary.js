import { Box, Text, VStack, Image } from '@chakra-ui/react'
import FormProgress from '/components/FormProgress'
import {
  clickText,
  headingText,
  bgColor,
  formBox,
  profileImg,
  layout,
} from '/style-props/Sharedstyles'
import { useRouter } from 'next/router'

export default function History3() {
  // router
  const router = useRouter()

  // click to go to homepage
  const onClickHomePage = () => {
    router.push('/')
  }

  return (
    <Box sx={bgColor}>
      <FormProgress progress={100} />
      <VStack sx={layout}>
        <VStack sx={formBox} spacing={8}>
          <Image src="/images/checked.png" sx={profileImg} />
          <Text sx={headingText} textAlign="center">
            Your response has been submitted
          </Text>
          <Text sx={clickText} onClick={() => onClickHomePage()}>
            Go to homepage
          </Text>
        </VStack>
      </VStack>
    </Box>
  )
}

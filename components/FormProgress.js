import { Box, Text, Progress } from '@chakra-ui/react'
import GlobalStyle from '../Style'

export default ({ progress }) => {
  let progressStyle = {
    width: '60%',
    margin: '24px auto',
  }
  return (
    <Box sx={GlobalStyle.headBox}>
      <Text sx={GlobalStyle.headText}>HISTORY TAKING</Text>
      <Progress value={progress} sx={progressStyle} colorScheme="cyan" />
    </Box>
  )
}

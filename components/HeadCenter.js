import { Text, Box } from '@chakra-ui/react'
import GlobalStyle from '../Style'

export default function HeadCenter({ topic }) {
  return (
    <Box sx={GlobalStyle.headBox}>
      <Text sx={GlobalStyle.headText}>{topic}</Text>
    </Box>
  )
}

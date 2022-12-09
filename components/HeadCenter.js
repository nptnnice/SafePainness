import { Text, Box } from '@chakra-ui/react'
import { headBox, headText } from '../style-props/Sharedstyles'

export default function HeadCenter({ topic }) {
  return (
    <Box sx={headBox}>
      <Text sx={headText}>{topic}</Text>
    </Box>
  )
}

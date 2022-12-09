import { Box, Text, Progress } from '@chakra-ui/react'
import { headBox, headText, progressStyle } from '../style-props/Sharedstyles'

export default function FormProgress({ progress }) {
  return (
    <Box sx={headBox}>
      <Text sx={headText}>HISTORY TAKING</Text>
      <Progress value={progress} sx={progressStyle} colorScheme="cyan" />
    </Box>
  )
}

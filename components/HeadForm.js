import { Box, Text, Progress } from '@chakra-ui/react'
import Colour from '../Colour'

export default () => {
  let section = {
    backgroundColor: Colour.lightBlue,
    width: '100%',
    textAlign: 'center',
    padding: '150px 0 80px',
  }
  let headText = {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: '40px',
    fontWeight: 'black',
  }
  let progressStyle = {
    width: '60%',
    margin: '24px auto 0',
  }
  return (
    <Box sx={section}>
      <Text sx={headText}>HISTORY TAKING</Text>
      <Progress value={50} sx={progressStyle} colorScheme="cyan" />
    </Box>
  )
}

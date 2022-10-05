import { Box, Text, Progress } from '@chakra-ui/react'
import Colour from '../Colour'

export default ({ progress }) => {
  console.log(progress)
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
      <Progress value={progress} sx={progressStyle} colorScheme="cyan" />
    </Box>
  )
}

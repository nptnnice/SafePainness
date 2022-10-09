import { Box, Text } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

export default () => {
  let headBox = {
    backgroundColor: Colour.lightBlue,
    width: '100%',
    textAlign: 'left',
    padding: '150px 10% 2% 20%',
  }
  let headText = {
    fontFamily: 'Lato',
    fontSize: '36px',
    fontWeight: 'bold',
    color: Colour.white,
  }
  return (
    <Box sx={headBox}>
      <Text sx={headText}>Patient ID: XXXXXX</Text>
    </Box>
  )
}

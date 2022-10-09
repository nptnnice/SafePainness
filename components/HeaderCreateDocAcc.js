import { Text, Divider } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

//220 px
export default () => {
  return (
    <>
      <Text sx={GlobalStyle.headingText} marginTop="101px" marginLeft="200px">
        Create Doctor Account
      </Text>
      <Divider width='90%'margin='auto' merginLeft='90px' marginTop='2%'/>
    </>
  )
}

import { Text, Divider } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

//220 px
export default () => {
  return (
    <>
      <Text sx={GlobalStyle.headingText} marginTop="48px"  marginLeft='-81px'>
        Create Doctor Account
      </Text>
      <Divider width='1200px' marginLeft='-168px' marginTop='4%'/>    
    </>
  )
}

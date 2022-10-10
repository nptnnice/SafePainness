import { Text, Divider } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

//220 px
//<Progress sx={Line} colorScheme='#D3D3D3' height='3px' size='sm' value={100} />
//<Divider/>

export default () => {

  return (
    <>
      <Text sx={GlobalStyle.headingText} marginTop="48px" marginLeft="-81px">
        Create Patient Account
      </Text>
      <Divider width='1200px' marginLeft='-168px' marginTop='4%'/>    
    </>
  )
}

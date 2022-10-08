import { Text, Progress } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

//220 px
export default () => {
  let Line = {
    margin: 'auto',
    alignItems: 'center',
    marginTop: '30px',
    width: '90%',
    merginLeft: '90px',
  }

  return (
    <>
      <Text sx={GlobalStyle.headingText} marginTop="101px" marginLeft="200px">
        Create Doctor Account
      </Text>
      <Progress
        sx={Line}
        colorScheme="#D3D3D3"
        height="3px"
        size="sm"
        value={100}
      />
    </>
  )
}

import { Text, Flex, VStack, Image, Box } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

export default () => {
  let imgStyle = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '16px',
  }
  let flexStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '80px',
    marginTop: '40px',
  }
  let section = {
    textAlign: 'center',
    marginTop: '80px',
    backgroundColor: Colour.lightGrey,
    padding: '80px',
  }

  return (
    <Box sx={section}>
      <Text sx={GlobalStyle.headingText}>TEAM</Text>
      <Flex sx={flexStyle}>
        <VStack>
          <Image sx={imgStyle} src="/images/petch.JPG" />
          <Text sx={GlobalStyle.boldText}>63070501045</Text>
          <Text sx={GlobalStyle.normalText}>Piyachart Chailaemlak</Text>
        </VStack>
        <VStack>
          <Image sx={imgStyle} src="/images/nice.JPG" />
          <Text sx={GlobalStyle.boldText}>63070501055</Text>
          <Text sx={GlobalStyle.normalText}>Pakamon Trakarnkittikul</Text>
        </VStack>
        <VStack>
          <Image sx={imgStyle} src="/images/mook.JPG" />
          <Text sx={GlobalStyle.boldText}>63070501066</Text>
          <Text sx={GlobalStyle.normalText}>Somying Phetdenlarp</Text>
        </VStack>
        <VStack>
          <Image sx={imgStyle} src="/images/bank.JPG" />
          <Text sx={GlobalStyle.boldText}>63070501086</Text>
          <Text sx={GlobalStyle.normalText}>Kittipak Eksakulkla</Text>
        </VStack>
      </Flex>
    </Box>
  )
}

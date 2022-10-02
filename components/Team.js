import { Text, Flex, VStack, Image, Box } from '@chakra-ui/react'
import { headingText, boldText, normalText } from '../pages/style'

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
    backgroundColor: '#F5F5F5',
    padding: '80px',
  }

  return (
    <Box sx={section}>
      <Text sx={headingText}>TEAM</Text>
      <Flex sx={flexStyle}>
        <VStack>
          <Image sx={imgStyle} src="/images/petch.JPG" />
          <Text sx={boldText}>63070501045</Text>
          <Text sx={normalText}>Piyachart Chailaemlak</Text>
        </VStack>
        <VStack>
          <Image sx={imgStyle} src="/images/nice.JPG" />
          <Text sx={boldText}>63070501055</Text>
          <Text sx={normalText}>Pakamon Trakarnkittikul</Text>
        </VStack>
        <VStack>
          <Image sx={imgStyle} src="/images/mook.JPG" />
          <Text sx={boldText}>63070501066</Text>
          <Text sx={normalText}>Somying Phetdenlarp</Text>
        </VStack>
        <VStack>
          <Image sx={imgStyle} src="/images/bank.JPG" />
          <Text sx={boldText}>63070501086</Text>
          <Text sx={normalText}>Kittipak Eksakulkla</Text>
        </VStack>
      </Flex>
    </Box>
  )
}

import { Text, SimpleGrid, VStack, Image, Box } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

export default function Team() {
  const headText = {
    color: Colour.lightBlack,
    fontFamily: 'Lato',
    fontSize: { base: '24px', md: '32px' },
    fontWeight: 'black',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '40px',
  }
  let imgStyle = {
    boxSize: { base: '120px', md: '140px' },
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '16px',
  }
  let section = {
    textAlign: 'center',
    backgroundColor: Colour.lightGrey,
    padding: '80px 0',
    width: '90%',
    margin: '0 auto',
    maxWidth: '1400px',
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <Box sx={section}>
        <Text sx={headText}>TEAM</Text>
        <SimpleGrid columns={{ base: 2, md: 4 }} sx={GlobalStyle.gridStyle}>
          <VStack>
            <Image sx={imgStyle} src="/images/petch.JPG" />
            <Text sx={GlobalStyle.boldText}>63070501045</Text>
            <Text sx={GlobalStyle.greyMediumText}>Piyachart Chailaemlak</Text>
          </VStack>
          <VStack>
            <Image sx={imgStyle} src="/images/nice.JPG" />
            <Text sx={GlobalStyle.boldText}>63070501055</Text>
            <Text sx={GlobalStyle.greyMediumText}>Pakamon Trakarnkittikul</Text>
          </VStack>
          <VStack>
            <Image sx={imgStyle} src="/images/mook.JPG" />
            <Text sx={GlobalStyle.boldText}>63070501066</Text>
            <Text sx={GlobalStyle.greyMediumText}>Somying Phetdenlarp</Text>
          </VStack>
          <VStack>
            <Image sx={imgStyle} src="/images/bank.JPG" />
            <Text sx={GlobalStyle.boldText}>63070501086</Text>
            <Text sx={GlobalStyle.greyMediumText}>Kittipak Eksakulkla</Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

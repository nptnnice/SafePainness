import { Text, SimpleGrid, VStack, Image, Box } from '@chakra-ui/react'
import { team, teamImg, teamSection } from '../style-props/Homepagestyles'
import {
  bgColor,
  gridStyle,
  boldText,
  greyMediumText,
} from '/style-props/Sharedstyles'

export default function Team() {
  return (
    <Box sx={bgColor}>
      <Box sx={teamSection}>
        <Text sx={team}>TEAM</Text>
        <SimpleGrid columns={{ base: 2, md: 4 }} sx={gridStyle}>
          <VStack>
            <Image sx={teamImg} src="/images/petch.JPG" />
            <Text sx={boldText}>63070501045</Text>
            <Text sx={greyMediumText}>Piyachart Chailaemlak</Text>
          </VStack>
          <VStack>
            <Image sx={teamImg} src="/images/nice.JPG" />
            <Text sx={boldText}>63070501055</Text>
            <Text sx={greyMediumText}>Pakamon Trakarnkittikul</Text>
          </VStack>
          <VStack>
            <Image sx={teamImg} src="/images/mook.JPG" />
            <Text sx={boldText}>63070501066</Text>
            <Text sx={greyMediumText}>Somying Phetdenlarp</Text>
          </VStack>
          <VStack>
            <Image sx={teamImg} src="/images/bank.JPG" />
            <Text sx={boldText}>63070501086</Text>
            <Text sx={greyMediumText}>Kittipak Eksakulkla</Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

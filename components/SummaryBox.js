import { Text, SimpleGrid, Flex } from '@chakra-ui/react'
import GlobalStyle from '../Style'

export default () => {
  let gridStyle = {
    columnGap: { base: '10px', md: '24px' },
    rowGap: '8px',
  }
  let flexStyle = {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  }

  return (
    <>
      <Flex sx={flexStyle}>
        <Text sx={GlobalStyle.boldText}>HISTORY TAKING RESPONSE</Text>
        <Text sx={GlobalStyle.description} textAlign="right">
          Recorded: 24/09/22
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} sx={gridStyle}>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Site: </Text>
          <Text sx={GlobalStyle.regularText}>Head</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Onset: </Text>
          <Text sx={GlobalStyle.regularText}>Accident</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Onset Type: </Text>
          <Text sx={GlobalStyle.regularText}>Gradual</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Characterisitics: </Text>
          <Text sx={GlobalStyle.regularText}>Throbbing, Heavy</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Radiation: </Text>
          <Text sx={GlobalStyle.regularText}>Neck</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Associated Symptoms: </Text>
          <Text sx={GlobalStyle.regularText}>Nausea</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Pain Scale (now): </Text>
          <Text sx={GlobalStyle.regularText}>4</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Pain Scale (past 7 days): </Text>
          <Text sx={GlobalStyle.regularText}>5</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Pain Period: </Text>
          <Text sx={GlobalStyle.regularText}>7 days</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Pain Occurence: </Text>
          <Text sx={GlobalStyle.regularText}>Intermittent</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Worse Time: </Text>
          <Text sx={GlobalStyle.regularText}>At night</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Experience: </Text>
          <Text sx={GlobalStyle.regularText}>No</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Exacerbating Factors: </Text>
          <Text sx={GlobalStyle.regularText}>Stress</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>How to relieve: </Text>
          <Text sx={GlobalStyle.regularText}>Sleep</Text>
        </Flex>
      </SimpleGrid>
    </>
  )
}

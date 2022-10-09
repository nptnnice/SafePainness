import { Text, chakra, SimpleGrid, Flex } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import GlobalStyle from '../Style'

export default () => {
  let gridStyle = {
    columnGap: '24px',
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
        <Text sx={GlobalStyle.description}>Recorded: 24/09/22</Text>
      </Flex>
      <SimpleGrid columns={2} sx={gridStyle}>
        <Text sx={GlobalStyle.greyNormalText}>
          Site: <chakra.span sx={GlobalStyle.normalText}>Head</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Onset: <chakra.span sx={GlobalStyle.normalText}>Accident</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Onset Type:{' '}
          <chakra.span sx={GlobalStyle.normalText}>Gradual</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Characteristics:{' '}
          <chakra.span sx={GlobalStyle.normalText}>
            Throbbing, Heavy
          </chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Radiation: <chakra.span sx={GlobalStyle.normalText}>Neck</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Associated Symptoms:{' '}
          <chakra.span sx={GlobalStyle.normalText}>Nausea</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Pain Scale (now):{' '}
          <chakra.span sx={GlobalStyle.normalText}>4</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Pain Scale (past 7 days):{' '}
          <chakra.span sx={GlobalStyle.normalText}>5</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Pain Period:{' '}
          <chakra.span sx={GlobalStyle.normalText}>7 days</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Pain Occurence:{' '}
          <chakra.span sx={GlobalStyle.normalText}>Intermittent</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Worse Time:{' '}
          <chakra.span sx={GlobalStyle.normalText}>At night</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Experience: <chakra.span sx={GlobalStyle.normalText}>No</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          Exacerbating Factors:{' '}
          <chakra.span sx={GlobalStyle.normalText}>Stress</chakra.span>
        </Text>
        <Text sx={GlobalStyle.greyNormalText}>
          How to relieve:{' '}
          <chakra.span sx={GlobalStyle.normalText}>Sleep</chakra.span>
        </Text>
      </SimpleGrid>
    </>
  )
}

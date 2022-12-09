import { Text, SimpleGrid, Flex } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { useRouter } from 'next/router'

export default function SummaryBox(props) {
  let gridStyle = {
    columnGap: { base: '10px', md: '24px' },
    rowGap: '8px',
    marginBottom: '32px',
  }
  let flexStyle = {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  }
  const router = useRouter()
  const caseID = router.query.caseID
  const { caseInfo } = props
  console.log('props', caseInfo)
  return (
    <>
      <Flex sx={flexStyle}>
        <Text sx={GlobalStyle.boldText}>HISTORY TAKING RESPONSE</Text>
        <Text sx={GlobalStyle.description} textAlign="right">
          Recorded: {new Date(caseInfo.date).toLocaleString()}
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} sx={gridStyle}>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Site: </Text>
          {caseInfo.site.map((item, index) => (
            <Text sx={GlobalStyle.regularText} key={index}>
              {item}
              {index === caseInfo.site.length - 1 ? '' : ', '}
            </Text>
          ))}
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Onset: </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.onset}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Onset Type: </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.onsetType}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Characterisitics: </Text>
          {caseInfo.characteristic.map((item, index) => (
            <Text sx={GlobalStyle.regularText} key={index}>
              {item}
              {index === caseInfo.characteristic.length - 1 ? '' : ', '}
            </Text>
          ))}
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Radiation: </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.radiotion}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Associated Symptoms: </Text>
          {caseInfo.associatedSymp.map((item, index) => (
            <Text sx={GlobalStyle.regularText} key={index}>
              {item}
              {index === caseInfo.associatedSymp.length - 1 ? '' : ', '}
            </Text>
          ))}
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Pain Scale (now): </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.painScaleNow}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Pain Scale (past 7 days): </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.painScalePast}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Pain Period: </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.painPeriod}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Pain Frequency: </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.painFrequency}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Worse Time: </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.worstTime}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Experience: </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.experience}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>Exacerbating Factors: </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.exacerbate}</Text>
        </Flex>
        <Flex sx={GlobalStyle.spanFlex2}>
          <Text sx={GlobalStyle.labelText}>How to relieve: </Text>
          <Text sx={GlobalStyle.regularText}>{caseInfo.relieve}</Text>
        </Flex>
      </SimpleGrid>
    </>
  )
}

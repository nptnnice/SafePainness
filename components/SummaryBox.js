import { Text, SimpleGrid, Flex } from '@chakra-ui/react'
import {
  boldText,
  regularText,
  spanFlex2,
  mediumText,
  lightBlueText,
} from '../style-props/Sharedstyles'
import { useRouter } from 'next/router'
import { flexStyle, summaryGrid } from '../style-props/Casepagestyles'

export default function SummaryBox(props) {
  const { caseInfo } = props

  return (
    <>
      <Flex sx={flexStyle}>
        <Text sx={boldText}>HISTORY TAKING RESPONSE</Text>
        <Text sx={lightBlueText} textAlign="right">
          Recorded: {new Date(caseInfo.date).toLocaleString()}
        </Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} sx={summaryGrid}>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Site: </Text>
          {caseInfo.site.map((item, index) => (
            <Text sx={regularText} key={index}>
              {item}
              {index === caseInfo.site.length - 1 ? '' : ', '}
            </Text>
          ))}
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Onset: </Text>
          <Text sx={regularText}>{caseInfo.onset}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Onset Type: </Text>
          <Text sx={regularText}>{caseInfo.onsetType}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Characterisitics: </Text>
          {caseInfo.characteristic.map((item, index) => (
            <Text sx={regularText} key={index}>
              {item}
              {index === caseInfo.characteristic.length - 1 ? '' : ', '}
            </Text>
          ))}
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Radiation: </Text>
          <Text sx={regularText}>{caseInfo.radiotion}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Associated Symptoms: </Text>
          {caseInfo.associatedSymp.map((item, index) => (
            <Text sx={regularText} key={index}>
              {item}
              {index === caseInfo.associatedSymp.length - 1 ? '' : ', '}
            </Text>
          ))}
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Pain Scale (now): </Text>
          <Text sx={regularText}>{caseInfo.painScaleNow}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Pain Scale (past 7 days): </Text>
          <Text sx={regularText}>{caseInfo.painScalePast}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Pain Period: </Text>
          <Text sx={regularText}>{caseInfo.painPeriod}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Pain Frequency: </Text>
          <Text sx={regularText}>{caseInfo.painFrequency}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Worse Time: </Text>
          <Text sx={regularText}>{caseInfo.worseTime}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Experience: </Text>
          <Text sx={regularText}>{caseInfo.experience}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>Exacerbating Factors: </Text>
          <Text sx={regularText}>{caseInfo.exacerbate}</Text>
        </Flex>
        <Flex sx={spanFlex2}>
          <Text sx={mediumText}>How to relieve: </Text>
          <Text sx={regularText}>{caseInfo.relieve}</Text>
        </Flex>
      </SimpleGrid>
    </>
  )
}

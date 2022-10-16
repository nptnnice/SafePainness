import { Text, Flex } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { RecordList } from '../RecordList'

export default () => {
  return (
    <>
      {RecordList.map((record) => {
        return (
          <Flex sx={GlobalStyle.recordBox}>
            <Text sx={GlobalStyle.boldText}>Record #{record.id}</Text>
            <Text sx={GlobalStyle.greyMediumText}>{record.date}</Text>
          </Flex>
        )
      })}
    </>
  )
}

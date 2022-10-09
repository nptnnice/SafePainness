import { Text, Flex } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { RecordList } from '../RecordList'

export default () => {
  return (
    <>
      {RecordList.map((record) => {
        return (
          <Flex sx={GlobalStyle.recordBox}>
            <Text sx={GlobalStyle.normalText}>Record #{record.id}</Text>
            <Text sx={GlobalStyle.greyNormalText}>{record.date}</Text>
          </Flex>
        )
      })}
    </>
  )
}

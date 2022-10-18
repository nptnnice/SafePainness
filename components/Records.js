import { Text, Flex } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { RecordList } from '../RecordList'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const onClickRecord = () => {
    router.push('./caseid/recordid')
  }

  return (
    <>
      {RecordList.map((record) => {
        return (
          <Flex sx={GlobalStyle.recordBox} onClick={onClickRecord}>
            <Text sx={GlobalStyle.boldText}>Record #{record.id}</Text>
            <Text sx={GlobalStyle.greyMediumText}>{record.date}</Text>
          </Flex>
        )
      })}
    </>
  )
}

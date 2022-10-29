import { Text, Flex } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { RecordList } from '../RecordList'
import { useRouter } from 'next/router'
import RecordModal from './RecordModal'
import { useState } from 'react'

export default function Records() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  return (
    <>
      {RecordList.map((record, index) => {
        return (
          <Flex sx={GlobalStyle.recordBox} onClick={handleClick}>
            <Text sx={GlobalStyle.boldText}>Record #{record.id}</Text>
            <Text sx={GlobalStyle.greyMediumText}>{record.date}</Text>
            <RecordModal isOpen={showModal} onClose={handleClick} />
          </Flex>
        )
      })}
    </>
  )
}

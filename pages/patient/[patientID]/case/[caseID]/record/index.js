import {
  Text,
  Flex,
  Box,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import HeadInfo from '/components/HeadInfo'
import { useRouter } from 'next/router'
import BreadcrumbMenu from '/components/BreadcrumbMenu'
import { RecordList } from '/RecordList'
import RecordModal from '/components/RecordModal'
import { useState } from 'react'

export default function Case() {
  let section2 = {
    marginTop: { base: '24px', md: '16px' },
    position: 'relative',
    width: '100%',
    borderRadius: '12px',
    backgroundColor: Colour.white,
    padding: { base: '24px 16px', md: '40px 20px' },
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  }
  let btnPosition = {
    position: 'absolute',
    right: '0',
    top: { base: '-64px', md: '-72px' },
  }
  const currentPage = {
    color: Colour.darkBlue,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: { base: '16px', md: '18px' },
  }

  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

  const onClickAddRecord = () => {
    router.push(`/patient/${patientID}/case/${caseID}/add-record`)
  }

  const [showModal, setShowModal] = useState(false)
  const onClickRecord = () => setShowModal(!showModal)

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo />

      <Box sx={GlobalStyle.layout}>
        <BreadcrumbMenu />

        <Box sx={section2}>
          <Box sx={btnPosition}>
            <Button sx={GlobalStyle.turquoiseBtn} onClick={onClickAddRecord}>
              + Record
            </Button>
          </Box>

          {RecordList.map((record, index) => {
            return (
              <Flex
                key={index}
                sx={GlobalStyle.recordBox}
                onClick={onClickRecord}
              >
                <Text sx={GlobalStyle.boldText}>Record #{record.id}</Text>
                <Text sx={GlobalStyle.greyMediumText}>{record.date}</Text>
                <RecordModal isOpen={showModal} onClose={onClickRecord} />
              </Flex>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

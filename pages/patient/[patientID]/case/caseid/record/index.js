import {
  Text,
  Flex,
  Box,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import GlobalStyle from '../../../../../../Style'
import Colour from '../../../../../../Colour'
import HeadInfo from '../../../../../../components/HeadInfo'
import { useRouter } from 'next/router'
import Records from '../../../../../../components/Records'
import BreadcrumbMenu from '../../../../../../components/BreadcrumbMenu'
import { RecordList } from '../../../../../../RecordList'
import RecordModal from '../../../../../../components/RecordModal'
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
  const onClickAddRecord = () => {
    router.push('../caseid/add-record')
  }
  const onClickFeedback = () => {
    router.push('./feedback/feedbackid')
  }

  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo
        name="Patient ID"
        patientID="XXXXXX"
        caseID="XXXX"
        caseName="Grammar addict"
        doctor="Alan Smith"
      />

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
                onClick={handleClick}
              >
                <Text sx={GlobalStyle.boldText}>Record #{record.id}</Text>
                <Text sx={GlobalStyle.greyMediumText}>{record.date}</Text>
                <RecordModal isOpen={showModal} onClose={handleClick} />
              </Flex>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

import {
  Text,
  Box,
  Flex,
  Input,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import GlobalStyle from '../../../../Style'
import Colour from '../../../../Colour'
import SummaryBox from '../../../../components/SummaryBox'
import Dashboard from '../../../../components/Dashboard'
import Records from '../../../../components/Records'
import Feedbacks from '../../../../components/Feedbacks'
import HeadInfo from '../../../../components/HeadInfo'
import ConfirmModal from '../../../../components/ConfirmModal'
import { useState } from 'react'
import { useRouter } from 'next/router'
import AddFeedbackModal from '../../../../components/AddFeedbackModal'

export default function Case(props) {
  let diagnosisFlex = {
    alignItems: { base: 'flex-start', md: 'center' },
    gap: '16px',
    width: '100%',
    flexDirection: { base: 'column', md: 'row' },
    marginBottom: '24px',
  }
  let section1 = {
    marginTop: { base: '40px', md: '56px' },
    position: 'relative',
  }
  let section2 = {
    marginTop: { base: '24px', md: '16px' },
    position: 'relative',
    // flexDirection: 'column',
    width: '100%',
    borderRadius: '12px',
    backgroundColor: Colour.white,
    padding: { base: '24px 16px', md: '40px 20px' },
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  }
  let btnPosition = {
    position: 'absolute',
    right: '0',
    top: { base: '-50px', md: '-24px' },
  }

  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  const [showModalFb, setShowModalFb] = useState(false)
  const handleClick1 = () => setShowModalFb(!showModalFb)

  const router = useRouter()

  const onClickAddRecord = () => {
    router.push('./caseid/add-record')
  }

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
        {/* ==================== Confirm diagnosis ==================== */}
        <Flex sx={diagnosisFlex}>
          <Text sx={GlobalStyle.boldText} whiteSpace="nowrap">
            Case XXXX:
          </Text>
          <Input placeholder="Disease name" sx={GlobalStyle.inputStyle} />
          <Button sx={GlobalStyle.yellowBtn} onClick={handleClick}>
            Confirm diagnosis
          </Button>
        </Flex>
        <ConfirmModal isOpen={showModal} onClose={handleClick} />
        <Breadcrumb>
          <BreadcrumbItem iscurrentPage>
            <BreadcrumbLink>
              <Text sx={GlobalStyle.boldText}>Summary</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="./caseid/recordid">
              <Text sx={GlobalStyle.boldText}>Records</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="./caseid/feedback">
              <Text sx={GlobalStyle.boldText}>Feedbacks</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box sx={section2}>
          <SummaryBox />
          <Dashboard />
        </Box>
      </Box>
    </Box>
  )
}

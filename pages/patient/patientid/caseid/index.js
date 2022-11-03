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


export default function Case() {

  let layout = {
    width: '90%',
    margin: '0 auto',
    maxWidth: '900px',
    padding: { base: '48px 0 160px', md: '16px 0 240px' },
    position: 'relative',
  }

  let diagnosisFlex = {
    alignItems: { base: 'flex-start', md: 'center' },
    gap: '16px',
    width: '100%',
    flexDirection: { base: 'column', md: 'row' },
  }
  let section1 = {
    marginTop: { base: '40px', md: '56px' },
    position: 'relative',
  }
  let section2 = {
    marginTop: { base: '72px', md: '56px' },
    position: 'relative',
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

      <Box sx={layout}>
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

    
        {/* ==================== Dashboard & Summary ==================== */}
        <Tabs variant="unstyled" sx={section1}>
          <TabList>
            <Tab sx={GlobalStyle.tabSelected}>Summary</Tab>
            <Tab sx={GlobalStyle.tabSelected}>Dashboard</Tab>
          </TabList>
          <TabPanels>
            <TabPanel sx={GlobalStyle.tabBox}>
              <SummaryBox />
            </TabPanel>
            <TabPanel sx={GlobalStyle.tabBox}>
              <Dashboard />
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* ==================== Records & Feedbacks ==================== */}
        {/* <Box sx={section2}>
          <Box sx={btnPosition}>
            <Button sx={GlobalStyle.turquoiseBtn} onClick={onClickAddRecord}>
              + Add Record
            </Button>
          </Box>  */}

       <Box sx={section2}>
          <Box sx={btnPosition}>
            <Button sx={GlobalStyle.turquoiseBtn} onClick={handleClick1}>
              + Feedback
            </Button>
          </Box>
          <AddFeedbackModal isOpen={showModalFb} onClose={handleClick1} />
          <Tabs variant="unstyled">
            <TabList>
              <Tab sx={GlobalStyle.tabSelected}>Records</Tab>
              <Tab sx={GlobalStyle.tabSelected}>Feedbacks</Tab>
            </TabList>
            <TabPanels>
              <TabPanel sx={GlobalStyle.tabBox}>
                <Records />
              </TabPanel>
              <TabPanel sx={GlobalStyle.tabBox}>
                <Feedbacks />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box> 
      </Box>
    </Box>
  )
}

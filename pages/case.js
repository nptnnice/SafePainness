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
import GlobalStyle from '../Style'
import Colour from '../Colour'
import SummaryBox from '../components/SummaryBox'
import Dashboard from '../components/Dashboard'
import Records from '../components/Records'
import Feedbacks from '../components/Feedbacks'

export default () => {
  let diagnosisFlex = {
    alignItems: 'center',
    gap: '16px',
    width: '80%',
  }
  let tabBox = {
    backgroundColor: Colour.white,
    border: '1px solid',
    borderColor: Colour.lightGrey,
    borderRadius: '0 0 24px 24px',
    padding: '40px 20px',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  }
  let tabSelected = {
    fontFamily: 'Lato',
    fontSize: '20px',
    fontWeight: 'bold',
    color: Colour.lightBlack,
    borderRadius: '12px 12px 0 0',
    _selected: {
      backgroundColor: Colour.lightBlue,
      color: Colour.white,
    },
  }
  let section = {
    marginTop: '56px',
    position: 'relative',
  }
  let btnPosition = {
    position: 'absolute',
    right: '0',
    top: '-24px',
  }

  return (
    <Box sx={GlobalStyle.layout}>
      {/* Confirm diagnosis */}
      <Flex sx={diagnosisFlex}>
        <Text sx={GlobalStyle.boldText} whiteSpace="nowrap">
          Case XXXX:
        </Text>
        <Input
          placeholder="Disease name"
          sx={GlobalStyle.inputStyle}
          width="50%"
        />
        <Button sx={GlobalStyle.yellowBtn}>Confirm diagnosis</Button>
      </Flex>

      {/* Dashboard & Summary */}
      <Tabs variant="unstyled" sx={section}>
        <TabList>
          <Tab sx={tabSelected}>Dashboard</Tab>
          <Tab sx={tabSelected}>Summary</Tab>
        </TabList>
        <TabPanels>
          <TabPanel sx={tabBox}>
            <Dashboard />
          </TabPanel>
          <TabPanel sx={tabBox}>
            <SummaryBox />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Records & Feedbacks */}
      <Box sx={section}>
        <Box sx={btnPosition}>
          <Button sx={GlobalStyle.turquoiseBtn}>+ Add Record</Button>
        </Box>
        <Tabs variant="unstyled">
          <TabList>
            <Tab sx={tabSelected}>Records</Tab>
            <Tab sx={tabSelected}>Feedbacks</Tab>
          </TabList>
          <TabPanels>
            <TabPanel sx={tabBox}>
              <Records />
            </TabPanel>
            <TabPanel sx={tabBox}>
              <Feedbacks />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

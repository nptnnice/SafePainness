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

export default () => {
  let yellowBtn = {
    backgroundColor: Colour.lightYellow,
    color: Colour.black,
    padding: '24px 32px',
    fontFamily: 'Lato',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '12px',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
    _hover: {
      backgroundColor: Colour.yellow,
    },
  }
  let diagnosisFlex = {
    alignItems: 'center',
    gap: '16px',
    width: '80%',
  }

  return (
    <Box sx={GlobalStyle.layout}>
      <Flex sx={diagnosisFlex}>
        <Text sx={GlobalStyle.boldText} whiteSpace="nowrap">
          Case XXXX:
        </Text>
        <Input
          placeholder="Disease name"
          sx={GlobalStyle.inputStyle}
          width="50%"
        />
        <Button sx={yellowBtn}>Confirm diagnosis</Button>
      </Flex>
    </Box>
  )
}

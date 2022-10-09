import {
  Text,
  Box,
  Flex,
  SimpleGrid,
  Input,
  Image,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import Colour from '../Colour'
import { chakra } from '@chakra-ui/react'

export default () => {
  let headText = {
    color: '#000',
    fontFamily: 'Lato',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'left',
    margin: '20px 0 20px',
  }
  let textBox = {
    flexDirection: 'column',
    alignItems: 'center',
  }
  let boxStyle = {
    width: '60%',
    alignItems: 'center',
    margin: 'Auto',
  }
  let boxStyle2 = {
    marginTop: '20px',
    marginBottom: '20px',
    borderRadius: '24px',
    backgroundColor: '#fff',
    padding: '30px 30px 30px 20px',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.15))',
  }
  let imgStyle = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '16px 16px 16px 16px',
  }
  let infoBox = {
    gap: '20px',
  }
  let medicalInfoBox = {
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '5px 10px 14px 10px',
    gap: '10px',
  }
  let tabpanelStyle = {
    backgroundColor: Colour.white,
    border: '1px solid',
    borderColor: Colour.lightGrey,
    borderRadius: '0 0 24px 24px',
    padding: '20px 20px',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.15))',
  }
  let tabStyle = {
    borderRadius: '12px 12px 0 0',
    backgroundColor: Colour.lightBlue,
  }
  let mediumText = {
    fontFamily: 'IBM Plex Sans',
    fontSize: '16px',
    fontWeight: 'medium',
  }
  let textStyle = {
    fontFamily: 'Lato',
    fontSize: '20px',
    fontWeight: 'bold',
    color: Colour.white,
  }
  let regularText = {
    fontFamily: 'IBM Plex Sans',
    fontSize: '16px',
    fontWeight: 'regular',
    color: Colour.darkGrey,
  }

  return (
    <Box sx={boxStyle}>
      <Text sx={headText}>doctor ID: XXXXXX</Text>
      <Box sx={boxStyle2}>
        <Flex sx={infoBox}>
          <Box>
            <Box>
              <Image sx={imgStyle} src="/images/profile.JPG" />
            </Box>
            <Flex sx={textBox}>
              <Text>
                <chakra.span sx={mediumText}>DOB: </chakra.span>
                <chakra.span sx={regularText}>29 January 1989</chakra.span>
              </Text>
            </Flex>
          </Box>
          <Box>
            <Divider orientation="vertical" />
          </Box>
          <Box flex="1">
            <SimpleGrid columns={2} gap={5}>
              <Box>
                <Text sx={mediumText}>First name</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={mediumText}>Last name</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={mediumText}>Username</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={mediumText}>Password</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={mediumText}>Contact</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={mediumText}>Email</Text>
                <Input />
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
      <Tabs variant="enclosed">
        <TabList>
          <Tab sx={tabStyle}>
            <Text sx={textStyle}>Medical Information</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel sx={tabpanelStyle}>
            <Flex sx={medicalInfoBox}>
              <Box>
                <Text sx={mediumText}>Medical License</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={mediumText}>Department</Text>
                <Input />
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

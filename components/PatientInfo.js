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
} from "@chakra-ui/react";
import Colour from "../Colour";
import GlobalStyle from "../Style";

export default () => {
  let headText = {
    color: "#000",
    fontFamily: "Lato",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "left",
    margin: "20px 0 20px",
  };
  let textBox = {
    flexDirection: "column",
    alignItems: "center",
  };
  let boxStyle = {
    width: "60%",
    alignItems: "center",
    margin: "Auto",
  };
  let boxStyle2 = {
    marginTop: "20px",
    marginBottom: "20px",
    boxShadow: "md",
    borderRadius: "12px",
    backgroundColor: "#fff",
    padding: "20px 30px 20px 20px",
  };
  let imgStyle = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "16px 16px 16px 16px",
  };
  let infoBox = {
    gap: "20px",
  };
  let medicalInfoBox = {
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px 10px 14px 10px",
    gap: "10px",
  };
  let tabpanelStyle = {
    boxShadow: "md",
    borderRadius: "12px",
    backgroundColor: "#fff",
  };
  let tablistStyle = {
    marginLeft: "20px",
    borderBottom: "0px",
    color: "#fff",
  };
  let tabStyle = {
    color: Colour.white,
    backgroundColor: Colour.lightBlue,
  };

  return (
    <Box sx={boxStyle}>
      <Text sx={headText}>patient ID: XXXXXX</Text>
      <Box sx={boxStyle2}>
        <Flex sx={infoBox}>
          <Box>
            <Box>
              <Image sx={imgStyle} src="/images/profile.JPG" />
            </Box>
            <Flex sx={textBox}>
              <Text sx={GlobalStyle.regularText}>DOB: 29 January 1989</Text>
              <Text sx={GlobalStyle.regularText}>Sex: Male</Text>
              <Text sx={GlobalStyle.regularText}>Blood Group: B</Text>
            </Flex>
          </Box>
          <Box>
            <Divider orientation="vertical" />
          </Box>
          <Box flex="1">
            <SimpleGrid columns={2} gap={5}>
              <Box>
                <Text sx={GlobalStyle.mediumText}>First name</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={GlobalStyle.mediumText}>Last name</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={GlobalStyle.mediumText}>Username</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={GlobalStyle.mediumText}>Password</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={GlobalStyle.mediumText}>Contact</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={GlobalStyle.mediumText}>Email</Text>
                <Input />
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
      <Tabs variant="enclosed">
        <TabList sx={tablistStyle}>
          <Tab sx={tabStyle}>
            <Text sx={GlobalStyle.tabsText}>Medical Information</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel sx={tabpanelStyle}>
            <Flex sx={medicalInfoBox}>
              <Box>
                <Text sx={GlobalStyle.mediumText}>Medical conditions</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={GlobalStyle.mediumText}>Allergy</Text>
                <Input />
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

import {
  Text,
  Box,
  Flex,
  SimpleGrid,
  Input,
  Image,
  Divider,
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
  let imageBox = {
    justifyContent: "center",
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
    padding: "20px 30px 30px 20px",
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

  return (
    <Box sx={boxStyle}>
      <Text sx={headText}>doctor ID: XXXXXX</Text>
      <Box sx={boxStyle2}>
        <Flex sx={infoBox}>
          <Box>
            <Flex sx={imageBox}>
              <Image sx={imgStyle} src="/images/profile.JPG" />
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
              <Box>
                <Text sx={GlobalStyle.mediumText}>Medical License</Text>
                <Input />
              </Box>
              <Box>
                <Text sx={GlobalStyle.mediumText}>Department</Text>
                <Input />
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

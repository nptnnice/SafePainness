import { Text, Box } from "@chakra-ui/react";
import Colour from "../Colour";

export default () => {
  let headBox = {
    backgroundColor: Colour.lightBlue,
    width: "100%",
    padding: "80px 0 20px",
  };
  let headText = {
    color: "#fff",
    fontFamily: "Lato",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
  };
  let textBox = {
    width: "30%",
    margin: "50px 0 0 150px",
  };

  return (
    <Box sx={headBox}>
      <Box sx={textBox}>
        <Text sx={headText}>My Profile</Text>
      </Box>
    </Box>
  );
};

import { Button, ButtonGroup, Box, Flex } from "@chakra-ui/react";
import Colour from "../Colour";
import { Component, useState } from "react";

export default () => {
  const [visible, setVisible] = useState(false);

  let boxStyle = {
    width: "60%",
    margin: "40px auto 0",
  };
  let buttonStyle = {
    width: "15%",
    backgroundColor: Colour.darkYellow,
    borderRadius: "48px",
    boxShadow: "md",
    color: "#fff",
    transition: "all 0.2s ease",
    filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.15))",
    _hover: {
      transform: "scale(1.05)",
    },
  };
  let buttonStyle2 = {
    backgroundColor: Colour.turqoise,
    borderRadius: "48px",
    boxShadow: "md",
    color: "#fff",
    transition: "all 0.2s ease",
    filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.15))",
    _hover: {
      transform: "scale(1.05)",
    },
  };
  let buttonStyle3 = {
    backgroundColor: Colour.lightRed,
    borderRadius: "48px",
    boxShadow: "md",
    color: "#fff",
    transition: "all 0.2s ease",
    filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.15))",
    _hover: {
      transform: "scale(1.05)",
    },
  };

  let flexStyle = {
    justifyContent: "right",
    alignItems: "right",
    paddingBottom: "20px",
  };
  return (
    <Box sx={boxStyle}>
      <Flex sx={flexStyle}>
        {!visible ? (
          <Button sx={buttonStyle} onClick={() => setVisible(!visible)}>
            Edit
          </Button>
        ) : null}
        {visible ? (
          <ButtonGroup spacing="3">
            <Button sx={buttonStyle2} onClick={() => setVisible(!visible)}>
              Save
            </Button>
            <Button sx={buttonStyle3} onClick={() => setVisible(!visible)}>
              Cancel
            </Button>
          </ButtonGroup>
        ) : null}
      </Flex>
    </Box>
  );
};

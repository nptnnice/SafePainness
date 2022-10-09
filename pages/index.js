import { Box } from "@chakra-ui/react";
import GlobalStyle from "../Style";
import HeadBox from "../components/HeadBox";
import Feature from "../components/Feature";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <HeadBox />
      <Box sx={GlobalStyle.layout}>
        <Feature />
      </Box>
      <Team />
    </>
  );
}

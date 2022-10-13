import { Box } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Header from '../components/Header'
import Feature from '../components/Feature'
import Team from '../components/Team'

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={GlobalStyle.layout}>
        <Feature />
      </Box>
      <Team />
    </>
  )
}

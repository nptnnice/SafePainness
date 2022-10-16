import { Box } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Header from '../components/Header'
import Feature from '../components/Feature'
import Team from '../components/Team'

export default function Home() {
  let section = {
    width: '90%',
    margin: '0 auto',
    maxWidth: '900px',
    padding: '80px 0',
  }
  return (
    <>
      <Header />
      <Box sx={section}>
        <Feature />
      </Box>
      <Team />
    </>
  )
}

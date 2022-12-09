import { Box } from '@chakra-ui/react'
import { section } from '/style-props/Homepagestyles'
import Header from '../components/Header'
import Feature from '../components/Feature'
import Team from '../components/Team'

export default function Home() {
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

import { Box } from '@chakra-ui/react'
import { section } from '/style-props/Homepagestyles'
import Header from '../components/Header'
import Feature from '../components/Feature'
import Team from '../components/Team'
import Colour from '/style-props/SharedColour'

export default function Home() {
  return (
    <>
      <Header />
      <Box backgroundColor={Colour.white}>
        <Box sx={section}>
          <Feature />
        </Box>
      </Box>
      <Team />
    </>
  )
}

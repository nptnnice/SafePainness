import { Box } from '@chakra-ui/react'
import { layout } from './style'
import HeadBox from '../components/HeadBox'
import Feature from '../components/Feature'
import Team from '../components/Team'

export default function Home() {
  return (
    <>
      <HeadBox />
      <Box sx={layout}>
        <Feature />
      </Box>
      <Team />
    </>
  )
}

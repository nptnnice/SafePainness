import HeadBox2 from '../components/HeadBox2'
import DoctorInfo from '../components/DoctorInfo'
import Button from '../components/Button'
import GlobalStyle from '../Style'
import { Box } from '@chakra-ui/react'

export default () => {
  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadBox2 />
      <DoctorInfo />
      <Button />
    </Box>
  )
}

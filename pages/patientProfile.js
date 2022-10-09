import HeadBox2 from '../components/HeadBox2'
import PatientInfo from '../components/PatientInfo'
import Button from '../components/Button'
import GlobalStyle from '../Style'
import { Box } from '@chakra-ui/react'

export default () => {
  return (
    <>
      <Box sx={GlobalStyle.bgColor}>
        <HeadBox2 />
        <PatientInfo />
        <Button />
      </Box>
    </>
  )
}

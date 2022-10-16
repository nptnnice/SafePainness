import { Box, Text, Flex, VStack } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import DoctorInfo from './DoctorInfo'
import { useState } from 'react'

export default (props) => {
  const { name, patientID, caseID, caseName, doctor } = props
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  let layout = {
    width: '90%',
    margin: '0 auto',
    maxWidth: '900px',
    justifyContent: 'space-between',
    alignItems: { base: 'start', md: 'end' },
    flexDirection: { base: 'column', md: 'row' },
  }
  let idText = {
    color: Colour.white,
    fontFamily: 'Lato',
    fontSize: { base: '24px', md: '32px' },
    fontWeight: 'bold',
  }
  let caseText = {
    color: Colour.white,
    fontFamily: 'Lato',
    fontSize: { base: '18px', md: '22px' },
    fontWeight: 'medium',
  }
  let doctorText = {
    color: Colour.cream,
    fontFamily: 'Lato',
    fontSize: { base: '16px', md: '20px' },
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    _hover: {
      color: Colour.lightYellow,
    },
  }
  return (
    <Box sx={GlobalStyle.headBox}>
      <Flex sx={layout}>
        <Text sx={idText}>
          {name}: {patientID}
        </Text>
        <VStack align={{ base: 'start', md: 'end' }} spacing={0}>
          <Text sx={caseText}>
            Case {caseID}: {caseName}
          </Text>
          <Text sx={doctorText} onClick={handleClick}>
            By Dr. {doctor}
          </Text>
          <DoctorInfo isOpen={showModal} onClose={handleClick} />
        </VStack>
      </Flex>
    </Box>
  )
}

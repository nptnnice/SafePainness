import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Center,
  VStack,
  Button,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '/Colour'
import url from '/url'
import QRCode from 'react-qr-code'
import { useState } from 'react'

export default function QRgenerator(props) {
  let takeHistoryBtn = {
    backgroundColor: Colour.lightBlue,
    color: Colour.white,
    padding: { base: '16px 24px', md: '24px 40px' },
    fontFamily: 'Lato',
    fontSize: { base: '16px', md: '18px' },
    fontWeight: 'bold',
    borderRadius: '12px',
    border: '3px solid',
    borderColor: Colour.lightBlue,
    transition: 'all 0.2s ease',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
    _hover: {
      backgroundColor: Colour.darkBlue,
      borderColor: Colour.darkBlue,
    },
  }

  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)
  const patientID = props.caseInfo.patientID

  return (
    <>
      <VStack>
        <Text sx={GlobalStyle.greyMediumText}>
          No record of pain experience
        </Text>
        <Button sx={takeHistoryBtn} onClick={handleClick}>
          Take history
        </Button>
      </VStack>
      <Modal isOpen={showModal} onClose={handleClick} isCentered>
        <ModalOverlay />
        <ModalContent sx={GlobalStyle.modalStyle} textAlign="center">
          <ModalHeader sx={GlobalStyle.headingText}>
            History taking form
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text sx={GlobalStyle.regularText}>
              Get your patient scan the QR code to fill in the history taking
              form.
            </Text>
            <Center marginTop="16px">
              <QRCode
                value={`${url}/patient/${patientID}/historytaking/part1`}
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

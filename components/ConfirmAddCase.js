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
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '/Colour'
import url from '/url'
import QRCode from 'react-qr-code'

export default function QR(props) {
  const { isOpen, onClose, patientName } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
            <Text>Confirm selected {patientName}</Text>
            {/* <QRCode value={`${url}/patient/${patientID}/historytaking/part1`} /> */}
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

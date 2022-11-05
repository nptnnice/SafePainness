import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ButtonGroup,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  chakra,
  Center,
  Flex,
} from '@chakra-ui/react'

export default function AddFeedbackModal({ isOpen, onClose }) {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)
  const handleClick1 = () => useDisclosure()

  let btnFlex = {
    gap: '16px',
    margin: '24px auto 0',
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent sx={GlobalStyle.modalStyle}>
          {/* <ModalHeader sx={GlobalStyle.regularText}>
                        Send feedback to your patient
                    </ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel sx={GlobalStyle.labelText}>
                Send feedback to your patient
              </FormLabel>
              <Textarea sx={GlobalStyle.inputStyle} />
            </FormControl>
            <Center>
              <ButtonGroup sx={btnFlex}>
                <Button sx={GlobalStyle.whiteBtn} onClick={onClose}>
                  Cancel
                </Button>
                <Button sx={GlobalStyle.blueBtn} onClick={handleClick}>
                  Confirm
                </Button>
              </ButtonGroup>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

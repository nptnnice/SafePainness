import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ButtonGroup,
  chakra,
  Flex,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'

export default ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  let btnFlex = {
    gap: '16px',
    margin: '24px auto 0',
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={GlobalStyle.modalStyle}>
          <ModalHeader sx={GlobalStyle.headingText}>
            Confirm Diagnosis
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text sx={GlobalStyle.greyMediumText}>
              Case: <chakra.span sx={GlobalStyle.labelText}>XXXX</chakra.span>
            </Text>
            <Text sx={GlobalStyle.greyMediumText}>
              Patient ID:{' '}
              <chakra.span sx={GlobalStyle.labelText}>XXXXXX</chakra.span>
            </Text>
            <Text sx={GlobalStyle.greyMediumText}>
              Patient name:{' '}
              <chakra.span sx={GlobalStyle.labelText}>Pakamon Mumu</chakra.span>
            </Text>
            <Text sx={GlobalStyle.greyMediumText}>
              Disease name:{' '}
              <chakra.span sx={GlobalStyle.labelText}>
                Grammar addict
              </chakra.span>
            </Text>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup sx={btnFlex}>
              <Button sx={GlobalStyle.whiteBtn} onClick={handleClick}>
                Cancel
              </Button>
              <Button sx={GlobalStyle.blueBtn} onClick={handleClick}>
                Confirm
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

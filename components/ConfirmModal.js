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
  chakra,
  Flex,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'

export default ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  let header = {
    fontFamily: 'Lato',
    fontSize: '32px',
    fontWeight: 'bold',
    color: Colour.darkBlack,
  }
  let whiteBtn = {
    backgroundColor: Colour.white,
    color: Colour.lightBlue,
    fontFamily: 'Lato',
    fontSize: '18px',
    fontWeight: 'bold',
    border: '3px solid',
    borderColor: Colour.lightBlue,
    borderRadius: '48px',
    padding: '24px 40px',
    _hover: {
      borderColor: Colour.turquoise,
      color: Colour.turquoise,
    },
  }
  let blueBtn = {
    backgroundColor: Colour.lightBlue,
    color: Colour.white,
    fontFamily: 'Lato',
    fontSize: '18px',
    fontWeight: 'bold',
    border: '2px solid',
    borderColor: Colour.lightBlue,
    borderRadius: '48px',
    padding: '24px 40px',
    _hover: {
      backgroundColor: Colour.turquoise,
      borderColor: Colour.turquoise,
      color: Colour.white,
    },
  }
  let btnFlex = {
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    margin: '24px auto 0',
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={GlobalStyle.modalStyle}>
          <ModalHeader sx={header}>Confirm Diagnosis</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text sx={GlobalStyle.greyNormalText}>
              Case: <chakra.span sx={GlobalStyle.normalText}>XXXX</chakra.span>
            </Text>
            <Text sx={GlobalStyle.greyNormalText}>
              Patient ID:{' '}
              <chakra.span sx={GlobalStyle.normalText}>XXXXXX</chakra.span>
            </Text>
            <Text sx={GlobalStyle.greyNormalText}>
              Patient name:{' '}
              <chakra.span sx={GlobalStyle.normalText}>
                Pakamon Mumu
              </chakra.span>
            </Text>
            <Text sx={GlobalStyle.greyNormalText}>
              Disease name:{' '}
              <chakra.span sx={GlobalStyle.normalText}>
                Grammar addict
              </chakra.span>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Flex sx={btnFlex}>
              <Button sx={whiteBtn} onClick={handleClick}>
                Cancel
              </Button>
              <Button sx={blueBtn} onClick={handleClick}>
                Confirm
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  chakra,
  SimpleGrid,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { Image } from '@chakra-ui/react'

export default function CreateAppointment({ isOpen, onClose }) {
  let modalStyle = {
    maxWidth: '900px',
    maxHeight: '650px',
    width: '90%',
    borderRadius: '24px',
    padding: { base: '20px', md: '48px' },
  }
  let modalBodyStyle = {
    padding: { base: '0px', md: '8px' },
  }
  let imgStyle = {
    borderRadius: '24px',
    boxSize: '190px',
    objectFit: 'cover',
  }
  let closeButtonStyle = {
    position: 'absolute',
    right: '12px',
    top: '12px',
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay bg="blackAlpha.400" />
        <ModalContent sx={modalStyle}>
          <ModalCloseButton sx={closeButtonStyle} size="lg" />
          <ModalBody>
            <VStack align="start" spacing={4}>
              <Text sx={GlobalStyle.headingText}>Record#1</Text>
              <Text sx={GlobalStyle.greyMediumText} textAlign="right">
                23-09-2022 10.53 AM
              </Text>
              <Text sx={GlobalStyle.labelText}>Symptom</Text>
              <Text sx={GlobalStyle.regularText}>Lorem ipsum</Text>
              <Text sx={GlobalStyle.regularText}>Lorem ipsum</Text>
              <Text sx={GlobalStyle.regularText}>Lorem ipsum</Text>
              <Text sx={GlobalStyle.labelText}>
                Pain severity:{' '}
                <chakra.span sx={GlobalStyle.regularText}>7</chakra.span>
              </Text>
              <SimpleGrid
                columns={{ base: 2, md: 4 }}
                sx={GlobalStyle.gridStyle}
              >
                <Image sx={imgStyle} src="/images/petch.JPG" />
                <Image sx={imgStyle} src="/images/petch.JPG" />
                <Image sx={imgStyle} src="/images/petch.JPG" />
                <Image sx={imgStyle} src="/images/petch.JPG" />
              </SimpleGrid>
              <Text sx={GlobalStyle.labelText}>Comment</Text>
              <Text sx={GlobalStyle.regularText}>Lorem ipsum</Text>
              <Text sx={GlobalStyle.regularText}>Lorem ipsum</Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

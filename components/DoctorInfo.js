import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Avatar,
  VStack,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'

export default function DoctorInfo({ isOpen, onClose }) {
  let layout = {
    gap: '32px',
    flexDirection: { base: 'column', md: 'row' },
  }
  let modalStyle = {
    maxWidth: '700px',
    maxHeight: '400px',
    width: '90%',
    borderRadius: '24px',
    padding: { base: '16px', md: '24px' },
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent sx={modalStyle}>
          <ModalHeader sx={GlobalStyle.headingText}>
            Doctor Information
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex sx={layout}>
              <Avatar sx={GlobalStyle.profileImg} src="/images/petch.JPG" />
              <VStack spacing={4} align="left">
                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>First Name: </Text>
                  <Text sx={GlobalStyle.regularText}>Pakamon</Text>
                </Flex>
                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>Last Name: </Text>
                  <Text sx={GlobalStyle.regularText}>Mumu</Text>
                </Flex>

                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>
                    Medical License Number:{' '}
                  </Text>
                  <Text sx={GlobalStyle.regularText}>XX-XXXXXX-XX</Text>
                </Flex>
                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>Department: </Text>
                  <Text sx={GlobalStyle.regularText}>Cardio</Text>
                </Flex>

                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>Contact: </Text>
                  <Text sx={GlobalStyle.regularText}>099-XXX-XXXX</Text>
                </Flex>
                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>Email: </Text>
                  <Text sx={GlobalStyle.regularText}>Pokemon@gmail.com</Text>
                </Flex>
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

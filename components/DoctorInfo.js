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
import {
  doctorInfoLayout,
  doctorInfoModal,
} from '../style-props/Doctorpagestyles'
import {
  headingText,
  mediumText,
  regularText,
  profileImg,
  spanFlex,
} from '../style-props/Sharedstyles'

export default function DoctorInfo({ isOpen, onClose, doctorInfo }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent sx={doctorInfoModal}>
          <ModalHeader sx={headingText}>Doctor Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex sx={doctorInfoLayout}>
              <Avatar sx={profileImg} src={doctorInfo.image} />
              <VStack spacing={4} align="left">
                <Flex sx={spanFlex}>
                  <Text sx={mediumText}>First Name: </Text>
                  <Text sx={regularText}>{doctorInfo.firstName}</Text>
                </Flex>
                <Flex sx={spanFlex}>
                  <Text sx={mediumText}>Last Name: </Text>
                  <Text sx={regularText}>{doctorInfo.lastName}</Text>
                </Flex>

                <Flex sx={spanFlex}>
                  <Text sx={mediumText}>Medical License Number: </Text>
                  <Text sx={regularText}>{doctorInfo.licenseNO}</Text>
                </Flex>
                <Flex sx={spanFlex}>
                  <Text sx={mediumText}>Department: </Text>
                  <Text sx={regularText}>{doctorInfo.department}</Text>
                </Flex>

                <Flex sx={spanFlex}>
                  <Text sx={mediumText}>Phone number: </Text>
                  <Text sx={regularText}>{doctorInfo.phoneNumber}</Text>
                </Flex>
                <Flex sx={spanFlex}>
                  <Text sx={mediumText}>Email: </Text>
                  <Text sx={regularText}>{doctorInfo.email}</Text>
                </Flex>
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

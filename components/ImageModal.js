import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

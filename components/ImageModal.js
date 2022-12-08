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
import { useState, useEffect } from 'react'
import { Image } from '@chakra-ui/react'

export default function ImageModal({ isOpen, onClose, index, image }) {
  //set max width and height of image size

  let img = {
    maxWidth: '560px',
    maxHeight: '480px',
  }

  let modalStyle = {
    // maxWidth: '900px',
    // maxHeight: '650px',
    maxWidth: '880px',
    maxHeight: '640px',
    width: '90%',
    borderRadius: '24px',
    padding: { base: '20px', md: '48px' },
  }

  let closeButtonStyle = {
    position: 'absolute',
    right: '12px',
    top: '12px',
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={modalStyle}>
          <ModalCloseButton sx={closeButtonStyle} size="lg" />
          <ModalBody>
            <Image sx={img} src={image} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

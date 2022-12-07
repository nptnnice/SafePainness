import {
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    center,
    VStack,
    chakra,
    SimpleGrid,
  } from '@chakra-ui/react'
  import GlobalStyle from '../Style'
  import { useState, useEffect } from 'react'
  import { Image } from '@chakra-ui/react'

  export default function ImageModal ({isOpen, onClose,focuskey2, index,  image}) {

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
        <Modal isOpen={isOpen && focuskey2 == index} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent sx={modalStyle} >
                <ModalCloseButton sx={closeButtonStyle} size="lg"  />
                <ModalBody>
                    <center>
                      <Image sx={img} src={image} />
                    </center>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
  }
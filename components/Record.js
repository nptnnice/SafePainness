import ImageModal from './ImageModal'
import { useState } from 'react'
import {
  Text,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  SimpleGrid,
  Image,
  Box,
  Flex,
} from '@chakra-ui/react'
import {
  headingText,
  mediumText,
  regularText,
  greyMediumText,
  spanFlex2,
  bigModal,
  autoGrid,
  squareImg,
} from '/style-props/Sharedstyles'

export default function Record(props) {
  const { isOpen, onClose, record, recordIndex } = props

  // set image modal
  const [showImgModal, setShowImgModal] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)
  const onClickImage = (image) => {
    setImageUrl(image)
    setShowImgModal(!showImgModal)
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
        <ModalContent sx={bigModal}>
          <ModalCloseButton />
          <ModalHeader>
            <Box>
              <Text sx={headingText}>Record #{recordIndex}</Text>
              <Text sx={greyMediumText}>
                {new Date(record.datetime).toLocaleString()}
              </Text>
            </Box>
          </ModalHeader>
          <ModalBody>
            <VStack align="start" spacing={4}>
              <Box>
                <Text sx={mediumText}>Symptom</Text>
                <Text sx={regularText}>{record.symptom}</Text>
              </Box>
              <Flex sx={spanFlex2}>
                <Text sx={mediumText}>Pain severity: </Text>
                <Text sx={regularText}>{record.painScale}</Text>
              </Flex>
              <SimpleGrid sx={autoGrid}>
                {record.image.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    sx={squareImg}
                    onClick={() => onClickImage(image)}
                  />
                ))}
              </SimpleGrid>
              <ImageModal
                isOpen={showImgModal}
                onClose={() => setShowImgModal(!showImgModal)}
                image={imageUrl}
              />
              <Box>
                <Text sx={mediumText}>Comment</Text>
                <Text sx={regularText}>{record.comment}</Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

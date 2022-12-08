import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  chakra,
  Button,
  SimpleGrid,
} from '@chakra-ui/react'
import {
  bgColor,
  layout,
  inputStyle,
  searchIconStyle,
  btnGroup,
  turquoiseBtn,
  paginationBtn,
  addIconStyle,
  contentBox,
  headingText,
  boldText,
  mediumText,
  regularText,
  greyMediumText,
  gridStyle,
  hoverStyle,
  profileImgSmall,
  flexStyle,
} from '/style-props/Sharedstyles'
import GlobalStyle from '../Style'
import { useState, useEffect } from 'react'
import ImageModal from './ImageModal'
import { Image } from '@chakra-ui/react'

export default function RecordModal({
  isOpen,
  rindex,
  index,
  onClose,
  record,
}) {
  // console.log("hehe")
  //  console.log(allrecord)
  const [focuskey2, setFocuskey2] = useState(0)

  const [showImgModal, setShowImgModal] = useState(false)
  const onClickImgModal = () => setShowImgModal(!showImgModal)

  //  console.log("This is record yeyeye : ")
  //  console.log(record)
  // console.log(typeof(allrecord))
  // console.log(allrecord[1])

  //console.log(allrecord.length)

  // console.log("This is eiei")
  // console.log(eiei)
  // const { getAllRecords } = props

  // console.log("this is getallrecord")
  // console.log(getAllRecords)

  // const total = allrecord.length
  // console.log("This is total ")
  // console.log(total)
  // console.log(allrecord[1].recordID)
  // console.log(record.recordID)

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
    borderRadius: '12px',
    boxSize: '190px',
    objectFit: 'cover',
  }
  let closeButtonStyle = {
    position: 'absolute',
    right: '12px',
    top: '12px',
  }

  // console.log(total)
  // console.log("wewe")
  //console.log(recordIndex)

  // console.log(record.image)
  return (
    <>
      {/* {console.log('modal')}
      {console.log(index, record.recordID)} */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent sx={modalStyle}>
          <ModalCloseButton sx={closeButtonStyle} size="lg" />
          <ModalBody>
            <VStack align="start" spacing={4}>
              <Text sx={headingText}>Record #{rindex}</Text>
              <Text sx={greyMediumText} textAlign="right">
                {new Date(record.datetime).toLocaleString()}
              </Text>
              <Text sx={mediumText}>Symptom</Text>
              <Text sx={regularText}>{record.symptom}</Text>
              <Text sx={mediumText}>
                Pain severity:{' '}
                <chakra.span sx={regularText}>{record.painScale}</chakra.span>
              </Text>
              <SimpleGrid columns={{ base: 2, md: 4 }} sx={gridStyle}>
                {/* Show all images in Record */}
                {record.image.map((image, index) => (
                  <>
                    <Image
                      src={image}
                      sx={imgStyle}
                      onClick={() => {
                        onClickImgModal()
                      }}
                    />
                    <ImageModal
                      isOpen={showImgModal}
                      onClose={onClickImgModal}
                      index={index}
                      image={image}
                    />
                  </>
                ))}
              </SimpleGrid>
              <Text sx={mediumText}>Comment</Text>
              <Text sx={regularText}>{record.comment}</Text>
              {/* <Button onClick={onClickImgModal}> test </Button> */}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

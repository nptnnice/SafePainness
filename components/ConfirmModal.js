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
} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import {
  mediumText,
  greyMediumText,
  headingText,
  commonModal,
  whiteBtn,
  blueBtn,
  btnGroup,
} from '../style-props/Sharedstyles'

export default function ConfirmModal(props) {
  const { isOpen, onClose, setConfirm, caseInfo, diseaseName } = props

  // confirm diagnosis
  const onClickConfirm = async () => {
    try {
      const res = await axios.post('/api/caseManager/confirmDiagnosis', {
        caseName: diseaseName,
        caseID: caseInfo.caseID,
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={commonModal}>
          <ModalHeader sx={headingText}>Confirm Diagnosis</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text sx={greyMediumText}>
              Case: <chakra.span sx={mediumText}>{caseInfo.caseID}</chakra.span>
            </Text>
            <Text sx={greyMediumText}>
              Patient ID:{' '}
              <chakra.span sx={mediumText}>{caseInfo.patientID}</chakra.span>
            </Text>
            <Text sx={greyMediumText}>
              Disease name:{' '}
              <chakra.span sx={mediumText}>{diseaseName}</chakra.span>
            </Text>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup sx={btnGroup} marginTop="24px">
              <Button sx={whiteBtn} onClick={onClose}>
                Cancel
              </Button>
              <Button
                sx={blueBtn}
                onClick={() => {
                  onClose()
                  setConfirm(true)
                  onClickConfirm()
                }}
              >
                Confirm
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

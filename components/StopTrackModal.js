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
  Flex,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function StopTrackModal({
  isOpen,
  onClose,
  setConfirm,
  caseInfo,
}) {
  const [showStopModal, setShowStopModal] = useState(false)
  const handleClick = () => setShowStopModal(!showStopModal)
  const router = useRouter()
  const onStop = async () => {
    try {
      const res = await axios.post('/api/caseManager/stopTracking', {
        caseID: caseInfo.caseID,
      })
      console.log(res)
    } catch (err) {
      console.log(err)
    }
    setTimeout(() => {
      router.push(`/patient/${caseInfo.patientID}`)
    }, 4000)
  }

  let btnFlex = {
    gap: '16px',
    margin: '24px auto 0',
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={GlobalStyle.modalStyle}>
          <ModalHeader sx={GlobalStyle.headingText}>
            Confirm Stop Tracking
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text sx={GlobalStyle.greyMediumText}>
              Case:{' '}
              <chakra.span sx={GlobalStyle.labelText}>
                {caseInfo.caseID}
              </chakra.span>
            </Text>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup sx={btnFlex}>
              <Button sx={GlobalStyle.whiteBtn} onClick={onClose}>
                Cancel
              </Button>
              <Button
                sx={GlobalStyle.blueBtn}
                onClick={() => {
                  onClose()
                  setConfirm(true)
                  onStop()
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

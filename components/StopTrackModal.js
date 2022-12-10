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
import {
  mediumText,
  greyMediumText,
  headingText,
  commonModal,
  whiteBtn,
  blueBtn,
  btnGroup,
} from '../style-props/Sharedstyles'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function StopTrackModal(props) {
  const { isOpen, onClose, setConfirm, caseInfo } = props

  // router
  const router = useRouter()

  // stop tracking
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
    }, 3000)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={commonModal}>
          <ModalHeader sx={headingText}>Confirm Stop Tracking</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text sx={greyMediumText}>
              Case: <chakra.span sx={mediumText}>{caseInfo.caseID}</chakra.span>
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

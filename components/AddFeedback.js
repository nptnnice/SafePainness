import { useState } from 'react'
import axios from 'axios'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ButtonGroup,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  useToast,
  Center,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAppContext } from '../context/UserContext'
import {
  commonModal,
  mediumText,
  errorText,
  btnGroup,
  whiteBtn,
  blueBtn,
  bigInput,
} from '../style-props/Sharedstyles'

export default function AddFeedbackModal(props) {
  const { isOpen, onClose } = props

  // user
  const { user } = useAppContext()

  // router
  const router = useRouter()
  const { patientID, caseID } = router.query

  // toast
  const toast = useToast()

  // handle error
  const [error, setError] = useState(false)

  // get feedback from input
  const [feedback, setFeedback] = useState('')
  const getFeedback = (e) => {
    setFeedback(e.target.value)
  }

  // cancel
  const onClickCancel = () => {
    setError(false)
    setFeedback('')
    onClose()
  }

  // submit
  const onClickSubmit = async () => {
    if (feedback) {
      try {
        const res = await axios.post('/api/feedbackManager/addFeedback', {
          caseID: caseID,
          message: feedback,
          senderID: user.userID,
          receiverID: patientID,
          senderName: `Dr. ${user.name}`,
          patientID: patientID,
          time: new Date().toISOString(),
        })
        console.log(res)
        onClose()
        toast({
          title: 'Feedback submitted',
          description: 'Your feedback has been submitted',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      } catch (err) {
        console.log(err)
      }
    } else {
      setError(true)
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent sx={commonModal}>
          <ModalBody>
            <FormControl isInvalid={error}>
              <FormLabel sx={mediumText}>
                Send feedback to your patient
              </FormLabel>
              <Textarea sx={bigInput} onChange={getFeedback} />
              <FormErrorMessage marginTop="16px" sx={errorText}>
                Please fill in your feedback
              </FormErrorMessage>
            </FormControl>
            <Center>
              <ButtonGroup sx={btnGroup} marginTop="24px">
                <Button sx={whiteBtn} onClick={() => onClickCancel()}>
                  Cancel
                </Button>
                <Button sx={blueBtn} onClick={() => onClickSubmit()}>
                  Submit
                </Button>
              </ButtonGroup>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

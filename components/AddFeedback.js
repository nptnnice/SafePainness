import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ButtonGroup,
  ModalBody,
  ModalCloseButton,
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

export default function AddFeedbackModal(props) {
  const { isOpen, onClose } = props

  let inputBox = {
    ...GlobalStyle.inputStyle,
    height: '160px',
  }

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

  // handle button
  // cancel
  const onCancel = () => {
    setError(false)
    onClose()
  }
  // submit
  const submitFeedback = async () => {
    if (feedback) {
      try {
        const res = await axios.post('/api/feedbackManager/addFeedback', {
          caseID: caseID,
          message: feedback,
          datetime: new Date(),
          senderID: user.userID,
          receiverID: patientID,
          senderName: `Dr. ${user.name}`,
        })
        console.log(res)
      } catch (err) {
        console.log(err)
      }
      onClose()
      toast({
        title: 'Feedback submitted',
        description: 'Your feedback has been submitted',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } else {
      setError(true)
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent sx={GlobalStyle.modalStyle}>
          <ModalBody>
            <FormControl isInvalid={error}>
              <FormLabel sx={GlobalStyle.labelText}>
                Send feedback to your patient
              </FormLabel>
              <Textarea sx={inputBox} onChange={getFeedback} />
              <FormErrorMessage marginTop="16px" sx={GlobalStyle.errorText}>
                Please fill in your feedback
              </FormErrorMessage>
            </FormControl>
            <Center>
              <ButtonGroup sx={GlobalStyle.btnGroup} marginTop="24px">
                <Button sx={GlobalStyle.whiteBtn} onClick={onCancel}>
                  Cancel
                </Button>
                <Button sx={GlobalStyle.blueBtn} onClick={submitFeedback}>
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

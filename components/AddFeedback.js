import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'
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

export default function AddFeedbackModal({ isOpen, onClose }) {
  let inputBox = {
    ...GlobalStyle.inputStyle,
    height: '160px',
  }
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)
  const handleClick1 = () => useDisclosure()
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
    if (feedback.message != '') {
      try {
        const result = await axios.post('/api/feedbackManager/addFeedback', {
          message: feedback.message,
        })
        console.log(result)
      } catch (err) {
        console.log(err)
      }
      setTimeout(() => {
        window.location.reload()
      }, 2000)
      toast({
        title: 'Feedback submitted',
        description: 'Your feedback has been submitted',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
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
              <ButtonGroup sx={btnFlex}>
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

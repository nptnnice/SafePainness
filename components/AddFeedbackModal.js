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
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)
  const handleClick1 = () => useDisclosure()
  const toast = useToast()

  const [isError, setIsError] = useState(false)

  const [feedback, SetFeedback] = useState({
    message: '',
  })

  const getFeedback = (e) => {
    SetFeedback({ ...feedback, message: e.target.value })
  }

  const [error, setError] = useState(false)

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
      }, 1500)
      toast({
        title: 'Feedback submitted',
        description: 'Your feedback has been submitted',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      setIsError(true)
      toast({
        title: 'An error occurred.',
        description: 'Please enter your feedback first before comfirming',
        status: 'error',
        duration: 5000,
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
          {/* <ModalHeader sx={GlobalStyle.regularText}>
                        Send feedback to your patient
                    </ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={isError && !feedback.message}>
              <FormLabel sx={GlobalStyle.labelText}>
                Send feedback to your patient
              </FormLabel>
              <Textarea sx={GlobalStyle.inputStyle} onChange={getFeedback}/>
              <FormErrorMessage marginTop="16px" sx={GlobalStyle.errorText}>
                Please fill in your feedback
                </FormErrorMessage>
            </FormControl>
            <Center>
              <ButtonGroup sx={btnFlex}>
                <Button sx={GlobalStyle.whiteBtn} onClick={onClose}>
                  Cancel
                </Button>
                <Button sx={GlobalStyle.blueBtn} onClick={submitFeedback}>
                  Confirm
                </Button>
              </ButtonGroup>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

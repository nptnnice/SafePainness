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
  Textarea,
  useToast,
  Center,
} from '@chakra-ui/react'

export default function AddFeedbackModal({ isOpen, onClose }) {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)
  const handleClick1 = () => useDisclosure()
  const toast = useToast()
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
      setError(true)
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
            <FormControl>
              <FormLabel sx={GlobalStyle.labelText}>
                Send feedback to your patient
              </FormLabel>
              <Textarea sx={GlobalStyle.inputStyle} onChange={getFeedback}/>
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

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import url from '/url'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useToast } from '@chakra-ui/react'

export default function QR(props) {
  const { isOpen, onClose, patientName, doctorID, patientID } = props

  // router
  const router = useRouter()

  // toast
  const toast = useToast()

  // confirm to create case
  const onClickConfirm = async () => {
    const caseData = {
      doctorID: doctorID,
      patientID: patientID,
    }
    try {
      const res = await axios.post('/api/caseManager/addCase', caseData)
      console.log('res', res)
      toast({
        title: 'Case created.',
        description: 'You can now view the case.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      onClose()
      setTimeout(() => {
        router.push(`${url}/patient/${patientID}`)
      }, 3000)
    } catch (err) {
      console.log(err)
      toast({
        title: 'Case creation failed.',
        description: 'Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent sx={GlobalStyle.modalStyle} textAlign="center">
        <ModalHeader sx={GlobalStyle.headingText}>
          Confirm to create case
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text sx={GlobalStyle.regularText}>
            You selected "{patientName}" for this case.
          </Text>
          <ButtonGroup marginTop="40px">
            <Button sx={GlobalStyle.cancelBtn} onClick={onClose}>
              Cancel
            </Button>
            <Button sx={GlobalStyle.saveBtn} onClick={() => onClickConfirm()}>
              Confirm
            </Button>
          </ButtonGroup>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

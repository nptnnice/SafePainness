import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Center,
  VStack,
  Button,
} from '@chakra-ui/react'
import { takeHistoryBtn } from '/style-props/Casepagestyles'
import {
  headingText,
  greyMediumText,
  regularText,
  commonModal,
} from '/style-props/Sharedstyles'
import url from '/url'
import QRCode from 'react-qr-code'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import jwt_decode from 'jwt-decode'

export default function QRgenerator(props) {
  const { caseInfo } = props

  // router
  const router = useRouter()

  // check user role
  const [userRole, setUserRole] = useState('')
  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      setUserRole(jwt_decode(sessionStorage.getItem('token')).role)
    }
  }, [])

  // handle modal
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    userRole === 'patient'
      ? router.push(
          `/patient/${caseInfo.patientID}/case/${caseInfo.caseID}/historytaking/part1`
        )
      : setShowModal(!showModal)
  }

  return (
    <>
      {/* ==================== Button ==================== */}
      <VStack>
        <Text sx={greyMediumText}>No record of pain experience</Text>
        <Button sx={takeHistoryBtn} onClick={() => handleClick()}>
          Take history
        </Button>
      </VStack>

      {/* ==================== Modal ==================== */}
      <Modal isOpen={showModal} onClose={handleClick} isCentered>
        <ModalOverlay />
        <ModalContent sx={commonModal} textAlign="center">
          <ModalHeader sx={headingText}>History taking form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text sx={regularText}>
              Get your patient scan the QR code to fill in the history taking
              form.
            </Text>
            <Center marginTop="16px">
              <QRCode
                value={`${url}/patient/${caseInfo.patientID}/case/${caseInfo.caseID}/historytaking/part1`}
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

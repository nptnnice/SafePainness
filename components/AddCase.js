import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Avatar,
  VStack,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import { SearchIcon, AddIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import url from '/url'
import axios from 'axios'
import QRgenerator from '/components/QRgenerator'

export default function CreateAppointment(props) {
  const { isOpen, onClose, allpatients } = props

  let modalStyle = {
    maxWidth: '900px',
    maxHeight: '700px',
    width: '90%',
    borderRadius: '24px',
    padding: { base: '24px 0px', md: '32px 16px' },
    backgroundColor: Colour.lightGrey,
  }
  let flexStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: { base: '8px', md: '16px' },
    width: '100%',
  }
  let iconStyle = {
    color: Colour.darkGrey,
    marginTop: { base: '0px', md: '8px' },
    boxSize: { base: '20px', md: '24px' },
  }
  let addIconSize = {
    boxSize: { base: '12px', md: '14px' },
  }
  let hoverStyle = {
    cursor: 'pointer',
    transition: 'all 0.1s ease-in-out',
    _hover: {
      backgroundColor: Colour.lightGrey,
    },
  }
  let hoverStyleSelected = {
    ...hoverStyle,
    backgroundColor: Colour.turquoise,
    _hover: {
      backgroundColor: Colour.turquoise,
    },
  }
  let boxStyle = {
    justifyContent: 'flex-end',
    padding: { base: '12px 0px', md: '20px 0px 0px 0px' },
  }
  let tableBox = {
    width: '100%',
    borderRadius: '12px',
    backgroundColor: Colour.white,
    padding: { base: '24px 16px', md: '40px 20px' },
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
    overflowY: 'scroll',
    height: { base: '320px', md: '400px' },
  }

  // router
  const router = useRouter()
  const onClickNewPatient = () => {
    router.push('/create-patient-account')
  }

  // choose patient
  const [selected, setSelected] = useState('')

  const choosePatient = (patientID) => {
    if (selected === patientID) {
      setSelected('')
    } else {
      setSelected(patientID)
    }
  }

  const [showQR, setShowQR] = useState(false)
  const handleClickQR = () => setShowQR(!showQR)

  // // submit
  // const onClickHistorytaking = () => {
  //   const patientID = selected
  //   router.push(`/patient/${patientID}/historytaking/part1`)
  // }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent sx={modalStyle}>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={8}>
              <Flex sx={flexStyle}>
                {/* ==================== Search box ==================== */}
                <InputGroup>
                  <Input
                    sx={GlobalStyle.inputStyle}
                    placeholder="Search patient"
                  />
                  <InputRightElement>
                    <SearchIcon sx={iconStyle} />
                  </InputRightElement>
                </InputGroup>
                <Button
                  sx={GlobalStyle.turquoiseBtn}
                  leftIcon={<AddIcon sx={addIconSize} />}
                  onClick={() => onClickNewPatient()}
                >
                  New Patient
                </Button>
              </Flex>

              {/* ==================== Patient table ==================== */}
              <Box sx={tableBox}>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th sx={GlobalStyle.boldText}>Patient ID</Th>
                        <Th sx={GlobalStyle.boldText}>Name</Th>
                        <Th isNumeric></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {allpatients.map((patient, index) => (
                        <Tr
                          key={index}
                          sx={
                            selected == patient.patientID
                              ? hoverStyleSelected
                              : hoverStyle
                          }
                          onClick={() => choosePatient(patient.patientID)}
                        >
                          <Td sx={GlobalStyle.labelText}>
                            {patient.patientID}
                          </Td>
                          <Td sx={GlobalStyle.labelText}>
                            {patient.firstName}&nbsp;{patient.lastName}
                          </Td>
                          <Td isNumeric>
                            <Avatar
                              src={patient.image}
                              sx={GlobalStyle.profileImgSmall}
                            />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </VStack>

            {/* ==================== Button ==================== */}
            <Flex sx={boxStyle}>
              <Button
                sx={GlobalStyle.yellowBtn}
                disabled={selected == ''}
                onClick={handleClickQR}
              >
                Take History
              </Button>
            </Flex>
            <QRgenerator
              isOpen={showQR}
              onClose={handleClickQR}
              patientID={selected}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

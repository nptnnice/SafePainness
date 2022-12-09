import { SearchIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import ConfirmAddCase from '/components/ConfirmAddCase'
import { modalStyle, tableBox } from '../style-props/Doctorpagestyles'
import {
  inputStyle,
  boldText,
  mediumText,
  profileImgSmall,
  hoverStyle,
  hoverStyleSelected,
  searchIconStyle,
  submitBtnPosition,
  yellowBtn,
  bigModal,
} from '../style-props/Sharedstyles'
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

export default function CreateAppointment(props) {
  const { isOpen, onClose, allpatients } = props

  // router
  const router = useRouter()
  const doctorID = router.query.doctorID

  // choose patient
  const [selected, setSelected] = useState('')
  const [patientName, setPatientName] = useState('')
  const choosePatient = (patient) => {
    if (selected === patient.patientID) {
      setSelected('')
      setPatientName('')
    } else {
      setSelected(patient.patientID)
      const patientName = `${patient.firstName} ${patient.lastName}`
      setPatientName(patientName)
    }
  }

  // set to show modal
  const [showModal, setShowModal] = useState(false)
  const onClickCreateCase = () => setShowModal(!showModal)

  // set search and pagination
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    // if search is empty, show all patients
    if (search === '') {
      setSearchResult(allpatients)
    } else {
      // if search is not empty, show patients that match the search
      const result = allpatients.filter((patient) => {
        if (
          patient.firstName.toLowerCase().includes(search.toLowerCase()) ||
          patient.lastName.toLowerCase().includes(search.toLowerCase()) ||
          patient.firstName
            .toLowerCase()
            .concat(' ', patient.lastName.toLowerCase())
            .includes(search.toLowerCase())
        ) {
          return patient
        } else {
          return null
        }
      })
      setSearchResult(result)
    }
  }, [search])

  // customize onclose
  const onCloseCustom = () => {
    onClose()
    setSearch('')
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onCloseCustom}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent sx={bigModal}>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={8}>
              {/* ==================== Search box ==================== */}
              <InputGroup>
                <Input
                  sx={inputStyle}
                  placeholder="Search patient"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <InputRightElement>
                  <SearchIcon sx={searchIconStyle} />
                </InputRightElement>
              </InputGroup>

              {/* ==================== Patient table ==================== */}
              <Box sx={tableBox}>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th sx={boldText}>Patient ID</Th>
                        <Th sx={boldText}>Name</Th>
                        <Th isNumeric></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {searchResult.map((patient, index) => (
                        <Tr
                          key={index}
                          sx={
                            selected == patient.patientID
                              ? hoverStyleSelected
                              : hoverStyle
                          }
                          onClick={() => choosePatient(patient)}
                        >
                          <Td sx={mediumText}>{patient.patientID}</Td>
                          <Td sx={mediumText}>
                            {patient.firstName}&nbsp;{patient.lastName}
                          </Td>
                          <Td isNumeric>
                            <Avatar src={patient.image} sx={profileImgSmall} />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </VStack>

            {/* ==================== Button ==================== */}
            <Flex sx={submitBtnPosition}>
              <Button
                sx={yellowBtn}
                disabled={selected == ''}
                onClick={() => onClickCreateCase()}
              >
                Create case
              </Button>
            </Flex>
            <ConfirmAddCase
              isOpen={showModal}
              onClose={onClickCreateCase}
              patientName={patientName}
              doctorID={doctorID}
              patientID={selected}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

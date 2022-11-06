import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
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
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { SearchIcon, AddIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function CreateAppointment({ isOpen, onClose, props }) {
  const [onClickPatient, setPatient] = useState(false)
  const [selected, setSelected] = useState('')
  const onClickHistorytaking = () => {
    router.push('/patient/patientid/historytaking/part1')
  }
  const onClickNewPatient = () => {
    router.push('/create-patient-account')
  }
  const router = useRouter()
  let modalStyle = {
    maxWidth: '900px',
    maxHeight: '700px',
    width: '90%',
    borderRadius: '24px',
    padding: { base: '20px', md: '24px' },
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
    backgroundColor: Colour.lightGrey,
  }
  let modalBodyStyle = {
    padding: { base: '0px', md: '8px' },
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
          <ModalBody sx={modalBodyStyle}>
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
                    {/* <Tbody>
                      {props.map((doctor) => (
                        <Tr
                          sx={
                            selected == doctor.doctorID
                              ? hoverStyleSelected
                              : hoverStyle
                          }
                          onClick={() => {
                            if (selected == doctor.doctorID) {
                              setSelected('')
                            } else {
                              setSelected(doctor.doctorID)
                            }
                          }}
                        >
                          <Td sx={GlobalStyle.labelText}>{doctor.doctorID}</Td>
                          <Td sx={GlobalStyle.labelText}>{doctor.firstName}</Td>
                          <Td isNumeric>
                            <Avatar
                              src="/images/petch.JPG"
                              sx={GlobalStyle.profileImgSmall}
                            />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody> */}
                  </Table>
                </TableContainer>
              </Box>
            </VStack>
            {/* ==================== Button ==================== */}
            <Flex sx={boxStyle}>
              <Button
                sx={GlobalStyle.yellowBtn}
                disabled={selected == ''}
                onClick={() => onClickHistorytaking()}
              >
                Take History
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

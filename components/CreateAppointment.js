import {
  Text,
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
import {
  SearchIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AddIcon,
} from '@chakra-ui/icons'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function CreateAppointment({ isOpen, onClose, props }) {
  let modalStyle = {
    maxWidth: '900px',
    maxHeight: '400px',
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
  let btnFlex = {
    marginTop: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
  }
  let hoverStyle = {
    cursor: 'pointer',
    transition: 'all 0.1s ease-in-out',
    _hover: {
      backgroundColor: Colour.lightGrey,
    },
  }
  let arrowStyle = {
    color: Colour.lightBlack,
    boxSize: { base: '12px', md: '14px' },
    cursor: 'pointer',
    transition: 'all 0.1s',
    _hover: {
      color: Colour.turquoise,
    },
  }
  let modalBodyStyle = {
    padding: { base: '0px', md: '8px' },
  }
  let stackLayout = {
    padding: '0px',
  }
  const onClickPatient = () => {
    router.push('/patient/patientid')
  }
  const onClickNewPatient = () => {
    router.push('/create-patient-account')
  }
  const router = useRouter()
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
            <VStack sx={stackLayout} spacing={8}>
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
              <Box sx={GlobalStyle.infoBox}>
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
                      {props.map((doctor) => (
                        <Tr sx={hoverStyle} onClick={() => onClickPatient()}>
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
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>

              {/* ==================== Button ==================== */}
              <Flex sx={btnFlex}>
                <ArrowLeftIcon sx={arrowStyle} />
                <Text sx={GlobalStyle.labelText}>1</Text>
                <ArrowRightIcon sx={arrowStyle} />
              </Flex>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
// export async function getServerSideProps() {
//   const doctorData = await axios.get('http://localhost:3000/api/getDoctor')
//   return {
//     props: {
//       doctorData: doctorData.data,
//     },
//   }
// }

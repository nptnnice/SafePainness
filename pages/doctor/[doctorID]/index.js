import {
  Text,
  Box,
  Flex,
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
  Avatar,
  VStack,
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import { SearchIcon } from '@chakra-ui/icons'
import HeadCenter from '/components/HeadCenter'
import { useRouter } from 'next/router'
import { ArrowLeftIcon, ArrowRightIcon, AddIcon } from '@chakra-ui/icons'
import axios from 'axios'
import CreateAppointment from '/components/CreateAppointment'
import { useState, useEffect } from 'react'
import url from '/url'

export default function MyPatients(props) {
  let iconStyle = {
    color: Colour.darkGrey,
    marginTop: { base: '0px', md: '8px' },
    boxSize: { base: '20px', md: '24px' },
  }
  let flexStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: { base: '8px', md: '16px' },
    width: '100%',
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
  let addIconSize = {
    boxSize: { base: '12px', md: '14px' },
  }

  // router
  const router = useRouter()
  const doctorID = router.query.doctorID

  // redirect to patient info page
  const onClickPatient = (patientID) => {
    router.push(`/patient/${patientID}`)
  }
  
  // set modal
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  console.log('props', props)

  return (
    <>
      <HeadCenter topic="My Patients" />
      <VStack sx={GlobalStyle.layout} spacing={8}>
        <Flex sx={flexStyle}>
          {/* ==================== Search box ==================== */}
          <InputGroup>
            <Input sx={GlobalStyle.inputStyle} placeholder="Search patient" />
            <InputRightElement>
              <SearchIcon sx={iconStyle} />
            </InputRightElement>
          </InputGroup>
          <Button
            sx={GlobalStyle.turquoiseBtn}
            leftIcon={<AddIcon sx={addIconSize} />}
            onClick={handleClick}
          >
            Add Case
          </Button>
          <CreateAppointment
            isOpen={showModal}
            onClose={handleClick}
            props={props.doctorData}
          />
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
                {props.patientList.map((item, index) => (
                  <Tr
                    key={index}
                    sx={hoverStyle}
                    onClick={() => onClickPatient(item.patientID)}
                  >
                    <Td sx={GlobalStyle.labelText}>{item.patientID}</Td>
                    <Td sx={GlobalStyle.labelText}>{item.firstName}</Td>
                    <Td isNumeric>
                      <Avatar
                        src={item.image}
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
    </>
  )
}

export async function getServerSideProps(context) {
  const result = await axios.post(`${url}/api/patientManager/getMyPatients`, {
    doctorID: context.params.doctorID,
  })
  return {
    props: {
      patientList: result.data,
    },
  }
}

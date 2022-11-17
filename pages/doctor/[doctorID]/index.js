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
import AddCase from '/components/AddCase'
import { useState, useEffect } from 'react'
import url from '/url'

export default function MyPatients(props) {
  const { mypatients, allpatients } = props
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

  // redirect to patient info page
  const onClickPatient = (patientID) => {
    router.push(`/patient/${patientID}`)
  }

  // set modal
  const [showModal, setShowModal] = useState(false)
  const handleClickModal = () => setShowModal(!showModal)

  // set search
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    // if search is empty, show all patients
    if (search === '') {
      setSearchResult(mypatients)
    } else {
      // if search is not empty, show patients that match the search
      const result = mypatients.filter((patient) => {
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

  return (
    <>
      <HeadCenter topic="My Patients" />
      <VStack sx={GlobalStyle.layout} spacing={8}>
        <Flex sx={flexStyle}>
          {/* ==================== Search box ==================== */}
          <InputGroup>
            <Input
              sx={GlobalStyle.inputStyle}
              placeholder="Search patient"
              onChange={(e) => setSearch(e.target.value)}
            />
            <InputRightElement>
              <SearchIcon sx={iconStyle} />
            </InputRightElement>
          </InputGroup>
          <Button
            sx={GlobalStyle.turquoiseBtn}
            leftIcon={<AddIcon sx={addIconSize} />}
            onClick={handleClickModal}
          >
            Add Case
          </Button>
          <AddCase
            isOpen={showModal}
            onClose={handleClickModal}
            allpatients={allpatients}
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
                {searchResult.map((item, index) => (
                  <Tr
                    key={index}
                    sx={hoverStyle}
                    onClick={() => onClickPatient(item.patientID)}
                  >
                    <Td sx={GlobalStyle.labelText}>{item.patientID}</Td>
                    <Td sx={GlobalStyle.labelText}>
                      {item.firstName}&nbsp;{item.lastName}
                    </Td>
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
  const mypatients = await axios.post(
    `${url}/api/patientManager/getMyPatients`,
    {
      doctorID: context.params.doctorID,
    }
  )
  const allpatients = await axios.get(
    `${url}/api/patientManager/getAllPatients`
  )
  return {
    props: {
      mypatients: mypatients.data,
      allpatients: allpatients.data,
    },
  }
}

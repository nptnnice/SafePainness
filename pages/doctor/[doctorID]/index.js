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
  IconButton,
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
  const { allpatients } = props
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
  const [createCase, setCreateCase] = useState(false)
  const handleClickModal = () => setCreateCase(!createCase)

  // set search
  const [mypatients, setMyPatients] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageAmount, setPageAmount] = useState(1)
  useEffect(() => {
    const fetchMyPatients = async () => {
      let result = await axios.post(`${url}/api/patientManager/getMyPatients`, {
        doctorID: router.query.doctorID,
        page: page,
        search: search.toLowerCase(),
      })
      setMyPatients(result.data)
      if (result.data.length > 0) {
        setPageAmount(result.data[0].page_amount)
      }
    }
    fetchMyPatients()
  }, [page, search])

  // set pagination
  const onClickPrevious = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  const onClickNext = () => {
    if (page != pageAmount) {
      setPage(page + 1)
    }
  }

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
            isOpen={createCase}
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
                {mypatients.map((item, index) => (
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
          <IconButton
            icon={<ArrowLeftIcon sx={arrowStyle} />}
            onClick={onClickPrevious}
            isDisabled={page === 1}
          />
          <Text sx={GlobalStyle.labelText}>{page}</Text>
          <IconButton
            icon={<ArrowRightIcon sx={arrowStyle} />}
            onClick={onClickNext}
            isDisabled={page == pageAmount}
          />
        </Flex>
      </VStack>
    </>
  )
}

export async function getServerSideProps(context) {
  const allpatients = await axios.get(
    `${url}/api/patientManager/getAllPatients`
  )
  return {
    props: {
      // mypatients: mypatients.data,
      allpatients: allpatients.data,
    },
  }
}

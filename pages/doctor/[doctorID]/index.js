import { useRouter } from 'next/router'
import axios from 'axios'
import url from '/url'
import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useAppContext } from '../../../context/UserContext'
import HeadCenter from '/components/HeadCenter'
import AddCase from '/components/AddCase'
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
import {
  SearchIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AddIcon,
} from '@chakra-ui/icons'
import {
  bgColor,
  layout,
  inputStyle,
  searchIconStyle,
  btnGroup,
  turquoiseBtn,
  paginationBtn,
  addIconStyle,
  contentBox,
  boldText,
  mediumText,
  hoverStyle,
  profileImgSmall,
  flexStyle,
} from '/style-props/Sharedstyles'

export default function MyPatients(props) {
  const { allpatients } = props

  // router
  const router = useRouter()

  // context
  const { user, setUser } = useAppContext()

  // check if user is logged in
  useEffect(() => {
    if (sessionStorage.getItem('token') == null) {
      sessionStorage.clear()
      setUser(null)
      router.push('/')
      setTimeout(() => {
        alert('Please login first')
      }, 500)
    } else {
      if (jwt_decode(sessionStorage.getItem('token')).role != 'doctor') {
        alert('You cannot access this page')
      }
    }
  }, [])

  // redirect to patient info page
  const onClickPatient = (patientID) => {
    router.push(`/patient/${patientID}`)
  }

  // set modal
  const [createCase, setCreateCase] = useState(false)
  const handleCreateCase = () => setCreateCase(!createCase)

  // set search and pagination
  const [mypatients, setMyPatients] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageAmount, setPageAmount] = useState(1)
  useEffect(() => {
    // data to be sent to backend
    let searchBody = {
      doctorID: router.query.doctorID,
      page: page,
      search: search.toLowerCase(),
    }
    // fetch data from backend
    let fetchMyPatients = async () => {
      let result = await axios.post(
        `${url}/api/patientManager/getMyPatients`,
        searchBody
      )
      setMyPatients(result.data)
      if (result.data.length > 0) {
        setPageAmount(result.data[0].page_amount)
      }
    }
    fetchMyPatients()
  }, [page, search])

  // set pagination button
  const onClickPageButton = (direction) => {
    switch (direction) {
      case 'previous':
        if (page > 1) {
          setPage(page - 1)
        }
        break
      case 'next':
        if (page != pageAmount) {
          setPage(page + 1)
        }
        break
    }
  }

  return (
    <>
      <HeadCenter topic="My Patients" />
      <Box sx={bgColor}>
        <VStack sx={layout} spacing={8}>
          <Flex sx={flexStyle}>
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
            <Button
              sx={turquoiseBtn}
              leftIcon={<AddIcon sx={addIconStyle} />}
              onClick={() => handleCreateCase()}
            >
              Add Case
            </Button>
            <AddCase
              isOpen={createCase}
              onClose={handleCreateCase}
              allpatients={allpatients}
            />
          </Flex>

          {/* ==================== Patient table ==================== */}
          <Box sx={contentBox}>
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
                  {mypatients.map((item, index) => (
                    <Tr
                      key={index}
                      sx={hoverStyle}
                      onClick={() => onClickPatient(item.patientID)}
                    >
                      <Td sx={mediumText}>{item.patientID}</Td>
                      <Td sx={mediumText}>
                        {item.firstName}&nbsp;{item.lastName}
                      </Td>
                      <Td isNumeric>
                        <Avatar src={item.image} sx={profileImgSmall} />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          {/* ==================== Button ==================== */}
          <Flex sx={btnGroup}>
            <IconButton
              icon={<ArrowLeftIcon sx={paginationBtn} />}
              onClick={() => onClickPageButton('previous')}
              isDisabled={page === 1}
            />
            <Text sx={mediumText}>{page}</Text>
            <IconButton
              icon={<ArrowRightIcon sx={paginationBtn} />}
              onClick={() => onClickPageButton('next')}
              isDisabled={page == pageAmount}
            />
          </Flex>
        </VStack>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  const allpatients = await axios.get(
    `${url}/api/patientManager/getAllPatients`
  )
  return {
    props: {
      allpatients: allpatients.data,
    },
  }
}

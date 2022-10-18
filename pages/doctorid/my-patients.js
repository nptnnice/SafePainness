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
import GlobalStyle from '../../Style'
import Colour from '../../Colour'
import { SearchIcon } from '@chakra-ui/icons'
import HeadCenter from '../../components/HeadCenter'
import { useRouter } from 'next/router'

export default () => {
  let iconStyle = {
    color: Colour.darkGrey,
    marginTop: '8px',
    boxSize: { base: '20px', md: '24px' },
  }
  let flexStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    width: '100%',
  }
  let textBtn = {
    fontFamily: 'IBM Plex Sans',
    fontSize: { sm: '16px', md: '18px' },
    fontWeight: 'medium',
    color: Colour.lightBlack,
    cursor: 'pointer',
    transition: 'all 0.1s',
    _hover: {
      color: Colour.turquoise,
    },
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

  const router = useRouter()

  const onClickPatient = () => {
    router.push('/patientid')
  }

  return (
    <>
      <HeadCenter topic="My Patients" />
      <VStack sx={GlobalStyle.layout} spacing={8}>
        <Flex sx={flexStyle}>
          {/* ==================== Search box ==================== */}
          <InputGroup>
            <Input sx={GlobalStyle.inputStyle} placeholder="Search patient" />
            <InputRightElement children={<SearchIcon sx={iconStyle} />} />
          </InputGroup>
          <Button sx={GlobalStyle.turquoiseBtn}>+ appointment</Button>
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
                <Tr sx={hoverStyle} onClick={() => onClickPatient()}>
                  <Td sx={GlobalStyle.labelText}>XXXXXX</Td>
                  <Td sx={GlobalStyle.labelText}>Pakamon Mumu</Td>
                  <Td isNumeric>
                    <Avatar
                      src="/images/petch.JPG"
                      sx={GlobalStyle.profileImgSmall}
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* ==================== Button ==================== */}
        <Flex sx={btnFlex}>
          <Text sx={textBtn}>Previous</Text>
          <Text sx={GlobalStyle.regularText}>1</Text>
          <Text sx={textBtn}>Next</Text>
        </Flex>
      </VStack>
    </>
  )
}

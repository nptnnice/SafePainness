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
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { SearchIcon } from '@chakra-ui/icons'

export default () => {
  let iconStyle = {
    color: Colour.darkGrey,
    marginTop: '8px',
  }
  let flexStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    gap: '48px',
  }
  let section = {
    backgroundColor: Colour.white,
    border: '2px solid',
    borderColor: Colour.grey,
    borderRadius: '12px',
    padding: '16px 24px',
    marginTop: '48px',
  }
  let textBtn = {
    fontFamily: 'Lato',
    fontSize: '18px',
    fontWeight: 'bold',
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

  return (
    <Box sx={GlobalStyle.layout}>
      <Flex sx={flexStyle}>
        {/* Search box */}
        <InputGroup>
          <Input sx={GlobalStyle.inputStyle} placeholder="Search patient" />
          <InputRightElement
            children={<SearchIcon sx={iconStyle} boxSize={6} />}
          />
        </InputGroup>
        <Button sx={GlobalStyle.turquoiseBtn}>New appointment</Button>
      </Flex>

      {/* Patient table */}
      <Box sx={section}>
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
              <Tr>
                <Td sx={GlobalStyle.normalText}>XXXXXX</Td>
                <Td sx={GlobalStyle.normalText}>Pakamon Mumu</Td>
                <Td isNumeric>
                  <Avatar src="/images/petch.JPG" />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* Button */}
      <Flex sx={btnFlex}>
        <Text sx={textBtn}>Previous</Text>
        <Text sx={GlobalStyle.normalText}>1</Text>
        <Text sx={textBtn}>Next</Text>
      </Flex>
    </Box>
  )
}

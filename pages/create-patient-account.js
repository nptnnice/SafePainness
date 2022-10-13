import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  ButtonGroup,
  SimpleGrid,
  Box,
  Flex,
  Select,
  Textarea,
  FormControl,
  FormLabel,
  chakra,
  VStack,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import HeadCenter from '../components/HeadCenter'
import Colour from '../Colour'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default () => {
  const [show, setShow] = useState(false)
  const handlePassword = () => setShow(!show)

  let flexStyle = {
    gap: '24px',
    width: '100%',
  }
  let iconInput = {
    color: Colour.lightBlack,
    cursor: 'pointer',
    marginTop: '8px',
  }

  return (
    <>
      <HeadCenter topic="Create Patient Account" />

      <VStack sx={GlobalStyle.layout} align="start" spacing={8}>
        {/* Basic information */}
        <Text sx={GlobalStyle.headingText}>Basic Information</Text>
        <SimpleGrid columns={2} spacing="24px" width="100%">
          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.labelText}>First Name</FormLabel>
            <Input sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.labelText}>Last Name</FormLabel>
            <Input sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.labelText}>Username</FormLabel>
            <Input sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.labelText}>Password</FormLabel>
            <InputGroup>
              <Input
                sx={GlobalStyle.inputStyle}
                type={show ? 'text' : 'password'}
              />
              <InputRightElement>
                {show ? (
                  <ViewIcon sx={iconInput} onClick={handlePassword} />
                ) : (
                  <ViewOffIcon sx={iconInput} onClick={handlePassword} />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.labelText}>Date of birth</FormLabel>
            <Input type="date" sx={GlobalStyle.inputStyle} />
          </FormControl>

          <Flex sx={flexStyle}>
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.labelText}>Sex</FormLabel>
              <Select placeholder="Choose" sx={GlobalStyle.inputStyle}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="undefined">Undefinded</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.labelText}>Blood group</FormLabel>
              <Select placeholder="Choose" sx={GlobalStyle.inputStyle}>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Select>
            </FormControl>
          </Flex>
        </SimpleGrid>
        <VStack spacing="24px">
          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.labelText}>Citizen ID</FormLabel>
            <Input type="number" sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.labelText}>
              Medical conditions{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Fill the blank with dash (-), if the answer is no.)
              </chakra.span>
            </FormLabel>
            <Textarea sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.labelText}>
              Allergy{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Fill the blank with dash (-), if the answer is no.)
              </chakra.span>
            </FormLabel>
            <Textarea sx={GlobalStyle.inputStyle} />
          </FormControl>
        </VStack>

        <Box sx={GlobalStyle.divider}></Box>

        {/* Contact information */}
        <Text sx={GlobalStyle.headingText}>Contact Information</Text>
        <Flex sx={flexStyle}>
          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.labelText}>Phone Number</FormLabel>
            <Input type="tel" sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl>
            <FormLabel sx={GlobalStyle.labelText}>
              Email{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Optional)
              </chakra.span>
            </FormLabel>
            <Input type="email" sx={GlobalStyle.inputStyle} />
          </FormControl>
        </Flex>

        {/* Button */}
        <Box sx={GlobalStyle.btnBox}>
          <ButtonGroup gap={4}>
            <Button sx={GlobalStyle.whiteBtn}>Cancel</Button>
            <Button sx={GlobalStyle.blueBtn}>Create</Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </>
  )
}

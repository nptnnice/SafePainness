import {
  Text,
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
  Avatar,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  VStack,
  Button,
  ButtonGroup,
  SimpleGrid,
  Select,
} from '@chakra-ui/react'
import HeadCenter from '/components/HeadCenter'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function PatientProfile() {
  let flexStyle1 = {
    gap: '24px',
    flexDirection: { base: 'column', md: 'row' },
  }
  let flexStyle2 = {
    gap: '24px',
    flexDirection: { base: 'column', sm: 'row' },
  }
  let iconInput = {
    color: Colour.lightBlack,
    cursor: 'pointer',
    marginTop: '8px',
  }

  const toast = useToast()
  const [isEdit, setIsEdit] = useState(false)
  const [show, setShow] = useState(false)
  const handlePassword = () => setShow(!show)

  const onSaveClick = () => {
    toast({
      title: 'Profile updated.',
      description: 'Your profile has been updated.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadCenter topic="my profile" />

      <VStack sx={GlobalStyle.layout} align="start" spacing={8}>
        <Text sx={GlobalStyle.headingText}>Patient ID: XXXXXX</Text>
        {/* ==================== Basic information ==================== */}
        <Box sx={GlobalStyle.infoBox}>
          <Flex sx={flexStyle1}>
            <Avatar sx={GlobalStyle.profileImg} src="/images/profile.JPG" />

            <Box flex="1">
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                sx={GlobalStyle.gridStyle}
              >
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
                  <FormLabel sx={GlobalStyle.labelText}>
                    Date of birth
                  </FormLabel>
                  <Input type="date" sx={GlobalStyle.inputStyle} />
                </FormControl>

                <Flex sx={flexStyle2}>
                  <FormControl isRequired>
                    <FormLabel sx={GlobalStyle.labelText}>Sex</FormLabel>
                    <Select placeholder="Choose" sx={GlobalStyle.inputStyle}>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="undefined">Undefinded</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel sx={GlobalStyle.labelText} whiteSpace="nowrap">
                      Blood group
                    </FormLabel>
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
            </Box>
          </Flex>
        </Box>

        {/* ==================== Medical information ==================== */}
        <Tabs variant="enclosed" width="100%">
          <TabList>
            <Tab sx={GlobalStyle.tabSelected}>Medical Information</Tab>
          </TabList>
          <TabPanels>
            <TabPanel sx={GlobalStyle.tabBox}>
              <VStack spacing="24px">
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>
                    Medical conditions
                  </FormLabel>
                  <Textarea sx={GlobalStyle.inputStyle} />
                </FormControl>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Allergy</FormLabel>
                  <Textarea sx={GlobalStyle.inputStyle} />
                </FormControl>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Button */}
        <Box sx={GlobalStyle.btnBox}>
          {!isEdit ? (
            <Button sx={GlobalStyle.editBtn} onClick={() => setIsEdit(!isEdit)}>
              Edit
            </Button>
          ) : (
            <ButtonGroup gap={4}>
              <Button
                sx={GlobalStyle.cancelBtn}
                onClick={() => setIsEdit(!isEdit)}
              >
                Cancel
              </Button>
              <Button
                sx={GlobalStyle.saveBtn}
                onClick={() => {
                  setIsEdit(!isEdit)
                  onSaveClick()
                }}
              >
                Save
              </Button>
            </ButtonGroup>
          )}
        </Box>
      </VStack>
    </Box>
  )
}

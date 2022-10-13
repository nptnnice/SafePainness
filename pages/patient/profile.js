import {
  Text,
  Box,
  Flex,
  Input,
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
} from '@chakra-ui/react'
import HeadCenter from '../../components/HeadCenter'
import GlobalStyle from '../../Style'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'

export default () => {
  const toast = useToast()
  const [isEdit, setIsEdit] = useState(false)

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

  let flexStyle = {
    gap: '24px',
    marginBottom: '24px',
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadCenter topic="my profile" />

      <VStack sx={GlobalStyle.layout} align="start" spacing={8}>
        <Text sx={GlobalStyle.headingText}>Patient ID: XXXXXX</Text>
        {/* Basic information */}
        <Box sx={GlobalStyle.infoBox}>
          <Flex sx={flexStyle}>
            <Avatar sx={GlobalStyle.profileImg} src="/images/profile.JPG" />

            <Box flex="1">
              <Flex sx={flexStyle}>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>First name</FormLabel>
                  <Input sx={GlobalStyle.inputStyle} />
                </FormControl>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Last name</FormLabel>
                  <Input sx={GlobalStyle.inputStyle} />
                </FormControl>
              </Flex>
              <Flex sx={flexStyle}>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Username</FormLabel>
                  <Input sx={GlobalStyle.inputStyle} />
                </FormControl>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Password</FormLabel>
                  <Input sx={GlobalStyle.inputStyle} />
                </FormControl>
              </Flex>
              <Flex sx={flexStyle}>
                <FormControl isReadOnly>
                  <FormLabel sx={GlobalStyle.labelText}>
                    Date of birth
                  </FormLabel>
                  <Input sx={GlobalStyle.inputStyle} type="date" />
                </FormControl>
                <FormControl isReadOnly>
                  <FormLabel sx={GlobalStyle.labelText}>Sex</FormLabel>
                  <Input sx={GlobalStyle.inputStyle} />
                </FormControl>
                <FormControl isReadOnly>
                  <FormLabel sx={GlobalStyle.labelText}>Blood group</FormLabel>
                  <Input sx={GlobalStyle.inputStyle} />
                </FormControl>
              </Flex>
              <Flex sx={flexStyle}>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Phone number</FormLabel>
                  <Input sx={GlobalStyle.inputStyle} />
                </FormControl>
                <FormControl>
                  <FormLabel sx={GlobalStyle.labelText}>Email</FormLabel>
                  <Input sx={GlobalStyle.inputStyle} />
                </FormControl>
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Medical information */}
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

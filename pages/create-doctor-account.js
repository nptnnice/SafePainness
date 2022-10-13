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
  FormControl,
  FormLabel,
  chakra,
  VStack,
  Avatar,
} from '@chakra-ui/react'
import HeadCenter from '../components/HeadCenter'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState, useEffect } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default () => {
  const [show, setShow] = useState(false)
  const handlePassword = () => setShow(!show)
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // create a preview, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    // use one file
    setSelectedFile(e.target.files[0])
  }

  let flexStyle = {
    gap: '24px',
    width: '100%',
  }
  let imgPosition = {
    position: 'absolute',
    right: '0',
    top: '48px',
  }
  let iconInput = {
    color: Colour.lightBlack,
    cursor: 'pointer',
    marginTop: '8px',
  }

  return (
    <>
      <HeadCenter topic="Create Doctor Account" />

      <VStack sx={GlobalStyle.layout} align="start" spacing={8}>
        {/* Basic information */}
        <Text sx={GlobalStyle.headingText}>Basic Information</Text>
        <Flex sx={flexStyle} align="end">
          <FormControl>
            <Input
              type="file"
              onChange={onSelectFile}
              sx={GlobalStyle.inputStyle}
              width="64%"
            />
          </FormControl>
          {selectedFile ? (
            <Box sx={imgPosition}>
              <Avatar src={preview} sx={GlobalStyle.profileImg} />
            </Box>
          ) : (
            <Box sx={imgPosition}>
              <Avatar sx={GlobalStyle.profileImg} />
            </Box>
          )}
        </Flex>

        <SimpleGrid columns={2} spacing="24px" width="100%">
          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>First Name</FormLabel>
            <Input sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>Last Name</FormLabel>
            <Input sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>Username</FormLabel>
            <Input sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>Password</FormLabel>
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
            <FormLabel sx={GlobalStyle.normalText}>Date of birth</FormLabel>
            <Input type="date" sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>Citizen ID</FormLabel>
            <Input type="number" sx={GlobalStyle.inputStyle} />
          </FormControl>
        </SimpleGrid>

        <VStack spacing="24px">
          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>
              Medical License Number
            </FormLabel>
            <Input sx={GlobalStyle.inputStyle} />
            <FormLabel sx={GlobalStyle.greyMediumText}>
              Doctors must be verified by the medical license number
            </FormLabel>
          </FormControl>

          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>Department</FormLabel>
            <Input type="text" sx={GlobalStyle.inputStyle} />
          </FormControl>
        </VStack>

        <Box sx={GlobalStyle.divider}></Box>

        {/* Contact information */}
        <Text sx={GlobalStyle.headingText}>Contact Information</Text>
        <Flex sx={flexStyle}>
          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>Phone Number</FormLabel>
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

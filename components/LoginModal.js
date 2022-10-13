import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false)
  const handlePassword = () => setShow(!show)

  let header = {
    fontFamily: 'Lato',
    fontSize: '32px',
    fontWeight: 'bold',
    color: Colour.darkBlack,
    textAlign: 'center',
  }
  let subText = {
    fontFamily: 'Lato',
    fontSize: '18px',
    fontWeight: '400',
    color: Colour.darkBlack,
    textAlign: 'center',
    marginTop: '16px',
  }
  let clickText = {
    color: Colour.lightBlue,
    fontFamily: 'IBM Plex Sans',
    fontWeight: '500',
    fontSize: '18px',
    cursor: 'pointer',
    _hover: {
      textDecoration: 'underline',
    },
  }
  let footModal = {
    justifyContent: 'center',
  }
  let iconInput = {
    color: Colour.lightBlack,
    cursor: 'pointer',
    marginTop: '8px',
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent sx={GlobalStyle.modalStyle}>
        <ModalHeader>
          <Text sx={header}>Login</Text>
          <Text sx={subText}>
            Not a member yet? Create an account to start tracking symptom!
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel sx={GlobalStyle.normalText}>Username</FormLabel>
            <Input sx={GlobalStyle.inputStyle} />
          </FormControl>

          <FormControl mt={4}>
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
        </ModalBody>

        <ModalFooter sx={footModal}>
          <VStack spacing={6}>
            <Button sx={GlobalStyle.blueBtn}>Log in</Button>
            <Text sx={clickText}>Forgot password?</Text>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

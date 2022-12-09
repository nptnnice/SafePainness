import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Avatar,
  VStack,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import url from '/url'

export default function DoctorInfo({ isOpen, onClose, doctorInfo }) {
  let layout = {
    gap: '32px',
    flexDirection: { base: 'column', md: 'row' },
  }
  let modalStyle = {
    maxWidth: '700px',
    maxHeight: '400px',
    width: '90%',
    borderRadius: '24px',
    padding: { base: '16px', md: '24px' },
  }

  const router = useRouter()
  // const { getDoctor } = props
  // console.log('props', getDoctor)

  // const [doctorInfo, setDoctorInfo] = useState({})

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`${url}/api/doctorManager/getDoctor`, {
  //         headers: {
  //           doctorid: doctorID,
  //         },
  //       })
  //       console.log('test', res.data)
  //       setDoctorInfo(res.data[0])
  //     } catch (err) {
  //       console.log('err', err)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // console.log('doctorInfo', doctorInfo)

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent sx={modalStyle}>
          <ModalHeader sx={GlobalStyle.headingText}>
            Doctor Information
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex sx={layout}>
              <Avatar sx={GlobalStyle.profileImg} src={doctorInfo.image} />
              <VStack spacing={4} align="left">
                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>First Name: </Text>
                  <Text sx={GlobalStyle.regularText}>
                    {doctorInfo.firstName}
                  </Text>
                </Flex>
                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>Last Name: </Text>
                  <Text sx={GlobalStyle.regularText}>
                    {doctorInfo.lastName}
                  </Text>
                </Flex>

                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>
                    Medical License Number:{' '}
                  </Text>
                  <Text sx={GlobalStyle.regularText}>
                    {doctorInfo.licenseNO}
                  </Text>
                </Flex>
                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>Department: </Text>
                  <Text sx={GlobalStyle.regularText}>
                    {doctorInfo.department}
                  </Text>
                </Flex>

                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>Phone number: </Text>
                  <Text sx={GlobalStyle.regularText}>
                    {doctorInfo.phoneNumber}
                  </Text>
                </Flex>
                <Flex sx={GlobalStyle.spanFlex}>
                  <Text sx={GlobalStyle.labelText}>Email: </Text>
                  <Text sx={GlobalStyle.regularText}>{doctorInfo.email}</Text>
                </Flex>
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

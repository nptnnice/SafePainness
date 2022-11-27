import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Flex,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState, useEffect } from 'react'
import { useAppContext } from '../context/UserContext'
import url from '../url'
import axios from 'axios'

export default function Notification() {
  let iconButton = {
    color: Colour.white,
    boxSize: '32px',
    cursor: 'pointer',
    transition: 'all 0.1s ease-out',
    _hover: {
      color: Colour.lightYellow,
    },
  }
  let notificationBox = {
    justifyContent: 'space-between',
    alignItems: 'start',
    borderBottom: '2px solid',
    borderColor: Colour.grey,
    padding: { base: '8px 16px', md: '8px 20px' },
    cursor: 'pointer',
    transition: 'all 0.1s ease-out',
    width: '100%',
    _hover: {
      backgroundColor: Colour.lightGrey,
      borderColor: Colour.turquoise,
    },
  }
  let statusBox = {
    backgroundColor: Colour.green,
    padding: '4px 8px',
    borderRadius: '4px',
    color: Colour.white,
    textAlign: 'center',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: '14px',
  }
  let dateText = {
    color: Colour.darkGrey,
    fontFamily: 'IBM Plex Sans',
    textAlign: 'right',
  }

  const { user } = useAppContext()
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const res = await axios.get(
          `${url}/api/notificationManager/getNotifications`,
          {
            headers: {
              receiverid: user.userID,
            },
          }
        )
        setNotifications(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchNotification()
  }, [user])

  // click notification to mark as read
  // const onClickNoti = async (notificationID) => {
  //   try {
  //     const

  return (
    <Popover>
      <PopoverTrigger>
        <BellIcon tabIndex="0" sx={iconButton} />
      </PopoverTrigger>
      <PopoverContent width="480px">
        <PopoverArrow />
        <PopoverBody>
          {notifications.map((item, index) => (
            <Flex
              sx={notificationBox}
              key={index}
              // onClick={onClickNoti(item.notificationID)}
            >
              <VStack alignItems="start">
                <Text sx={GlobalStyle.regularText}>{item.description}</Text>
                <Text sx={dateText}>
                  {new Date(item.datetime).toLocaleString()}
                </Text>
              </VStack>
              {item.status == 1 && (
                <Box sx={statusBox}>
                  <Text>New</Text>
                </Box>
              )}
            </Flex>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

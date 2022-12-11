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
import {
  notificationWidth,
  iconButton,
  notificationBox,
  notificationBox2,
  statusBox,
  dateText,
} from '/style-props/Notificationstyles'
import { BellIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { useAppContext } from '../context/UserContext'
import url from '../url'
import axios from 'axios'
import { useRouter } from 'next/router'
import { regularText } from '../style-props/Sharedstyles'

export default function Notification() {
  // router
  const router = useRouter()

  // context
  const { user } = useAppContext()

  // get notifications
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
  }, [router.query])

  // click notification to mark as read
  const onClickNotification = async (notification) => {
    try {
      const res = await axios.put(`${url}/api/notificationManager/markAsRead`, {
        notificationid: notification.notificationID,
      })
      console.log(res)
      // check type of notification to redirect to correct page
      if (
        notification.type === 'feedback' ||
        notification.type === 'response'
      ) {
        router.push(
          `/patient/${notification.patientID}/case/${notification.caseID}/feedback/${notification.pageID}`
        )
      } else if (notification.type === 'case') {
        router.push(
          `/patient/${notification.patientID}/case/${notification.caseID}`
        )
      } else if (notification.type === 'record') {
        router.push(
          `/patient/${notification.patientID}/case/${notification.caseID}/record`
        )
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Popover>
      <PopoverTrigger>
        <BellIcon tabIndex="0" sx={iconButton} />
      </PopoverTrigger>
      <PopoverContent sx={notificationWidth}>
        <PopoverArrow />
        <PopoverBody>
          {notifications.length === 0 && (
            <Flex sx={notificationBox2}>
              <Text sx={regularText}>No notifications</Text>
            </Flex>
          )}
          {notifications.map((item, index) => (
            <Flex
              sx={notificationBox}
              key={index}
              onClick={() => onClickNotification(item)}
            >
              <VStack alignItems="start">
                <Text sx={regularText}>{item.description}</Text>
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

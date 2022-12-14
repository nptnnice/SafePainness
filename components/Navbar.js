import {
  navbar,
  logo,
  menuFlex,
  signup,
  login,
  menuBox,
} from '/style-props/Navbarstyles'
import { regularText } from '/style-props/Sharedstyles'
import {
  Text,
  Flex,
  Image,
  Box,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from '@chakra-ui/react'
import LoginModal from './LoginModal'
import { useState, useEffect } from 'react'
import Notification from './Notification'
import { useRouter } from 'next/router'
import jwt_decode from 'jwt-decode'
import { useAppContext } from '../context/UserContext'

export default function Navbar() {
  // set login modal
  const [open, setOpen] = useState(false)

  // router
  const router = useRouter()
  const isHistoryTaking = router.pathname.search('/historytaking')

  // context
  const { user, setUser } = useAppContext()

  // handle click logo
  const onClickLogo = () => {
    if (user) {
      if (user.role == 'doctor') {
        router.push(`/doctor/${user.userID}`)
      } else if (user.role == 'patient') {
        router.push(`/patient/${user.userID}`)
      }
    } else {
      router.push('/')
      window.scrollTo({
        top: 0,
      })
    }
  }

  // navigate to profile page
  const onClickProfile = () => {
    if (user.role == 'doctor') {
      router.push(`/doctor/${user.userID}/profile`)
    } else if (user.role == 'patient') {
      router.push(`/patient/${user.userID}/profile`)
    }
  }

  // logout, clear user context and sessionStorage, and navigate to home page
  const onLogout = () => {
    setUser(null)
    sessionStorage.clear()
    router.push('/')
  }
  const onClickSignUp = () => {
    router.push('/create-account/select-role')
  }
  // set menu in popover
  const MenuAccount = () => {
    return (
      <>
        <Box sx={menuBox} onClick={() => onClickProfile()}>
          <Text sx={regularText}>Profile</Text>
        </Box>
        <Box sx={menuBox} onClick={() => onLogout()}>
          <Text sx={regularText}>Log out</Text>
        </Box>
      </>
    )
  }

  if (!user) {
    return (
      <Flex sx={navbar}>
        <Image sx={logo} src="/images/Logo.png" onClick={() => onClickLogo()} />

        {isHistoryTaking == -1 && (
          <Flex sx={menuFlex}>
            <Text sx={signup} onClick={() => onClickSignUp()}>
              Sign Up
            </Text>
            <Text sx={login} onClick={() => setOpen(true)}>
              Login
            </Text>
          </Flex>
        )}
        <LoginModal isOpen={open} onClose={setOpen} />
      </Flex>
    )
  } else {
    return (
      <Flex sx={navbar}>
        <Image sx={logo} src="/images/Logo.png" onClick={() => onClickLogo()} />

        <Flex sx={menuFlex}>
          <Notification />
          <Popover>
            <PopoverTrigger>
              <Avatar role="button" tabIndex="0" size="sm" src={user.image} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>
                <MenuAccount />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    )
  }
}

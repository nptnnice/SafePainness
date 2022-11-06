import {
  Text,
  Flex,
  Image,
  Box,
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import LoginModal from './LoginModal'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Notification from './Notification'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Navbar() {
  let navbar = {
    backgroundColor: Colour.lightBlack,
    height: '72px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: { base: '0 24px', md: '0 40px' },
    position: 'fixed',
    zIndex: '100000',
    top: 0,
  }
  let logo = {
    width: { base: '120px', md: '160px' },
    height: 'auto',
    cursor: 'pointer',
  }
  let menuFlex = {
    alignItems: 'center',
    gap: { base: '16px', md: '24px' },
  }
  let signup = {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: { base: '16px', md: '18px' },
    fontWeight: 'semi-bold',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    _hover: {
      color: Colour.turquoise,
    },
  }
  let login = {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: { base: '16px', md: '18px' },
    fontWeight: 'semi-bold',
    border: '3px solid #62C4C3',
    borderRadius: '32px',
    padding: { base: '4px 24px', md: '4px 40px' },
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    _hover: {
      color: '#62C4C3',
    },
  }
  let menuBox = {
    padding: '16px 8px',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    _hover: {
      backgroundColor: Colour.lightGrey,
    },
  }

  // set login modal
  const [open, setOpen] = useState(false)

  // set user info
  const [roleID, setRoleID] = useState(0)
  const [profile_img, setProfile_img] = useState('')
  const [userID, setUserID] = useState('')

  // router
  const router = useRouter()

  // check if user is logged in
  useEffect(() => {
    console.log('token', sessionStorage.getItem('token'))
    if (!sessionStorage.getItem('token')) {
      router.push('/')
    } else {
      setRoleID(sessionStorage.getItem('roleID'))
      setProfile_img(sessionStorage.getItem('image'))
      setUserID(sessionStorage.getItem('userID'))
    }
  }, [])

  const onClickProfile = () => {
    if (roleID == 1) {
      router.push(`/doctor/${userID}/profile`)
    } else if (roleID == 2) {
      router.push(`/patient/${userID}/profile`)
    }
  }

  const onLogout = () => {
    sessionStorage.clear()
    router.push('/')
  }

  const MenuAccount = () => {
    return (
      <>
        <Box sx={menuBox} onClick={onClickProfile}>
          <Text sx={GlobalStyle.regularText}>Profile</Text>
        </Box>
        <Box sx={menuBox} onClick={onLogout}>
          <Text sx={GlobalStyle.regularText}>Log out</Text>
        </Box>
      </>
    )
  }

  console.log('role', roleID)

  if (roleID == 0) {
    return (
      <Flex sx={navbar}>
        <Link href="/">
          <Image
            sx={logo}
            src="/images/Logo.png"
            onClick={() => {
              window.scrollTo({
                top: 0,
              })
            }}
          />
        </Link>

        <Flex sx={menuFlex}>
          <Text sx={signup}>Sign Up</Text>
          <Text sx={login} onClick={() => setOpen(true)}>
            Login
          </Text>
        </Flex>
        <LoginModal isOpen={open} onClose={setOpen} />
      </Flex>
    )
  } else {
    return (
      <Flex sx={navbar}>
        <Link href="/">
          <Image
            sx={logo}
            src="/images/Logo.png"
            onClick={() => {
              window.scrollTo({
                top: 0,
              })
            }}
          />
        </Link>

        <Flex sx={menuFlex}>
          <Notification />
          <Popover>
            <PopoverTrigger>
              <Avatar role="button" tabIndex="0" size="sm" src={profile_img} />
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

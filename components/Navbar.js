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
import GlobalStyle from '../Style'
import Colour from '../Colour'
import LoginModal from './LoginModal'
import { useState } from 'react'
import Notification from './Notification'
import { useRouter } from 'next/router'
import { useAppContext } from '../context/UserContext'

export default function Navbar() {
  let navbar = {
    backgroundColor: Colour.lightBlack,
    height: '72px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: { base: '0 24px', md: '0 40px' },
    position: 'fixed',
    zIndex: '1000',
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

  // router
  const router = useRouter()

  // context
  const { user, setUser } = useAppContext()

  // handle click logo
  const onClickLogo = () => {
    if (user) {
      if (user.roleID == 1) {
        router.push(`/doctor/${user.userID}`)
      } else if (user.roleID == 2) {
        router.push(`/patient/${user.userID}`)
      }
    } else {
      window.scrollTo({
        top: 0,
      })
    }
  }

  // navigate to profile page
  const onClickProfile = () => {
    if (user.roleID == 1) {
      router.push(`/doctor/${user.userID}/profile`)
    } else if (user.roleID == 2) {
      router.push(`/patient/${user.userID}/profile`)
    }
  }

  // logout, clear user context and sessionStorage, and navigate to home page
  const onLogout = () => {
    setUser(null)
    sessionStorage.clear()
    router.push('/')
  }

  // set menu in popover
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

  if (!user) {
    return (
      <Flex sx={navbar}>
        <Image sx={logo} src="/images/Logo.png" onClick={onClickLogo} />

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
        <Image sx={logo} src="/images/Logo.png" onClick={onClickLogo} />

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

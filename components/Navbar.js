import { Text, Flex, Image } from '@chakra-ui/react'
import Colour from '../Colour'
import LoginModal from './LoginModal'
import { useState } from 'react'
import Link from 'next/link'
import Notification from './Notification'

export default function Navbar() {
  const [open, setOpen] = useState(false)

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
        <Link href="/createDoctorAcc">
          <Text sx={signup}>Sign Up</Text>
        </Link>
        <Text sx={login} onClick={() => setOpen(true)}>
          Login
        </Text>
      </Flex>
      <LoginModal isOpen={open} onClose={() => setOpen(false)} />
    </Flex>
  )
}

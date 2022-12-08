import { useState } from 'react'
import { useAppContext } from '../context/UserContext'
import { useRouter } from 'next/router'
import LoginModal from './LoginModal'
import { Text, Box, Button } from '@chakra-ui/react'
import {
  headBox,
  headText,
  subText,
  startBtn,
} from '/style-props/Homepagestyles'

export default function Header() {
  // router
  const router = useRouter()

  // context
  const { user, setUser } = useAppContext()

  // set login modal
  const [open, setOpen] = useState(false)

  // handle click start tracking
  const onClickStart = () => {
    if (user) {
      if (user.role == 'doctor') {
        router.push(`/doctor/${user.userID}`)
      } else if (user.role == 'patient') {
        router.push(`/patient/${user.userID}`)
      }
    } else {
      setOpen(!open)
    }
  }

  return (
    <Box sx={headBox}>
      <Text sx={headText}>SafePainness</Text>
      <Text sx={subText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button sx={startBtn} onClick={() => onClickStart()}>
        Start tracking
      </Button>
      <LoginModal isOpen={open} onClose={() => onClickStart()} />
    </Box>
  )
}

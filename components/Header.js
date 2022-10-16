import { Text, Box, Button } from '@chakra-ui/react'
import Colour from '../Colour'
import GlobalStyle from '../Style'
import LoginModal from './LoginModal'
import { useState } from 'react'

export default () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)

  let headBox = {
    backgroundColor: Colour.lightBlue,
    width: '100%',
    textAlign: 'center',
    padding: '150px 0 100px',
  }
  let headText = {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: { base: '48px', md: '56px' },
    fontWeight: 'black',
  }
  let subText = {
    color: '#fff',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'medium',
    fontSize: { base: '18px', md: '20px' },
    width: { base: '80%', md: '60%' },
    margin: '16px auto 32px',
  }
  let btn = {
    backgroundColor: Colour.lightYellow,
    color: Colour.white,
    padding: '32px 40px',
    fontFamily: 'Lato',
    fontSize: { base: '20px', md: '22px' },
    fontWeight: 'bold',
    borderRadius: '40px',
    transition: 'all 0.2s ease',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
    _hover: {
      backgroundColor: Colour.darkYellow,
    },
  }

  return (
    <Box sx={headBox}>
      <Text sx={headText}>SafePainness</Text>
      <Text sx={subText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button sx={btn} onClick={handleClick}>
        Start tracking
      </Button>
      <LoginModal isOpen={open} onClose={handleClick} />
    </Box>
  )
}

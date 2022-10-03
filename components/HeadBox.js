import { Text, Box, Button } from '@chakra-ui/react'
import globalStyle from '../pages/style'

export default () => {
  let headBox = {
    backgroundColor: globalStyle.lightBlue,
    width: '100%',
    textAlign: 'center',
    padding: '150px 0 100px',
  }
  let headText = {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: '56px',
    fontWeight: 'black',
  }
  let subText = {
    color: '#fff',
    fontFamily: 'Lato',
    fontWeight: 'semi-bold',
    fontSize: '20px',
    width: '60%',
    margin: '16px auto 32px',
  }
  let btn = {
    backgroundColor: globalStyle.lightYellow,
    color: globalStyle.lightBlack,
    padding: '32px 40px',
    fontFamily: 'Lato',
    fontSize: '22px',
    fontWeight: 'bold',
    borderRadius: '40px',
    transition: 'all 0.2s ease',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
    _hover: {
      transform: 'scale(1.02)',
    },
  }

  return (
    <Box sx={headBox}>
      <Text sx={headText}>SafePainness</Text>
      <Text sx={subText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Button sx={btn}>Start tracking</Button>
    </Box>
  )
}

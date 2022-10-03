import { Text, Flex, Image } from '@chakra-ui/react'
import globalStyle from '../pages/style'

export default () => {
  let navbar = {
    backgroundColor: globalStyle.lightBlack,
    height: '72px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    position: 'fixed',
    zIndex: '100',
    top: 0,
  }
  let logo = {
    width: '160px',
    height: 'auto',
    cursor: 'pointer',
  }
  let menuFlex = {
    alignItems: 'center',
    gap: '24px',
  }
  let signup = {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: '18px',
    fontWeight: 'semi-bold',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    _hover: {
      color: globalStyle.turqoise,
    },
  }
  let login = {
    color: '#fff',
    fontFamily: 'Lato',
    fontSize: '18px',
    fontWeight: 'semi-bold',
    border: '3px solid #62C4C3',
    borderRadius: '32px',
    padding: '4px 40px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    _hover: {
      color: '#62C4C3',
    },
  }

  return (
    <Flex sx={navbar}>
      <Image
        sx={logo}
        src="/images/Logo.png"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }}
      />
      <Flex sx={menuFlex}>
        <Text sx={signup}>Sign Up</Text>
        <Text sx={login}>Login</Text>
      </Flex>
    </Flex>
  )
}

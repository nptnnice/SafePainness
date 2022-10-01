import { Text, Flex } from '@chakra-ui/react'

export default () => {
  let navbar = {
    backgroundColor: '#1E2836',
    height: '72px',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    position: 'fixed',
    zIndex: '100',
    top: 0,
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
      color: '#62C4C3',
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
      <Text sx={signup}>Logo</Text>
      <Flex sx={menuFlex}>
        <Text sx={signup}>Sign Up</Text>
        <Text sx={login}>Login</Text>
      </Flex>
    </Flex>
  )
}

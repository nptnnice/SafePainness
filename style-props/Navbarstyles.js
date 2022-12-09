import Colour from './SharedColour'

const navbar = {
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
const logo = {
  width: { base: '120px', md: '160px' },
  height: 'auto',
  cursor: 'pointer',
}
const menuFlex = {
  alignItems: 'center',
  gap: { base: '16px', md: '24px' },
}
const signup = {
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
const login = {
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
const menuBox = {
  padding: '16px 8px',
  cursor: 'pointer',
  transition: 'all 0.1s ease',
  _hover: {
    backgroundColor: Colour.lightGrey,
  },
}

export { navbar, logo, menuFlex, signup, login, menuBox }

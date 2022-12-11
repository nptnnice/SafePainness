import Colour from './SharedColour'

const notificationWidth = {
  width: '400px',
  height: 'auto',
  maxHeight: '500px',
  overflow: 'scroll',
}
const iconButton = {
  color: Colour.white,
  boxSize: '32px',
  cursor: 'pointer',
  transition: 'all 0.1s ease-out',
  _hover: {
    color: Colour.lightYellow,
  },
}
const notificationBox = {
  justifyContent: 'space-between',
  gap: '16px',
  alignItems: 'start',
  borderBottom: '2px solid',
  borderColor: Colour.grey,
  padding: { base: '8px 16px', md: '8px 20px' },
  cursor: 'pointer',
  transition: 'all 0.1s ease-out',
  width: '100%',
  _hover: {
    backgroundColor: Colour.lightGrey,
    borderColor: Colour.turquoise,
  },
}
const notificationBox2 = {
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '2px solid',
  borderColor: Colour.grey,
  padding: { base: '8px 16px', md: '8px 20px' },
  width: '100%',
}
const statusBox = {
  backgroundColor: Colour.green,
  padding: '4px 8px',
  borderRadius: '4px',
  color: Colour.white,
  textAlign: 'center',
  fontFamily: 'Lato',
  fontWeight: 'bold',
  fontSize: '14px',
}
const dateText = {
  color: Colour.darkGrey,
  fontFamily: 'IBM Plex Sans',
  textAlign: 'right',
}

export {
  notificationWidth,
  iconButton,
  notificationBox,
  notificationBox2,
  statusBox,
  dateText,
}

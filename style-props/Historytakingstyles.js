import Colour from './SharedColour'

const bottomLine = {
  borderBottom: '2px solid',
  borderBlockColor: Colour.grey,
  width: '100%',
}
const borderStyle = {
  borderColor: Colour.grey,
}
const checkboxStyle = {
  borderColor: Colour.grey,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '18px',
  color: Colour.black,
}
const painBox = {
  border: '2px solid',
  borderColor: Colour.grey,
  borderRadius: '16px',
  padding: '8px 16px',
  alignItems: 'center',
  gap: { base: '8px', md: '16px' },
  cursor: 'pointer',
  boxSizing: 'border-box',
  transition: 'all 0.1s ease',
  _hover: {
    backgroundColor: Colour.turquoise,
    borderColor: Colour.turquoise,
  },
}
const painBoxSelected = {
  ...painBox,
  backgroundColor: Colour.turquoise,
  borderColor: Colour.turquoise,
}
const imgSize = {
  width: { base: '64px', sm: '72px', md: '80px' },
}
const gridBox = {
  overflowY: 'scroll',
  height: { base: '240px', md: '280px' },
  padding: '8px',
}
const other = {
  marginTop: '24px',
  alignItems: 'center',
  gap: '8px',
}
const modalStyle = {
  maxWidth: '800px',
  height: '600px',
  width: '90%',
  borderRadius: '24px',
  padding: { base: '16px', md: '24px' },
}

export {
  bottomLine,
  borderStyle,
  checkboxStyle,
  painBox,
  painBoxSelected,
  imgSize,
  gridBox,
  other,
  modalStyle,
}

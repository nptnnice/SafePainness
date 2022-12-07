import Colour from './SharedColour'

// bg
const bgColor = {
  backgroundColor: Colour.lightGrey,
  width: '100%',
}

// layout
const layout = {
  width: '90%',
  margin: '0 auto',
  maxWidth: '900px',
  padding: { base: '48px 0 160px', md: '64px 0 240px' },
  position: 'relative',
}

// box
const contentBox = {
  width: '100%',
  borderRadius: '12px',
  backgroundColor: Colour.white,
  padding: { base: '24px 16px', md: '40px 20px' },
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}

// icon
const searchIconStyle = {
  boxSize: { base: '16px', md: '24px' },
  color: Colour.darkGrey,
  marginTop: { base: '0px', md: '8px' },
}
const addIconStyle = {
  boxSize: { base: '12px', md: '14px' },
}

// input
const inputStyle = {
  backgroundColor: Colour.white,
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'regular',
  fontSize: { base: '16px', md: '18px' },
  border: '1px solid',
  borderColor: Colour.grey,
  height: { base: '40px', md: '48px' },
}

// button
const btnGroup = {
  gap: { base: '8px', md: '16px' },
  justifyContent: 'center',
  alignItems: 'center',
}
const turquoiseBtn = {
  backgroundColor: Colour.turquoise,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 32px' },
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '18px' },
  fontWeight: 'bold',
  borderRadius: '12px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.lightBlue,
  },
}
const paginationBtn = {
  color: Colour.lightBlack,
  boxSize: { base: '12px', md: '14px' },
}

// text
const boldText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'bold',
  fontSize: { base: '16px', md: '18px' },
}
const mediumText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'medium',
  fontSize: { base: '16px', md: '18px' },
}

// hover
const hoverStyle = {
  cursor: 'pointer',
  transition: 'all 0.1s ease-in-out',
  _hover: {
    backgroundColor: Colour.lightGrey,
  },
}

// image
const profileImgSmall = {
  boxSize: { base: '56px', md: '64px' },
  borderRadius: '50%',
  objectFit: 'scale-down',
}

// flex
const flexStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: { base: '8px', md: '16px' },
  width: '100%',
}

export {
  bgColor,
  layout,
  contentBox,
  btnGroup,
  searchIconStyle,
  addIconStyle,
  inputStyle,
  turquoiseBtn,
  paginationBtn,
  boldText,
  mediumText,
  hoverStyle,
  profileImgSmall,
  flexStyle,
}

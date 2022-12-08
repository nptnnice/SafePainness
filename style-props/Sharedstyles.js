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
const btnPosition = {
  position: 'absolute',
  right: '0',
  bottom: { base: '80px', md: '120px' },
}
const submitBtnPosition = {
  justifyContent: 'flex-end',
  padding: { base: '12px 0px', md: '20px 0px 0px 0px' },
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
const blueBtn = {
  backgroundColor: Colour.lightBlue,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '18px', md: '20px' },
  fontWeight: 'bold',
  borderRadius: '48px',
  border: '3px solid',
  borderColor: Colour.lightBlue,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.darkBlue,
    borderColor: Colour.darkBlue,
  },
}
const whiteBtn = {
  color: Colour.lightBlue,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '18px', md: '20px' },
  fontWeight: 'bold',
  borderRadius: '48px',
  border: '3px solid',
  borderColor: Colour.lightBlue,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    borderColor: Colour.darkBlue,
    color: Colour.darkBlue,
  },
}
const editBtn = {
  backgroundColor: Colour.lightYellow,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '18px', md: '20px' },
  fontWeight: 'bold',
  borderRadius: '48px',
  border: '3px solid',
  borderColor: Colour.lightYellow,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.darkYellow,
    borderColor: Colour.darkYellow,
  },
}
const yellowBtn = {
  backgroundColor: Colour.lightYellow,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '18px' },
  fontWeight: 'bold',
  borderRadius: '12px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.darkYellow,
  },
}
const paginationBtn = {
  color: Colour.lightBlack,
  boxSize: { base: '12px', md: '14px' },
}

// text
const headingText = {
  fontFamily: 'Lato',
  fontSize: { base: '22px', md: '28px' },
  fontWeight: 'black',
  color: Colour.lightBlack,
}
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
const regularText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '400',
  fontSize: { base: '16px', md: '18px' },
}
const spanFlex = {
  flexDirection: { base: 'column', md: 'row' },
  columnGap: '8px',
}

// hover
const hoverStyle = {
  cursor: 'pointer',
  transition: 'all 0.1s ease-in-out',
  _hover: {
    backgroundColor: Colour.lightGrey,
  },
}
const hoverStyleSelected = {
  ...hoverStyle,
  backgroundColor: Colour.turquoise,
  _hover: {
    backgroundColor: Colour.turquoise,
  },
}

// image
const profileImg = {
  boxSize: { base: '120px', sm: '150px', md: '180px' },
  borderRadius: '50%',
  objectFit: 'scale-down',
}
const profileImgSmall = {
  boxSize: { base: '56px', md: '64px' },
  borderRadius: '50%',
  objectFit: 'scale-down',
}

// flex and grid
const flexStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: { base: '8px', md: '16px' },
  width: '100%',
}
const gridStyle = {
  gap: { base: '16px', md: '24px' },
  width: '100%',
}

// tab
const tabBox = {
  backgroundColor: Colour.white,
  border: '1px solid',
  borderColor: Colour.lightGrey,
  borderRadius: '0 24px 24px 24px',
  padding: { base: '24px 16px', md: '40px 20px' },
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}
const tabSelected = {
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '20px' },
  fontWeight: 'bold',
  color: Colour.lightBlack,
  borderRadius: '12px 12px 0 0',
  _selected: {
    backgroundColor: Colour.lightBlue,
    color: Colour.white,
  },
}

export {
  bgColor,
  layout,
  contentBox,
  searchIconStyle,
  addIconStyle,
  inputStyle,
  btnGroup,
  btnPosition,
  submitBtnPosition,
  turquoiseBtn,
  whiteBtn,
  blueBtn,
  editBtn,
  yellowBtn,
  paginationBtn,
  headingText,
  boldText,
  mediumText,
  regularText,
  spanFlex,
  hoverStyle,
  hoverStyleSelected,
  profileImg,
  profileImgSmall,
  flexStyle,
  gridStyle,
  tabBox,
  tabSelected,
}

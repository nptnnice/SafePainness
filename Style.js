import Colour from './Colour'

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

// Box
const formBox = {
  backgroundColor: Colour.white,
  width: '100%',
  padding: { base: '32px 16px 56px', md: '40px 80px 80px' },
  borderRadius: '12px',
  marginTop: '16px',
}
const infoBox = {
  width: '100%',
  borderRadius: '12px',
  backgroundColor: Colour.white,
  padding: { base: '24px 16px', md: '40px 20px' },
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}
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
const modalStyle = {
  width: '90%',
  borderRadius: '24px',
  padding: { base: '24px 0', md: '40px 20px' },
}
const recordBox = {
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '2px solid',
  borderColor: Colour.grey,
  borderRadius: '12px',
  padding: { base: '20px 16px', md: '24px 20px' },
  marginBottom: '12px',
  cursor: 'pointer',
  transition: 'all 0.1s ease-out',
  _hover: {
    borderColor: Colour.turquoise,
  },
}
const headBox = {
  backgroundColor: Colour.lightBlue,
  width: '100%',
  padding: { base: '120px 0 16px', md: '140px 0 24px' },
}

// text
const headText = {
  color: Colour.white,
  fontFamily: 'Lato',
  fontSize: { base: '24px', md: '32px' },
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
}
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
const labelText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'medium',
  fontSize: { base: '16px', md: '18px' },
}
const greyMediumText = {
  color: Colour.darkGrey,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'medium',
  fontSize: { base: '16px', md: '18px' },
}
const errorText = {
  color: Colour.red,
  fontFamily: 'IBM Plex Sans',
  // fontWeight: 'medium',
  fontSize: { base: '16px', md: '18px' },
}
const regularText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '400',
  fontSize: { base: '16px', md: '18px' },
}
const description = {
  color: Colour.lightBlue,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: { base: '16px', md: '18px' },
  marginBottom: '8px',
}
const spanFlex = {
  flexDirection: { base: 'column', md: 'row' },
  columnGap: '8px',
}
const spanFlex2 = {
  columnGap: '8px',
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
  fontSize: { base: '16px', md: '18px' },
  fontWeight: 'bold',
  borderRadius: '48px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.darkYellow,
  },
}
const cancelBtn = {
  backgroundColor: Colour.lightRed,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '18px' },
  fontWeight: 'bold',
  borderRadius: '48px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.red,
  },
}
const saveBtn = {
  backgroundColor: Colour.turquoise,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '18px' },
  fontWeight: 'bold',
  borderRadius: '48px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.lightBlue,
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
const fileBtn = {
  backgroundColor: Colour.lightGrey,
  color: Colour.black,
  padding: '24px 32px',
  fontFamily: 'Lato',
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '12px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}

// etc
const divider = {
  width: '100%',
  height: '1px',
  backgroundColor: Colour.grey,
}
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
const btnBox = {
  position: 'absolute',
  right: '0',
  bottom: { base: '80px', md: '120px' },
}
const btnGroup = {
  gap: { base: '8px', md: '16px' },
}
const sliderBox = {
  width: '96%',
  margin: '0 auto',
  marginTop: '16px',
  
}
const gridStyle = {
  gap: { base: '16px', md: '24px' },
  width: '100%',
}
const iconStyle = {
  boxSize: { base: '16px', md: '24px' },
  color: Colour.grey,
  cursor: 'pointer',
}

export default {
  bgColor,
  layout,
  infoBox,
  formBox,
  tabBox,
  tabSelected,
  modalStyle,
  recordBox,
  headBox,
  headText,
  headingText,
  boldText,
  labelText,
  greyMediumText,
  errorText,
  regularText,
  description,
  spanFlex,
  spanFlex2,
  inputStyle,
  blueBtn,
  whiteBtn,
  editBtn,
  cancelBtn,
  saveBtn,
  yellowBtn,
  turquoiseBtn,
  fileBtn,
  divider,
  profileImg,
  profileImgSmall,
  btnBox,
  btnGroup,
  sliderBox,
  gridStyle,
  iconStyle,
}

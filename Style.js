import Colour from './Colour'

// bg
const bgColor = {
  backgroundColor: Colour.lightGrey,
  width: '100%',
}

// layout
const layout = {
  width: '80%',
  margin: '0 auto',
  maxWidth: '900px',
  padding: '64px 0 240px',
  position: 'relative',
}

// Box
const formBox = {
  backgroundColor: Colour.white,
  width: '100%',
  padding: '40px 80px 80px',
  borderRadius: '12px',
  marginTop: '16px',
}
const infoBox = {
  width: '100%',
  borderRadius: '12px',
  backgroundColor: Colour.white,
  padding: '40px 24px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}
const tabBox = {
  backgroundColor: Colour.white,
  border: '1px solid',
  borderColor: Colour.lightGrey,
  borderRadius: '0 24px 24px 24px',
  padding: '40px 20px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}
const tabSelected = {
  fontFamily: 'Lato',
  fontSize: '20px',
  fontWeight: 'bold',
  color: Colour.lightBlack,
  borderRadius: '12px 12px 0 0',
  _selected: {
    backgroundColor: Colour.lightBlue,
    color: Colour.white,
  },
}
const modalStyle = {
  borderRadius: '24px',
  padding: '40px 20px',
}
const recordBox = {
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '2px solid',
  borderColor: Colour.grey,
  borderRadius: '12px',
  padding: '24px',
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
  padding: '140px 0 24px',
}

// text
const headText = {
  color: Colour.white,
  fontFamily: 'Lato',
  fontSize: '32px',
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
}
const headingText = {
  fontFamily: 'Lato',
  fontSize: '28px',
  fontWeight: 'bold',
  color: Colour.lightBlack,
}
const boldText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'Bold',
  fontSize: '18px',
}
const labelText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'medium',
  fontSize: '18px',
}
const greyMediumText = {
  color: Colour.darkGrey,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'medium',
  fontSize: '18px',
}
const normalText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '18px',
}
const description = {
  color: Colour.lightBlue,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '18px',
  marginBottom: '8px',
}

// input
const inputStyle = {
  backgroundColor: Colour.white,
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'regular',
  fontSize: '18px',
  border: '1px solid',
  borderColor: Colour.grey,
  height: '48px',
}

// button
const blueBtn = {
  backgroundColor: Colour.lightBlue,
  color: Colour.white,
  padding: '24px 48px',
  fontFamily: 'Lato',
  fontSize: '20px',
  fontWeight: 'bold',
  borderRadius: '48px',
  border: '4px solid',
  borderColor: Colour.lightBlue,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.turquoise,
    borderColor: Colour.turquoise,
  },
}
const whiteBtn = {
  color: Colour.lightBlue,
  padding: '24px 48px',
  fontFamily: 'Lato',
  fontSize: '20px',
  fontWeight: 'bold',
  borderRadius: '48px',
  border: '4px solid',
  borderColor: Colour.lightBlue,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    borderColor: Colour.turquoise,
    color: Colour.turquoise,
  },
}
const editBtn = {
  backgroundColor: Colour.lightYellow,
  color: Colour.white,
  padding: '24px 32px',
  fontFamily: 'Lato',
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '48px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.yellow,
  },
}
const cancelBtn = {
  backgroundColor: Colour.lightRed,
  color: Colour.white,
  padding: '24px 32px',
  fontFamily: 'Lato',
  fontSize: '18px',
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
  padding: '24px 32px',
  fontFamily: 'Lato',
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '48px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.lightBlue,
  },
}
const yellowBtn = {
  backgroundColor: Colour.lightYellow,
  color: Colour.black,
  padding: '24px 32px',
  fontFamily: 'Lato',
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '12px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.yellow,
  },
}
const turquoiseBtn = {
  backgroundColor: Colour.turquoise,
  color: Colour.white,
  padding: '24px 32px',
  fontFamily: 'Lato',
  fontSize: '18px',
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
  width: '160px',
  height: '160px',
  borderRadius: '50%',
  objectFit: 'scale-down',
}
let btnBox = {
  position: 'absolute',
  right: '0',
  bottom: '120px',
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
  normalText,
  description,
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
  btnBox,
}

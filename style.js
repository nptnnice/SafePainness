import Colour from './Colour'

const layout = {
  width: '80%',
  margin: '80px auto 0',
  maxWidth: '900px',
  paddingBottom: '120px',
}
const headingText = {
  fontFamily: 'Lato',
  fontSize: '36px',
  fontWeight: 'bold',
  color: Colour.lightBlack,
}
const boldText = {
  color: Colour.black,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'Bold',
  fontSize: '18px',
}
const normalText = {
  color: Colour.black,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '18px',
}

const normalTextNoColor = {
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '18px',
}

const bgColor = {
  backgroundColor: Colour.lightGrey,
  width: '100%',
}
const formBox = {
  backgroundColor: Colour.white,
  width: '100%',
  padding: '40px 80px 80px',
  borderRadius: '12px',
  marginTop: '16px',
}
const description = {
  color: Colour.lightBlue,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '18px',
  marginBottom: '8px',
}
const inputStyle = {
  color: Colour.black,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '400',
  fontSize: '18px',
  border: '2px solid',
  borderColor: Colour.grey,
  height: '48px',
}
const blueBtn = {
  backgroundColor: Colour.lightBlue,
  color: Colour.white,
  padding: '30px 40px',
  fontFamily: 'Lato',
  fontSize: '22px',
  fontWeight: 'bold',
  borderRadius: '40px',
  border: '4px solid',
  borderColor: Colour.lightBlue,
  boxSizing: 'border-box',
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.turqoise,
    borderColor: Colour.turqoise,
  },
}
const whiteBtn = {
  color: Colour.lightBlue,
  padding: '30px 40px',
  fontFamily: 'Lato',
  fontSize: '22px',
  fontWeight: 'bold',
  borderRadius: '40px',
  border: '4px solid',
  borderColor: Colour.lightBlue,
  boxSizing: 'border-box',
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    borderColor: Colour.turqoise,
    color: Colour.turqoise,
  },
}
const blueBtn2 = {
  backgroundColor: Colour.lightBlue,
  color: Colour.white,
  padding: '28px 56px',
  fontFamily: 'Lato',
  fontSize: '20px',
  fontWeight: 'bold',
  borderRadius: '40px',
  boxSizing: 'border-box',
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.turqoise,
  },
}
const modalStyle = {
  borderRadius: '24px',
  padding: '40px 20px',
}

export default {
  layout,
  headingText,
  boldText,
  normalText,
  bgColor,
  formBox,
  description,
  inputStyle,
  blueBtn,
  whiteBtn,
  blueBtn2,
  modalStyle,
  normalTextNoColor
}

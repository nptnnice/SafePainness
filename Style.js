import Colour from './Colour'

const layout = {
  width: '80%',
  margin: '0 auto',
  maxWidth: '900px',
  padding: '100px 0 120px',
}
const headingText = {
  fontFamily: 'Lato',
  fontSize: '36px',
  fontWeight: 'bold',
  color: Colour.lightBlack,
}
const boldText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'Bold',
  fontSize: '18px',
}
const normalText = {
  color: Colour.lightBlack,
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
const tabBox = {
  backgroundColor: Colour.white,
  width: '100%',
  padding: '50px 80px',
  borderRadius: '12px',
  marginTop: '16px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}
const description = {
  color: Colour.lightBlue,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '18px',
  marginBottom: '8px',
}
const inputStyle = {
  backgroundColor: Colour.white,
  color: Colour.lightBlack,
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
    backgroundColor: Colour.turquoise,
    borderColor: Colour.turquoise,
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
    borderColor: Colour.turquoise,
    color: Colour.turquoise,
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
    backgroundColor: Colour.turquoise,
  },
}
// const turqBtn = {
//   backgroundColor: Colour.turquoise,
//   color: Colour.white,
//   padding: '24px 24px',
//   fontFamily: 'Lato',
//   fontSize: '22px',
//   fontWeight: 'bold',
//   borderRadius: '12px',
//   border: '4px solid',
//   borderColor: Colour.turquoise,
//   boxSizing: 'border-box',
//   transition: 'all 0.2s ease',
//   filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
//   _hover: {
//     backgroundColor: Colour.lightBlue,
//     borderColor: Colour.lightBlue,
//   },
// }
const modalStyle = {
  borderRadius: '24px',
  padding: '40px 20px',
}
const greyNormalText = {
  color: Colour.darkGrey,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '18px',
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

export default {
  layout,
  headingText,
  boldText,
  normalText,
  bgColor,
  formBox,
  tabBox,
  description,
  inputStyle,
  blueBtn,
  whiteBtn,
  blueBtn2,
  // turqBtn,
  modalStyle,
  normalTextNoColor,
  greyNormalText,
  yellowBtn,
  turquoiseBtn,
  recordBox,
}

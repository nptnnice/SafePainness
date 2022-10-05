import Colour from './Colour'

const layout = {
  width: '80%',
  margin: '100px auto',
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
  fontSize: '20px',
}
const normalText = {
  color: Colour.black,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '20px',
}
const bgColor = {
  backgroundColor: Colour.lightGrey,
  width: '100%',
  // height: '100%',
}
const formBox = {
  backgroundColor: Colour.white,
  width: '100%',
  padding: '40px 40px 80px',
  borderRadius: '12px',
  marginTop: '16px',
}
const description = {
  color: Colour.lightBlue,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: '16px',
}
const inputStyle = {
  color: Colour.black,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '400',
  fontSize: '16px',
  border: '2px solid',
  borderColor: Colour.grey,
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
}

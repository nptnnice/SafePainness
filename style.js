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
  fontWeight: 'bold',
  fontSize: '20px',
}
const normalText = {
  color: Colour.black,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'semi-bold',
  fontSize: '20px',
}

export default {
  layout,
  headingText,
  boldText,
  normalText,
}

import colour from './colour'

const layout = {
  width: '80%',
  margin: '100px auto',
}
const headingText = {
  fontFamily: 'Lato',
  fontSize: '36px',
  fontWeight: 'bold',
  color: colour.lightBlack,
}
const boldText = {
  color: colour.black,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'bold',
  fontSize: '20px',
}
const normalText = {
  color: colour.black,
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

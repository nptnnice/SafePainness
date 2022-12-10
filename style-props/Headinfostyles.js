import Colour from './SharedColour'

const layout = {
  width: '90%',
  margin: '0 auto',
  maxWidth: '900px',
  justifyContent: 'space-between',
  alignItems: { base: 'start', md: 'end' },
  flexDirection: { base: 'column', md: 'row' },
}
const idText = {
  color: Colour.white,
  fontFamily: 'Lato',
  fontSize: { base: '24px', md: '32px' },
  fontWeight: 'bold',
}
const caseText = {
  color: Colour.white,
  fontFamily: 'Lato',
  fontSize: { base: '18px', md: '22px' },
  fontWeight: 'medium',
}
const doctorText = {
  color: Colour.cream,
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '20px' },
  cursor: 'pointer',
  transition: 'all 0.1s ease',
  _hover: {
    color: Colour.lightYellow,
  },
}

export { layout, idText, caseText, doctorText }

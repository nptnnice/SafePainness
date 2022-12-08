import Colour from './SharedColour'

const headingText = {
  fontFamily: 'Lato',
  fontSize: { base: '22px', md: '28px' },
  fontWeight: 'black',
  color: Colour.lightBlack,
  textAlign: 'center',
  marginBottom: '24px',
}
const textStyle = {
  fontFamily: 'Lato',
  fontSize: { base: '22px', md: '28px' },
  fontWeight: 'black',
  textTransform: 'uppercase',
  color: Colour.lightBlack,
}
const flexStyle = {
  gap: '50px',
  flexDirection: { base: 'column', md: 'row' },
}
const infoBox = {
  width: '100%',
  borderRadius: '12px',
  backgroundColor: Colour.white,
  padding: { base: '24px 16px', md: '40px 20px' },
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  _hover: {
    transform: 'scale(1.05)',
    backgroundColor: Colour.turquoise,
  },
}

export { headingText, textStyle, flexStyle, infoBox }

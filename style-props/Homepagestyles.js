import Colour from './SharedColour'

const headBox = {
  backgroundColor: Colour.lightBlue,
  width: '100%',
  textAlign: 'center',
  padding: '150px 0 100px',
}
const headText = {
  color: '#fff',
  fontFamily: 'Lato',
  fontSize: { base: '48px', md: '56px' },
  fontWeight: 'black',
}
const subText = {
  color: '#fff',
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'medium',
  fontSize: { base: '18px', md: '20px' },
  width: { base: '80%', md: '60%' },
  margin: '16px auto 32px',
}
const startBtn = {
  backgroundColor: Colour.lightYellow,
  color: Colour.white,
  padding: '32px 40px',
  fontFamily: 'Lato',
  fontSize: { base: '20px', md: '22px' },
  fontWeight: 'bold',
  borderRadius: '40px',
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.darkYellow,
  },
}

export { headBox, headText, subText, startBtn }

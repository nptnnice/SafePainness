import Colour from './SharedColour'

const section = {
  margin: { base: '32px 0 16px', md: '48px 0 20px' },
  justifyContent: 'space-between',
  alignItems: 'flex-end',
}
const onTrack = {
  color: Colour.lightYellow,
  fontFamily: 'Lato',
  fontWeight: 'Bold',
  fontSize: { base: '22px', md: '26px' },
}
const stopTrack = {
  color: Colour.turquoise,
  fontFamily: 'Lato',
  fontWeight: 'Bold',
  fontSize: { base: '22px', md: '26px' },
}
const caseBox = {
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '2px solid',
  borderColor: Colour.grey,
  borderRadius: '12px',
  padding: { base: '8px 16px', md: '8px 20px' },
  marginBottom: '12px',
  cursor: 'pointer',
  transition: 'all 0.1s ease-out',
  width: '100%',
  _hover: {
    borderColor: Colour.turquoise,
  },
}
const doctornameText = {
  color: Colour.lightBlack,
  textAlign: 'right',
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'medium',
  fontSize: { base: '14px', md: '16px' },
  display: { base: 'none', md: 'block' },
}

export { section, onTrack, stopTrack, caseBox, doctornameText }

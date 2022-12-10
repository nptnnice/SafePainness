import Colour from './SharedColour'

const layout = {
  width: '90%',
  margin: '0 auto',
  maxWidth: '900px',
  padding: { base: '48px 0 160px', md: '56px 0 240px' },
  position: 'relative',
}
const layout2 = {
  width: '90%',
  margin: '0 auto',
  maxWidth: '900px',
  padding: { base: '120px 0 160px', md: '200px 0 240px' },
  position: 'relative',
}
const diagnosisFlex = {
  alignItems: { base: 'flex-start', md: 'flex-start' },
  gap: '16px',
  width: '100%',
  flexDirection: { base: 'column', md: 'row' },
  marginBottom: '24px',
}
const section = {
  marginTop: { base: '24px', md: '16px' },
  position: 'relative',
  width: '100%',
  borderRadius: '12px',
  backgroundColor: Colour.white,
  padding: { base: '24px 16px', md: '40px 20px' },
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}
const btnPosition = {
  position: 'absolute',
  right: '0',
  top: { base: '-16px', md: '32px' },
}
const btnStyle = {
  color: Colour.lightRed,
  backgroundColor: Colour.white,
  padding: { base: '16px 24px', md: '24px 32px' },
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '18px' },
  fontWeight: 'bold',
  borderRadius: '12px',
  border: '3px solid',
  borderColor: Colour.lightRed,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    borderColor: Colour.red,
    color: Colour.red,
  },
}
const takeHistoryBtn = {
  backgroundColor: Colour.lightBlue,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '18px' },
  fontWeight: 'bold',
  borderRadius: '12px',
  border: '3px solid',
  borderColor: Colour.lightBlue,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.darkBlue,
    borderColor: Colour.darkBlue,
  },
}
const summaryGrid = {
  columnGap: { base: '10px', md: '24px' },
  rowGap: '8px',
  marginBottom: '32px',
}
const flexStyle = {
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',
}

export {
  layout,
  layout2,
  diagnosisFlex,
  section,
  btnPosition,
  btnStyle,
  takeHistoryBtn,
  summaryGrid,
  flexStyle,
}

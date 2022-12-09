import Colour from './SharedColour'

const section = {
  width: '90%',
  margin: '0 auto',
  maxWidth: '900px',
  padding: '80px 0',
}
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
const headTextBlack = {
  color: Colour.lightBlack,
  fontFamily: 'Lato',
  fontSize: { base: '24px', md: '32px' },
  fontWeight: 'black',
  textAlign: 'center',
  textTransform: 'uppercase',
}
const featureImg = {
  width: { base: '120px', sm: '140px', md: '160px' },
  marginBottom: '24px',
}
const flexStyle = {
  width: '90%',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '40px auto 0',
  columnGap: '80px',
  flexDirection: { base: 'column', md: 'row' },
}
const flexStyle2 = {
  width: '90%',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '40px auto 0',
  columnGap: '80px',
  flexDirection: { base: 'column-reverse', md: 'row' },
}
const team = {
  color: Colour.lightBlack,
  fontFamily: 'Lato',
  fontSize: { base: '24px', md: '32px' },
  fontWeight: 'black',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginBottom: '40px',
}
const teamImg = {
  boxSize: { base: '120px', md: '140px' },
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '16px',
}
const teamSection = {
  textAlign: 'center',
  backgroundColor: Colour.lightGrey,
  padding: '80px 0',
  width: '90%',
  margin: '0 auto',
  maxWidth: '1400px',
}

export {
  section,
  headBox,
  headText,
  subText,
  startBtn,
  headTextBlack,
  featureImg,
  flexStyle,
  flexStyle2,
  team,
  teamImg,
  teamSection,
}

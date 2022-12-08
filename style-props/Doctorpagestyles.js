import Colour from './SharedColour'

const modalStyle = {
  maxWidth: '900px',
  maxHeight: '700px',
  width: '90%',
  borderRadius: '24px',
  padding: { base: '24px 0px', md: '32px 16px' },
  backgroundColor: Colour.lightGrey,
}
const tableBox = {
  width: '100%',
  borderRadius: '12px',
  backgroundColor: Colour.white,
  padding: { base: '24px 16px', md: '40px 20px' },
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  overflowY: 'scroll',
  height: { base: '320px', md: '400px' },
}

export { modalStyle, tableBox }

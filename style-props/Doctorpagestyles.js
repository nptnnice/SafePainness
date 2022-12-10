import Colour from './SharedColour'

const tableBox = {
  width: '100%',
  borderRadius: '12px',
  backgroundColor: Colour.white,
  padding: { base: '24px 16px', md: '40px 20px' },
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  overflowY: 'scroll',
  height: { base: '320px', md: '400px' },
}
const doctorInfoLayout = {
  gap: '32px',
  flexDirection: { base: 'column', md: 'row' },
}
const doctorInfoModal = {
  maxWidth: '700px',
  maxHeight: '400px',
  width: '90%',
  borderRadius: '24px',
  padding: { base: '16px', md: '24px' },
}

export { tableBox, doctorInfoLayout, doctorInfoModal }

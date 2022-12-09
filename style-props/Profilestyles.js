import Colour from './SharedColour'

const flexStyle = {
  gap: '24px',
  flexDirection: { base: 'column', md: 'row' },
  width: '100%',
}
const flexStyle2 = {
  gap: { base: '16px', md: '24px' },
  width: '100%',
}
const fileBtn = {
  boxSize: { base: '120px', sm: '150px', md: '180px' },
  borderRadius: '50%',
  border: '2px dashed',
  borderColor: Colour.grey,
  cursor: 'pointer',
  fontFamily: 'Lato',
  fontSize: '18px',
  color: Colour.grey,
  position: 'relative',
  boxSizing: 'border-box',
}
const upload = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
  textAlign: 'center',
}

const oldfileBtn = {
  opacity: '0',
  position: 'absolute',
  zIndex: '-1',
}

const removeBtn = {
  position: 'absolute',
  top: '0',
  right: { base: '40px', sm: '0' },
  boxSize: '16px',
  cursor: 'pointer',
}

export { flexStyle, flexStyle2, fileBtn, oldfileBtn, upload, removeBtn }

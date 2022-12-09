import Colour from './SharedColour'

// bg
const bgColor = {
  backgroundColor: Colour.lightGrey,
  width: '100%',
}

// layout
const layout = {
  width: '90%',
  margin: '0 auto',
  maxWidth: '900px',
  padding: { base: '48px 0 160px', md: '64px 0 240px' },
  position: 'relative',
}

// box
const contentBox = {
  width: '100%',
  borderRadius: '12px',
  backgroundColor: Colour.white,
  padding: { base: '24px 16px', md: '40px 20px' },
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}
const recordBox = {
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '2px solid',
  borderColor: Colour.grey,
  borderRadius: '12px',
  padding: { base: '20px 16px', md: '24px 20px' },
  marginBottom: '12px',
  cursor: 'pointer',
  transition: 'all 0.1s ease-out',
  _hover: {
    borderColor: Colour.turquoise,
  },
}
const formBox = {
  backgroundColor: Colour.white,
  width: '100%',
  padding: { base: '32px 16px 56px', md: '40px 80px 80px' },
  borderRadius: '12px',
  marginTop: '16px',
}
const headBox = {
  backgroundColor: Colour.lightBlue,
  width: '100%',
  padding: { base: '120px 0 16px', md: '140px 0 24px' },
}

// icon
const searchIconStyle = {
  boxSize: { base: '16px', md: '24px' },
  color: Colour.darkGrey,
  marginTop: { base: '0px', md: '8px' },
}
const addIconStyle = {
  boxSize: { base: '12px', md: '14px' },
}
const iconInput = {
  color: Colour.lightBlack,
  cursor: 'pointer',
  marginTop: { base: '2px', md: '8px' },
}

// input
const inputStyle = {
  backgroundColor: Colour.white,
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'regular',
  fontSize: { base: '16px', md: '18px' },
  border: '1px solid',
  borderColor: Colour.grey,
  height: { base: '40px', md: '48px' },
}
const bigInput = {
  ...inputStyle,
  height: '160px',
}

// button
const btnGroup = {
  gap: { base: '8px', md: '16px' },
  justifyContent: 'center',
  alignItems: 'center',
}
const btnPosition = {
  position: 'absolute',
  right: '0',
  bottom: { base: '80px', md: '120px' },
}
const submitBtnPosition = {
  justifyContent: 'flex-end',
  padding: { base: '12px 0px', md: '20px 0px 0px 0px' },
}
const turquoiseBtn = {
  backgroundColor: Colour.turquoise,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 32px' },
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '18px' },
  fontWeight: 'bold',
  borderRadius: '12px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.lightBlue,
  },
}
const blueBtn = {
  backgroundColor: Colour.lightBlue,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '18px', md: '20px' },
  fontWeight: 'bold',
  borderRadius: '48px',
  border: '3px solid',
  borderColor: Colour.lightBlue,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.darkBlue,
    borderColor: Colour.darkBlue,
  },
}
const whiteBtn = {
  color: Colour.lightBlue,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '18px', md: '20px' },
  fontWeight: 'bold',
  borderRadius: '48px',
  border: '3px solid',
  borderColor: Colour.lightBlue,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    borderColor: Colour.darkBlue,
    color: Colour.darkBlue,
  },
}
const editBtn = {
  backgroundColor: Colour.lightYellow,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '18px', md: '20px' },
  fontWeight: 'bold',
  borderRadius: '48px',
  border: '3px solid',
  borderColor: Colour.lightYellow,
  transition: 'all 0.2s ease',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.darkYellow,
    borderColor: Colour.darkYellow,
  },
}
const yellowBtn = {
  backgroundColor: Colour.lightYellow,
  color: Colour.white,
  padding: { base: '16px 24px', md: '24px 40px' },
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '18px' },
  fontWeight: 'bold',
  borderRadius: '12px',
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  _hover: {
    backgroundColor: Colour.darkYellow,
  },
}
const paginationBtn = {
  color: Colour.lightBlack,
  boxSize: { base: '12px', md: '14px' },
}
const removeBtn = {
  boxSize: '12px',
  position: 'absolute',
  right: '-8px',
  top: '-8px',
  cursor: 'pointer',
  color: Colour.lightBlack,
}

// text
const headText = {
  color: Colour.white,
  fontFamily: 'Lato',
  fontSize: { base: '24px', md: '32px' },
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
}
const headingText = {
  fontFamily: 'Lato',
  fontSize: { base: '22px', md: '28px' },
  fontWeight: 'black',
  color: Colour.lightBlack,
}
const boldText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'bold',
  fontSize: { base: '16px', md: '18px' },
}
const mediumText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'medium',
  fontSize: { base: '16px', md: '18px' },
}
const regularText = {
  color: Colour.lightBlack,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '400',
  fontSize: { base: '16px', md: '18px' },
}
const spanFlex = {
  flexDirection: { base: 'column', md: 'row' },
  columnGap: '8px',
}
const spanFlex2 = {
  columnGap: '8px',
}
const greyMediumText = {
  color: Colour.darkGrey,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'medium',
  fontSize: { base: '16px', md: '18px' },
}
const description = {
  ...greyMediumText,
  marginBottom: '8px',
}
const errorText = {
  color: Colour.red,
  fontFamily: 'IBM Plex Sans',
  fontSize: { base: '14px', md: '16px' },
}
const clickText = {
  color: Colour.lightBlue,
  fontFamily: 'IBM Plex Sans',
  fontWeight: '500',
  fontSize: { base: '16px', md: '18px' },
  cursor: 'pointer',
  _hover: {
    textDecoration: 'underline',
  },
}
const blueText = {
  color: Colour.darkBlue,
  fontFamily: 'IBM Plex Sans',
  fontWeight: 'bold',
  fontSize: { base: '16px', md: '18px' },
}

// hover
const hoverStyle = {
  cursor: 'pointer',
  transition: 'all 0.1s ease-in-out',
  _hover: {
    backgroundColor: Colour.lightGrey,
  },
}
const hoverStyleSelected = {
  ...hoverStyle,
  backgroundColor: Colour.turquoise,
  _hover: {
    backgroundColor: Colour.turquoise,
  },
}

// image
const profileImg = {
  boxSize: { base: '120px', sm: '150px', md: '180px' },
  borderRadius: '50%',
  objectFit: 'scale-down',
}
const profileImgSmall = {
  boxSize: { base: '56px', md: '64px' },
  borderRadius: '50%',
  objectFit: 'scale-down',
}
const squareImg = {
  borderRadius: '12px',
  boxSize: '190px',
  objectFit: 'cover',
}

// flex and grid
const flexStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: { base: '8px', md: '16px' },
  width: '100%',
}
const gridStyle = {
  gap: { base: '16px', md: '24px' },
  width: '100%',
}
const autoGrid = {
  gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 190px))',
  gap: '16px',
  width: '100%',
}
const breadcrumbFlex = {
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '16px',
}

// tab
const tabBox = {
  backgroundColor: Colour.white,
  border: '1px solid',
  borderColor: Colour.lightGrey,
  borderRadius: '0 24px 24px 24px',
  padding: { base: '24px 16px', md: '40px 20px' },
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
}
const tabSelected = {
  fontFamily: 'Lato',
  fontSize: { base: '16px', md: '20px' },
  fontWeight: 'bold',
  color: Colour.lightBlack,
  borderRadius: '12px 12px 0 0',
  _selected: {
    backgroundColor: Colour.lightBlue,
    color: Colour.white,
  },
}

// divider
const divider = {
  width: '100%',
  height: '1px',
  backgroundColor: Colour.grey,
}

// modal
const commonModal = {
  width: '90%',
  borderRadius: '24px',
  padding: { base: '24px 0', md: '40px 20px' },
}
const bigModal = {
  maxWidth: '900px',
  maxHeight: '700px',
  width: '90%',
  borderRadius: '24px',
  padding: { base: '24px 0px', md: '32px 16px' },
  backgroundColor: Colour.lightGrey,
}

// slider
const sliderBox = {
  width: '96%',
  margin: '0 auto',
  marginTop: '16px',
}

// progress
const progressStyle = {
  width: '60%',
  margin: '24px auto',
}

export {
  bgColor,
  layout,
  contentBox,
  recordBox,
  formBox,
  headBox,
  searchIconStyle,
  addIconStyle,
  iconInput,
  inputStyle,
  bigInput,
  btnGroup,
  btnPosition,
  submitBtnPosition,
  turquoiseBtn,
  whiteBtn,
  blueBtn,
  editBtn,
  yellowBtn,
  paginationBtn,
  removeBtn,
  headText,
  headingText,
  boldText,
  mediumText,
  regularText,
  spanFlex,
  spanFlex2,
  greyMediumText,
  description,
  errorText,
  clickText,
  blueText,
  hoverStyle,
  hoverStyleSelected,
  profileImg,
  profileImgSmall,
  squareImg,
  flexStyle,
  gridStyle,
  autoGrid,
  breadcrumbFlex,
  tabBox,
  tabSelected,
  divider,
  commonModal,
  bigModal,
  sliderBox,
  progressStyle,
}

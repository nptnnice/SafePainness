import { Box, Text, VStack, Image } from '@chakra-ui/react'
import GlobalStyle from '../../../../../../Style'
import Colour from '../../../../../../Colour'
import FormProgress from '/components/FormProgress'

export default function History3() {
  let textStyle = {
    fontFamily: 'Lato',
    fontSize: { base: '20px', md: '28px' },
    fontWeight: 'black',
    color: Colour.lightBlack,
    textAlign: 'center',
  }
  let linkText = {
    ...GlobalStyle.description,
    textDecoration: 'underline',
    cursor: 'pointer',
    _hover: {
      color: Colour.turquoise,
    },
  }

  const onClickHomePage = () => {
    window.location.href = '/'
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <FormProgress progress={100} />
      <VStack sx={GlobalStyle.layout}>
        <VStack sx={GlobalStyle.formBox} spacing={8}>
          <Image src="/images/checked.png" sx={GlobalStyle.profileImg} />
          <Text sx={textStyle}>Your response has been submitted</Text>
          <Text sx={linkText} onClick={onClickHomePage}>
            Go to homepage
          </Text>
        </VStack>
      </VStack>
    </Box>
  )
}

import {
  Box,
  Text,
  Image,
  Flex,
  Spacer,
  VStack,
  HStack,
  Button,
  chakra,
  Avatar,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

export default () => {
  //   let flexStyle = {
  //     marginTop: '30px',
  //     alignItems: 'center',
  //   }
  let imageStyle = {
    borderRadius: '50%',
    boxSize: '200px',
    objectFit: 'cover',
  }
  let hStackStyle = {
    justifyContent: 'start',
    gap: '40px',
  }
  let vStackStyle = {
    alignItems: 'left',
    gap: '4px',
  }
  return (
    <HStack sx={GlobalStyle.tabBox} spacing={10} align="left">
      <Avatar sx={imageStyle} src="/images/nice.JPG" />
      <VStack sx={vStackStyle}>
        <HStack sx={hStackStyle}>
          <Text sx={GlobalStyle.normalText}>
            <chakra.span sx={GlobalStyle.boldText}>First Name:</chakra.span>{' '}
            Pakamon
          </Text>
          <Text sx={GlobalStyle.normalText}>
            <chakra.span sx={GlobalStyle.boldText}>Last Name:</chakra.span> Mumu
          </Text>
        </HStack>
        <HStack sx={hStackStyle}>
          <Text sx={GlobalStyle.normalText}>
            <chakra.span sx={GlobalStyle.boldText}>Age:</chakra.span> 22
          </Text>
          <Text sx={GlobalStyle.normalText}>
            <chakra.span sx={GlobalStyle.boldText}>Blood group:</chakra.span> B
          </Text>
          <Text sx={GlobalStyle.normalText}>
            <chakra.span sx={GlobalStyle.boldText}>Sex:</chakra.span> Men
          </Text>
        </HStack>
        <VStack sx={vStackStyle}>
          <Text sx={GlobalStyle.normalText}>
            <chakra.span sx={GlobalStyle.boldText}>
              Medical conditions:
            </chakra.span>{' '}
            Test
          </Text>
          <Text sx={GlobalStyle.normalText}>
            <chakra.span sx={GlobalStyle.boldText}>Allgery:</chakra.span> Get
            bothered by grammatical errors
          </Text>
        </VStack>
        <HStack sx={hStackStyle}>
          <Text sx={GlobalStyle.normalText}>
            <chakra.span sx={GlobalStyle.boldText}>Contact:</chakra.span>{' '}
            098-xxx-xxxx
          </Text>
          <Text sx={GlobalStyle.normalText}>
            <chakra.span sx={GlobalStyle.boldText}>Email:</chakra.span>{' '}
            Pokemon@gmail.com
          </Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

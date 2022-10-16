import { Box, Text, Flex, VStack, Avatar } from '@chakra-ui/react'
import GlobalStyle from '../Style'

export default () => {
  let layout = {
    gap: '32px',
    flexDirection: { base: 'column', sm: 'column', md: 'row' },
  }
  let infoFlex = {
    justifyContent: 'start',
    gap: { base: '24px', sm: '32px', md: '40px' },
  }
  return (
    <Box sx={GlobalStyle.infoBox}>
      <Flex sx={layout}>
        <Avatar sx={GlobalStyle.profileImg} src="/images/nice.JPG" />
        <VStack spacing={4} align="left">
          <Flex sx={infoFlex}>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>First Name: </Text>
              <Text sx={GlobalStyle.regularText}>Pakamon</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Last Name: </Text>
              <Text sx={GlobalStyle.regularText}>Mumu</Text>
            </Flex>
          </Flex>

          <Flex sx={infoFlex}>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Age: </Text>
              <Text sx={GlobalStyle.regularText}>Pakamon</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Blood Group: </Text>
              <Text sx={GlobalStyle.regularText}>B</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Sex: </Text>
              <Text sx={GlobalStyle.regularText}>Female</Text>
            </Flex>
          </Flex>

          <Flex sx={GlobalStyle.spanFlex}>
            <Text sx={GlobalStyle.labelText}>Medical Conditions: </Text>
            <Text sx={GlobalStyle.regularText}>Test</Text>
          </Flex>

          <Flex sx={GlobalStyle.spanFlex}>
            <Text sx={GlobalStyle.labelText}>Allergy: </Text>
            <Text sx={GlobalStyle.regularText}>
              Get botherd by grammatical errors
            </Text>
          </Flex>

          <Flex sx={infoFlex}>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Contact: </Text>
              <Text sx={GlobalStyle.regularText}>099-XXX-XXXX</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Email: </Text>
              <Text sx={GlobalStyle.regularText}>Pokemon@gmail.com</Text>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  )
}

import {
  Box,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import HeadForm from '../components/HeadForm'
import BodySelector from '../components/BodySelector'

export default () => {
  let bottomLine = {
    borderBottom: '2px solid',
    borderBlockColor: Colour.grey,
    width: '100%',
  }
  let radioStyle = {
    borderColor: Colour.grey,
  }
  let radioText = {
    color: Colour.black,
    fontFamily: 'IBM Plex Sans',
    fontWeight: '400',
    fontSize: '20px',
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadForm />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>
          Part 1: Symptoms and Associated Symptoms
        </Text>
        <VStack spacing={8} align="left" sx={GlobalStyle.formBox}>
          <FormControl sx={bottomLine} isRequired>
            <FormLabel sx={GlobalStyle.normalText}>
              Where is the pain? (The maximal site of the pain)
            </FormLabel>
            <BodySelector />
          </FormControl>
          <FormControl>
            <FormLabel>
              <Text sx={GlobalStyle.normalText}>When did the pain start?</Text>
              <Text sx={GlobalStyle.description}>
                (e.g. after an accident, disease, treatment, etc.)
              </Text>
            </FormLabel>
            <Input sx={GlobalStyle.inputStyle} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>
              Was the pain sudden or gradual?
            </FormLabel>
            <RadioGroup>
              <Stack direction="row" gap={16}>
                <Radio value="sudden" sx={radioStyle}>
                  <Text sx={radioText}>Sudden</Text>
                </Radio>
                <Radio value="gradual" sx={radioStyle}>
                  <Text sx={radioText}>Gradual</Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel sx={GlobalStyle.normalText}>
              How does the pain feel like?
            </FormLabel>
          </FormControl>
        </VStack>
      </Box>
    </Box>
  )
}

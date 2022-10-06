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
  Button,
  HStack,
} from '@chakra-ui/react'
import GlobalStyle from '../../Style'
import Colour from '../../Colour'
import HeadForm from '../../components/HeadForm'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default () => {
  let borderStyle = {
    borderColor: Colour.grey,
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadForm progress={40} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>Part 2: Time</Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="left" sx={GlobalStyle.formBox}>
            {/* Question 7 */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.normalText}>
                7. How long have you have this pain?
              </FormLabel>
              <Input sx={GlobalStyle.inputStyle} />
            </FormControl>

            {/* Question 8 */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.normalText}>
                8. Is the pain constant or intermittent?
              </FormLabel>
              <RadioGroup>
                <Stack direction="row" gap={16}>
                  <Radio sx={borderStyle} value="constant">
                    <Text sx={GlobalStyle.normalText}>Constant</Text>
                  </Radio>
                  <Radio sx={borderStyle} value="intermittent">
                    <Text sx={GlobalStyle.normalText}>intermittent</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            {/* Question 9 */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.normalText}>
                9. What time of the day that the pain is worse?
              </FormLabel>
              <Text sx={GlobalStyle.description}>
                (e.g. in the morning, afternoon, after work, at night, during
                work, etc)
              </Text>
              <Input sx={GlobalStyle.inputStyle} />
            </FormControl>
          </VStack>

          <HStack spacing={8}>
            <Link href="/historytaking/part1">
              <Button leftIcon={<ArrowBackIcon />} sx={GlobalStyle.whiteBtn}>
                Back
              </Button>
            </Link>
            <Link href="/historytaking/part3">
              <Button rightIcon={<ArrowForwardIcon />} sx={GlobalStyle.blueBtn}>
                Next
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}

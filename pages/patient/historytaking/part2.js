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
  ButtonGroup,
} from '@chakra-ui/react'
import GlobalStyle from '../../../Style'
import Colour from '../../../Colour'
import FormProgress from '../../../components/FormProgress'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default () => {
  let borderStyle = {
    borderColor: Colour.grey,
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <FormProgress progress={40} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>Part 2: Time</Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="start" sx={GlobalStyle.formBox}>
            {/* ==================== Question 7 ==================== */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.labelText}>
                7. How long have you have this pain?
              </FormLabel>
              <Input sx={GlobalStyle.inputStyle} />
            </FormControl>

            {/* ==================== Question 8 ==================== */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.labelText}>
                8. Is the pain constant or intermittent?
              </FormLabel>
              <RadioGroup>
                <Stack direction="row" gap={16}>
                  <Radio sx={borderStyle} value="constant">
                    <Text sx={GlobalStyle.labelText}>Constant</Text>
                  </Radio>
                  <Radio sx={borderStyle} value="intermittent">
                    <Text sx={GlobalStyle.labelText}>intermittent</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            {/* ==================== Question 9 ==================== */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.labelText}>
                9. What time of the day that the pain is worse?
              </FormLabel>
              <Input sx={GlobalStyle.inputStyle} />
              <FormHelperText sx={GlobalStyle.greyMediumText}>
                e.g. in the morning, afternoon, after work, at night, during
                work, etc
              </FormHelperText>
            </FormControl>
          </VStack>

          <ButtonGroup sx={GlobalStyle.btnGroup}>
            <Link href="./part1">
              <Button leftIcon={<ArrowBackIcon />} sx={GlobalStyle.whiteBtn}>
                Back
              </Button>
            </Link>
            <Link href="./part3">
              <Button rightIcon={<ArrowForwardIcon />} sx={GlobalStyle.blueBtn}>
                Next
              </Button>
            </Link>
          </ButtonGroup>
        </VStack>
      </Box>
    </Box>
  )
}

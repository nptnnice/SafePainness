import {
  Box,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import GlobalStyle from '../../../../Style'
import FormProgress from '../../../../components/FormProgress'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  const onClickBack = () => {
    router.push('./part2')
  }
  const onClickNext = () => {
    // router.push('/patient/historytaking/part4')
  }
  return (
    <Box sx={GlobalStyle.bgColor}>
      <FormProgress progress={60} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>Part 3: Exacerbating Factors</Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="start" sx={GlobalStyle.formBox}>
            {/* ==================== Question 10 ==================== */}
            <FormControl>
              <FormLabel sx={GlobalStyle.labelText}>
                10. What makes the pain worse?
              </FormLabel>
              <Input sx={GlobalStyle.inputStyle} />
            </FormControl>

            {/* ==================== Question 11 ==================== */}
            <FormControl>
              <FormLabel sx={GlobalStyle.labelText}>
                11. How did you relieve your pain?
              </FormLabel>
              <Input sx={GlobalStyle.inputStyle} />
            </FormControl>
          </VStack>

          <ButtonGroup sx={GlobalStyle.btnGroup}>
            <Button
              leftIcon={<ArrowBackIcon />}
              sx={GlobalStyle.whiteBtn}
              onClick={onClickBack}
            >
              Back
            </Button>
            <Button rightIcon={<ArrowForwardIcon />} sx={GlobalStyle.blueBtn}>
              Next
            </Button>
          </ButtonGroup>
        </VStack>
      </Box>
    </Box>
  )
}

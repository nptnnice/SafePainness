import {
  Box,
  Text,
  Flex,
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
import GlobalStyle from '../../../../../../Style'
import Colour from '../../../../../../Colour'
import FormProgress from '/components/FormProgress'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'

export default function History2() {
  let borderStyle = {
    borderColor: Colour.grey,
  }

  // router
  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

  // toast
  const toast = useToast()

  // handle error
  const [error, setError] = useState(false)

  // set form
  const [form, setForm] = useState({
    painPeriod: '',
    painFrequency: '',
    worseTime: '',
    experience: '',
  })

  // handle change
  // pain period
  const getPainPeriod = (e) => {
    setForm({ ...form, painPeriod: e.target.value })
  }
  // pain occur
  const getPainFrequency = (e) => {
    setForm({ ...form, painFrequency: e })
  }
  // worse time
  const getWorseTime = (e) => {
    setForm({ ...form, worseTime: e.target.value })
  }
  // experience
  const getExperience = (e) => {
    setForm({ ...form, experience: e })
  }

  // save local storage
  const saveLocalStorage = () => {
    localStorage.setItem('historytaking-2', JSON.stringify(form))
  }

  const onClickBack = () => {
    saveLocalStorage()
    router.push(`/patient/${patientID}/case/${caseID}/historytaking/part1`)
  }

  const onClickNext = () => {
    if (
      form.painPeriod &&
      form.painFrequency &&
      form.worseTime &&
      form.experience
    ) {
      setError(false)
      saveLocalStorage()
      router.push(`/patient/${patientID}/case/${caseID}/historytaking/part3`)
    } else {
      setError(true)
      toast({
        title: 'Please fill in all the required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  // handle saved data
  useEffect(() => {
    if (localStorage.getItem('historytaking-2')) {
      setForm(JSON.parse(localStorage.getItem('historytaking-2')))
    }
  }, [])

  return (
    <Box sx={GlobalStyle.bgColor}>
      <FormProgress progress={40} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>Part 2: Time</Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="start" sx={GlobalStyle.formBox}>
            {/* ==================== Question 8 ==================== */}
            <FormControl isRequired isInvalid={error && !form.painPeriod}>
              <FormLabel sx={GlobalStyle.labelText}>
                8. How long have you have this pain?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getPainPeriod}
                value={form.painPeriod}
              />
            </FormControl>

            {/* ==================== Question 9 ==================== */}
            <FormControl isRequired isInvalid={error && !form.painFrequency}>
              <FormLabel sx={GlobalStyle.labelText}>
                9. Is the pain constant or intermittent?
              </FormLabel>
              <RadioGroup
                onChange={getPainFrequency}
                value={form.painFrequency}
              >
                <Stack direction="row" gap={16}>
                  <Radio sx={borderStyle} value="Constant">
                    <Text sx={GlobalStyle.labelText}>Constant</Text>
                  </Radio>
                  <Radio sx={borderStyle} value="Intermittent">
                    <Text sx={GlobalStyle.labelText}>Intermittent</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            {/* ==================== Question 10 ==================== */}
            <FormControl isRequired isInvalid={error && !form.worseTime}>
              <FormLabel sx={GlobalStyle.labelText}>
                10. What time of the day that the pain is worse?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getWorseTime}
                value={form.worseTime}
              />
              <FormHelperText sx={GlobalStyle.greyMediumText}>
                e.g. in the morning, afternoon, after work, at night, during
                work, etc
              </FormHelperText>
            </FormControl>

            {/* ==================== Question 11 ==================== */}
            <FormControl isRequired isInvalid={error && !form.experience}>
              <FormLabel sx={GlobalStyle.labelText}>
                11. Have you ever had this pain before?
              </FormLabel>
              <RadioGroup onChange={getExperience} value={form.experience}>
                <Stack direction="row" gap={16}>
                  <Radio sx={borderStyle} value="Yes">
                    <Text sx={GlobalStyle.labelText}>Yes</Text>
                  </Radio>
                  <Radio sx={borderStyle} value="No">
                    <Text sx={GlobalStyle.labelText}>No</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
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

            <Button
              rightIcon={<ArrowForwardIcon />}
              sx={GlobalStyle.blueBtn}
              onClick={onClickNext}
            >
              Next
            </Button>
          </ButtonGroup>
        </VStack>
      </Box>
    </Box>
  )
}

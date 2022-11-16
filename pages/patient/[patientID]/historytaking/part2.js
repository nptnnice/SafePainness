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
import GlobalStyle from '../../../../Style'
import Colour from '../../../../Colour'
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

  // toast
  const toast = useToast()

  // handle error
  const [error, setError] = useState(false)

  // set form
  const [painPeriod, setPainPeriod] = useState('')
  const [painOccur, setPainOccur] = useState('')
  const [worseTime, setWorseTime] = useState('')
  const [experience, setExperience] = useState('')

  // handle change
  // pain period
  const getPainPeriod = (e) => {
    setPainPeriod(e.target.value)
  }
  // pain occur
  const getPainOccur = (e) => {
    setPainOccur(e)
  }
  // worse time
  const getWorseTime = (e) => {
    setWorseTime(e.target.value)
  }
  // experience
  const getExperience = (e) => {
    setExperience(e)
  }

  // save local storage
  const saveLocalStorage = () => {
    localStorage.setItem('painPeriod', painPeriod)
    localStorage.setItem('painOccur', painOccur)
    localStorage.setItem('worseTime', worseTime)
    localStorage.setItem('experience', experience)
  }

  // handle saved data
  useEffect(() => {
    if (localStorage.getItem('painPeriod') !== null) {
      setPainPeriod(localStorage.getItem('painPeriod'))
    }
    if (localStorage.getItem('painOccur') !== null) {
      setPainOccur(localStorage.getItem('painOccur'))
    }
    if (localStorage.getItem('worseTime') !== null) {
      setWorseTime(localStorage.getItem('worseTime'))
    }
    if (localStorage.getItem('experience') !== null) {
      setExperience(localStorage.getItem('experience'))
    }
  }, [])

  const onClickBack = () => {
    if (painPeriod && painOccur && worseTime && experience) {
      setError(false)
      saveLocalStorage()
      router.push(`/patient/${patientID}/historytaking/part1`)
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

  const onClickNext = () => {
    if (painPeriod && painOccur && worseTime && experience) {
      setError(false)
      saveLocalStorage()
      router.push(`/patient/${patientID}/historytaking/part3`)
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

  return (
    <Box sx={GlobalStyle.bgColor}>
      <FormProgress progress={40} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>Part 2: Time</Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="start" sx={GlobalStyle.formBox}>
            {/* ==================== Question 8 ==================== */}
            <FormControl isRequired isInvalid={error && !painPeriod}>
              <FormLabel sx={GlobalStyle.labelText}>
                8. How long have you have this pain?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getPainPeriod}
                value={painPeriod}
              />
            </FormControl>

            {/* ==================== Question 9 ==================== */}
            <FormControl isRequired isInvalid={error && !painOccur}>
              <FormLabel sx={GlobalStyle.labelText}>
                9. Is the pain constant or intermittent?
              </FormLabel>
              <RadioGroup onChange={getPainOccur} value={painOccur}>
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

            {/* ==================== Question 10 ==================== */}
            <FormControl isRequired isInvalid={error && !worseTime}>
              <FormLabel sx={GlobalStyle.labelText}>
                10. What time of the day that the pain is worse?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getWorseTime}
                value={worseTime}
              />
              <FormHelperText sx={GlobalStyle.greyMediumText}>
                e.g. in the morning, afternoon, after work, at night, during
                work, etc
              </FormHelperText>
            </FormControl>

            {/* ==================== Question 11 ==================== */}
            <FormControl isRequired isInvalid={error && !experience}>
              <FormLabel sx={GlobalStyle.labelText}>
                11. Have you ever had this pain before?
              </FormLabel>
              <RadioGroup onChange={getExperience} value={experience}>
                <Stack direction="row" gap={16}>
                  <Radio sx={borderStyle} value="yes">
                    <Text sx={GlobalStyle.labelText}>Yes</Text>
                  </Radio>
                  <Radio sx={borderStyle} value="no">
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

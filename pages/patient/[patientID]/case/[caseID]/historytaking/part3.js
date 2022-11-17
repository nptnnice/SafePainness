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
import GlobalStyle from '../../../../../../Style'
import FormProgress from '/components/FormProgress'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'

export default function History3() {
  // router
  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

  // toast
  const toast = useToast()

  // set form
  const [exacerbate, setExacerbate] = useState('')
  const [relieve, setRelieve] = useState('')

  // handle error
  const [error, setError] = useState(false)

  // handle change
  // exacerbate
  const getExacerbate = (e) => {
    setExacerbate(e.target.value)
  }
  // relieve
  const getRelieve = (e) => {
    setRelieve(e.target.value)
  }

  // save local storage
  const saveLocalStorage = () => {
    localStorage.setItem('exacerbate', exacerbate)
    localStorage.setItem('relieve', relieve)
  }

  // handle saved data
  useEffect(() => {
    if (localStorage.getItem('exacerbate')) {
      setExacerbate(localStorage.getItem('exacerbate'))
    }
    if (localStorage.getItem('relieve')) {
      setRelieve(localStorage.getItem('relieve'))
    }
  }, [])

  const onClickBack = () => {
    if (exacerbate && relieve) {
      setError(false)
      saveLocalStorage()
      router.push(`/patient/${patientID}/case/${caseID}/historytaking/part2`)
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
    if (exacerbate && relieve) {
      setError(false)
      saveLocalStorage()
      router.push(`/patient/${patientID}/case/${caseID}/historytaking/summary`)
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
      <FormProgress progress={60} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>Part 3: Exacerbating Factors</Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="start" sx={GlobalStyle.formBox}>
            {/* ==================== Question 12 ==================== */}
            <FormControl isRequired isInvalid={error && !exacerbate}>
              <FormLabel sx={GlobalStyle.labelText}>
                12. What makes the pain worse?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getExacerbate}
                value={exacerbate}
              />
            </FormControl>

            {/* ==================== Question 13 ==================== */}
            <FormControl isRequired isInvalid={error && !relieve}>
              <FormLabel sx={GlobalStyle.labelText}>
                13. How did you relieve your pain?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getRelieve}
                value={relieve}
              />
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

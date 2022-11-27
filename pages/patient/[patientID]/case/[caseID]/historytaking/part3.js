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
import axios from 'axios'

export default function History3() {
  // router
  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

  // toast
  const toast = useToast()

  // set form
  const [form, setForm] = useState({
    exacerbate: '',
    relieve: '',
  })

  // handle error
  const [error, setError] = useState(false)

  // handle change
  // exacerbate
  const getExacerbate = (e) => {
    setForm({ ...form, exacerbate: e.target.value })
  }
  // relieve
  const getRelieve = (e) => {
    setForm({ ...form, relieve: e.target.value })
  }

  // save local storage
  const saveLocalStorage = () => {
    localStorage.setItem('historytaking-3', JSON.stringify(form))
  }

  // handle saved data
  useEffect(() => {
    if (localStorage.getItem('historytaking-3')) {
      setForm(JSON.parse(localStorage.getItem('historytaking-3')))
    }
  }, [])

  const onClickBack = () => {
    saveLocalStorage()
    router.push(`/patient/${patientID}/case/${caseID}/historytaking/part2`)
  }

  const removeOther = (part1) => {
    if (part1.otherCharacteristic) {
      part1.characteristic.push(part1.otherCharacteristic)
    }
    if (part1.otherSymptom) {
      part1.associatedSymp.push(part1.otherSymptom)
    }
    //remove from array
    delete part1.otherCharacteristic
    delete part1.otherSymptom
  }

  const sendToDB = async (data) => {
    try {
      const res = await axios.post(`/api/caseManager/updateHistoryTaking`, data)
      console.log('res', res)
    } catch (err) {
      console.log('err', err)
      toast({
        title: 'Error',
        description: 'Something went wrong',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
    localStorage.removeItem('historytaking-1')
    localStorage.removeItem('historytaking-2')
    localStorage.removeItem('historytaking-3')
  }

  const onClickNext = () => {
    if (form.exacerbate && form.relieve) {
      setError(false)
      saveLocalStorage()
      // get all saved data
      const part1 = JSON.parse(localStorage.getItem('historytaking-1'))
      const part2 = JSON.parse(localStorage.getItem('historytaking-2'))
      const part3 = JSON.parse(localStorage.getItem('historytaking-3'))
      removeOther(part1)
      const data = {
        ...part1,
        ...part2,
        ...part3,
        caseID: caseID,
      }
      console.log(data)
      sendToDB(data)
      setTimeout(() => {
        router.push(
          `/patient/${patientID}/case/${caseID}/historytaking/summary`
        )
      }, 3000)
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
            <FormControl isRequired isInvalid={error && !form.exacerbate}>
              <FormLabel sx={GlobalStyle.labelText}>
                12. What makes the pain worse?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getExacerbate}
                value={form.exacerbate}
              />
            </FormControl>

            {/* ==================== Question 13 ==================== */}
            <FormControl isRequired isInvalid={error && !form.relieve}>
              <FormLabel sx={GlobalStyle.labelText}>
                13. How did you relieve your pain?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getRelieve}
                value={form.relieve}
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
            <Button sx={GlobalStyle.blueBtn} onClick={onClickNext}>
              Submit
            </Button>
          </ButtonGroup>
        </VStack>
      </Box>
    </Box>
  )
}

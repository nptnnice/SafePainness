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
  Flex,
  SimpleGrid,
} from '@chakra-ui/react'
import GlobalStyle from '../../../../../../Style'
import FormProgress from '/components/FormProgress'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'

export default function History3() {
  let gridStyle = {
    columnGap: { base: '10px', md: '24px' },
    rowGap: '8px',
  }

  // router
  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

  // toast
  const toast = useToast()

  // set form
  const [form, setForm] = useState({
    site: [],
    onset: '',
    onsetType: '',
    characteristic: [],
    otherCharacteristic: '',
    radiation: '',
    associatedSymp: [],
    otherSymptom: '',
    painScaleNow: '',
    painScalePast: '',
    painPeriod: '',
    painFrequency: '',
    worseTime: '',
    experience: '',
    exacerbate: '',
    relieve: '',
  })

  useEffect(() => {
    const part1 = JSON.parse(localStorage.getItem('historytaking-1'))
    const part2 = JSON.parse(localStorage.getItem('historytaking-2'))
    const part3 = JSON.parse(localStorage.getItem('historytaking-3'))
    if (part1 && part2 && part3) {
      const temp = Object.assign(part1, part2)
      const data = Object.assign(temp, part3)
      setForm(data)
    }
  }, [])

  const onClickBack = () => {
    router.push(`/patient/${patientID}/case/${caseID}/historytaking/part3`)
  }

  const onSubmit = async () => {
    if (form.otherCharacteristic) {
      form.characteristic.push(form.otherCharacteristic)
    }
    if (form.otherSymptom) {
      form.associatedSymp.push(form.otherSymptom)
    }
    const data = {
      site: form.site,
      onset: form.onset,
      onsetType: form.onsetType,
      characteristic: form.characteristic,
      radiation: form.radiation,
      associatedSymp: form.associatedSymp,
      painScaleNow: form.painScaleNow,
      painScalePast: form.painScalePast,
      painPeriod: form.painPeriod,
      painFrequency: form.painFrequency,
      worseTime: form.worseTime,
      experience: form.experience,
      exacerbate: form.exacerbate,
      relieve: form.relieve,
      caseID: caseID,
    }
    console.log('data', data)
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
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <FormProgress progress={100} />
      <VStack sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.headingText}>YOUR RECORD</Text>
        <VStack spacing={16}>
          <SimpleGrid
            sx={Object.assign(GlobalStyle.formBox, gridStyle)}
            columns={{ base: 1, md: 2 }}
          >
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Site: </Text>
              {form.site.map((item, index) => (
                <Text sx={GlobalStyle.regularText} key={index}>
                  {item}
                  {index !== form.site.length - 1 ? ', ' : ''}
                </Text>
              ))}
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Onset: </Text>
              <Text sx={GlobalStyle.regularText}>{form.onset}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Onset type: </Text>
              <Text sx={GlobalStyle.regularText}>{form.onsetType}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Characteristic: </Text>
              {form.characteristic.map((item, index) => (
                <Text sx={GlobalStyle.regularText} key={index}>
                  {item}
                  {index !== form.characteristic.length - 1 ? ', ' : ''}
                </Text>
              ))}
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Other characteristic: </Text>
              <Text sx={GlobalStyle.regularText}>
                {form.otherCharacteristic}
              </Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Radiation: </Text>
              <Text sx={GlobalStyle.regularText}>{form.radiation}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Associated symptom: </Text>
              {form.associatedSymp.map((item, index) => (
                <Text sx={GlobalStyle.regularText} key={index}>
                  {item}
                  {index !== form.associatedSymp.length - 1 ? ', ' : ''}
                </Text>
              ))}
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Other symptom: </Text>
              <Text sx={GlobalStyle.regularText}>{form.otherSymptom}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Pain severity (now): </Text>
              <Text sx={GlobalStyle.regularText}>{form.painScaleNow}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>
                Pain severity (past 7 days):{' '}
              </Text>
              <Text sx={GlobalStyle.regularText}>{form.painScalePast}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Pain period: </Text>
              <Text sx={GlobalStyle.regularText}>{form.painPeriod}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Pain frequency: </Text>
              <Text sx={GlobalStyle.regularText}>{form.painFrequency}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Worse time: </Text>
              <Text sx={GlobalStyle.regularText}>{form.worseTime}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Experience: </Text>
              <Text sx={GlobalStyle.regularText}>{form.experience}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Exacerbating factors: </Text>
              <Text sx={GlobalStyle.regularText}>{form.exacerbate}</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>How you relieve: </Text>
              <Text sx={GlobalStyle.regularText}>{form.relieve}</Text>
            </Flex>
          </SimpleGrid>

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
              onClick={onSubmit}
            >
              Submit
            </Button>
          </ButtonGroup>
        </VStack>
      </VStack>
    </Box>
  )
}

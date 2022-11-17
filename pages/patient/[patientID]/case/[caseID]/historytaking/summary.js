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

export default function History3() {
  // router
  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

  // toast
  const toast = useToast()

  const onClickBack = () => {
    router.push(`/patient/${patientID}/case/${caseID}/historytaking/part3`)
  }

  const onClickSubmit = async () => {}

  let gridStyle = {
    columnGap: { base: '10px', md: '24px' },
    rowGap: '8px',
  }

  const [exacerbate, setExacerbate] = useState('')

  useEffect(() => {
    if (localStorage.getItem('exacerbate')) {
      setExacerbate(localStorage.getItem('exacerbate'))
    }
  }, [])

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
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Onset: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Onset type: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Pain characteristic: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Radiation: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Associated symptom: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Pain severity (now): </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>
                Pain severity (past 7 days):{' '}
              </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Pain period: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Pain frequency: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Worse time: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Experience: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>Exacerbating factors: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
            </Flex>
            <Flex sx={GlobalStyle.spanFlex}>
              <Text sx={GlobalStyle.labelText}>How you relieve: </Text>
              <Text sx={GlobalStyle.regularText}>Test</Text>
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
              onClick={onClickSubmit}
            >
              Submit
            </Button>
          </ButtonGroup>
        </VStack>
      </VStack>
    </Box>
  )
}

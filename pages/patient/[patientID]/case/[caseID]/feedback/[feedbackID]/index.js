import {
  Text,
  Box,
  Button,
  Textarea,
  FormLabel,
  FormControl,
  VStack,
  flattenTokens,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import GlobalStyle from '/Style'
import HeadInfo from '/components/HeadInfo'
import Responses from '/components/Responses'

export default function Feedback(props) {

  const [form, setForm] = useState({
    message: '',
  })
  const [error, setError] = useState(false)

  const getResponses = (e) => {
    setForm({...form, message: e.target.value})
  }

  const submitResponse = async () => {
    if (form.message != '') {
      try {
        const result1 = await axios.post('/api/responseManager/addResponse', { 
          message: form.message,
          })
        console.log(result1)
      } catch (err) {
        console.log(err)
      }
      setTimeout(() => {
      window.location.reload()
      }, 1000)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <Box sx={GlobalStyle.bgColor}>
        <HeadInfo
          name="Patient ID"
          patientID="PT000001"
          caseID="2022-000001"
          caseName="Grammar addict"
          doctor="Alan Smith"
        />
        <VStack sx={GlobalStyle.layout} align="start" spacing={8}>
          <Text sx={GlobalStyle.headingText}>Feedback#1</Text>
          <Box sx={GlobalStyle.infoBox}>
            <Responses getAllResponse={props.getAllResponse} />
          </Box>
          <Box sx={GlobalStyle.infoBox}>
            <FormControl>
              <FormLabel sx={GlobalStyle.labelText}>
                Response to your doctor
              </FormLabel>
              <Textarea sx={GlobalStyle.inputStyle} onChange={getResponses} />
            </FormControl>
          </Box>
          {/* ==== Button ==== */}
          <Box sx={GlobalStyle.btnBox}>
            <Button sx={GlobalStyle.blueBtn} onClick={submitResponse}>Submit</Button>
          </Box>
        </VStack>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  const result = await axios.get('http://localhost:3000/api/responseManager/getAllResponses')
  return {
    props: {
      getAllResponse: result.data,
    },
  }
}


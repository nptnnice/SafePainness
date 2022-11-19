import {
  Text,
  Box,
  Button,
  Textarea,
  FormLabel,
  FormControl,
  VStack,
  useToast,
  flattenTokens,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import GlobalStyle from '/Style'
import HeadInfo from '/components/HeadInfo'
import Responses from '/components/Responses'
import { useAppContext } from '/context/UserContext'

export default function Feedback(props) {

  const { user } = useAppContext()
  //console.log(user.userID)
  console.log("This is " + user)

  console.log(props.getAllResponse)

  console.log("This is props "+props)
  console.log(props.getAllResponse[1].feedbackID)
  // let today = new Date()
  // let month = today.getMonth() + 1
  // let year = today.getFullYear()
  // let date = today.getDate()

  // let todayDate = year + '-' + month + '-' + date

  // let hours = today.getHours()
  // let minutes = today.getMinutes()
  // let seconds = today.getSeconds()

  const toast = useToast()


  // const de = new Date()
  // console.log(typeof(de))
  // console.log(de)
  // const datetime = new Date().toISOString().replace('T', ' ').replace('Z', ' ');
  // const datetime1 = new Date().toUTCString().replace('T', ' ').replace('Z', ' ');

  // console.log("ISO" + ' '+datetime)
  // console.log("UTC" + ' '+datetime1)
  // console.log(typeof(datetime))


  const [form, setForm] = useState({
    message: '',
  })
  const [error, setError] = useState(false)

  const getResponses = (e) => {
    setForm({...form, message: e.target.value})
  }

  //console.log(sessionStorage.getItem('userID'))
  

  const submitResponse = async () => {
    if (form.message != '') {
      try {
        const result1 = await axios.post('/api/responseManager/addResponse', { 
          message: form.message,
          senderID: user.userID,
        })
          //senderID: sessionStorage.getItem('userID'),
        
        console.log(result1)
      } catch (err) {
        console.log(err)
      }
      setTimeout(() => {
      window.location.reload()
      }, 1500)
      toast({
        title: 'Response submitted',
        description: 'Your response has been submitted',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
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
          <Text sx={GlobalStyle.headingText}>Feedback #{}</Text>  
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


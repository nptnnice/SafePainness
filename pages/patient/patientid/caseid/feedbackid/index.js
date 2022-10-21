import {
  Text,
  Box,
  Flex,
  Button,
  Textarea,
  FormLabel,
  FormControl,
  VStack,
  Divider,
} from '@chakra-ui/react'
import HeadCenter from '../../../../../components/Headcenter';
import GlobalStyle from '../../../../../Style'
import HeadInfo from '../../../../../components/HeadInfo';
import Responses from '../../../../../components/Responses';

export default function Feedback() {

 
  //create map function to display all the feedbacks
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
        <VStack sx={GlobalStyle.layout} align='start' spacing={8}>
          <Text sx={GlobalStyle.headingText}>Feedback#1</Text>
          <Box sx={GlobalStyle.infoBox}>
            <Responses/>
          </Box>
          <Box sx={GlobalStyle.infoBox}>
            <FormControl>
              <FormLabel sx={GlobalStyle.labelText}>
                Response to your doctor
              </FormLabel>
              <Textarea sx={GlobalStyle.inputStyle} />
            </FormControl>
          </Box>
          {/* ==== Button ==== */}
          <Box sx={GlobalStyle.btnBox}>
            <Button sx={GlobalStyle.blueBtn}>Submit</Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
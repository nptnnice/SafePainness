import {
  Text,
  Box,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

export default () => {
  return (
    <Box sx={GlobalStyle.bgColor}>
      <Box sx={GlobalStyle.layout}>
        <VStack sx={GlobalStyle.formBox} align="left" spacing={16}>
          {/* Symptom */}
          <FormControl>
            <FormLabel sx={GlobalStyle.normalText}>Symptoms</FormLabel>
            <Textarea sx={GlobalStyle.inputStyle} />
          </FormControl>

          {/* Pain scale */}
          <FormControl>
            <FormLabel sx={GlobalStyle.normalText}>
              What is pain severity?
            </FormLabel>
            <Slider
              defaultValue={0}
              min={0}
              max={10}
              step={1}
              sx={GlobalStyle.normalText}
            >
              <SliderMark value={1}>1</SliderMark>
              <SliderMark value={2}>2</SliderMark>
              <SliderMark value={3}>3</SliderMark>
              <SliderMark value={4}>4</SliderMark>
              <SliderMark value={5}>5</SliderMark>
              <SliderMark value={6}>6</SliderMark>
              <SliderMark value={7}>7</SliderMark>
              <SliderMark value={8}>8</SliderMark>
              <SliderMark value={9}>9</SliderMark>
              <SliderMark value={10}>10</SliderMark>
              <SliderTrack bg={Colour.grey}>
                <SliderFilledTrack bg={Colour.turquoise} />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
          </FormControl>

          {/* Upload picture */}
          <FormControl>
            <FormLabel sx={GlobalStyle.normalText}>
              Upload picture of your symptom
            </FormLabel>
          </FormControl>

          {/* <Input type="file" /> */}
          <FormControl>
            <FormLabel sx={GlobalStyle.normalText}>
              Comment to your doctor
            </FormLabel>
            <Textarea sx={GlobalStyle.inputStyle} />
          </FormControl>
        </VStack>
      </Box>
    </Box>
  )
}

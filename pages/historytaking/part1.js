import {
  Box,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  SimpleGrid,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Button,
  Center,
} from '@chakra-ui/react'
import GlobalStyle from '../../Style'
import Colour from '../../Colour'
import HeadForm from '../../components/HeadForm'
import BodySelector from '../../components/BodySelector'
import PainList from '../../components/PainList'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default () => {
  let bottomLine = {
    borderBottom: '2px solid',
    borderBlockColor: Colour.grey,
    width: '100%',
  }
  let borderStyle = {
    borderColor: Colour.grey,
  }
  let checkboxStyle = {
    borderColor: Colour.grey,
    fontFamily: 'IBM Plex Sans',
    fontWeight: '500',
    fontSize: '18px',
    color: Colour.black,
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadForm progress={0} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>
          Part 1: Symptoms and Associated Symptoms
        </Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="left" sx={GlobalStyle.formBox}>
            {/* Question 1 */}
            <FormControl sx={bottomLine} isRequired>
              <FormLabel sx={GlobalStyle.normalText}>
                1. Where is the pain? (The maximal site of the pain)
              </FormLabel>
              <BodySelector />
            </FormControl>

            {/* Question 2 */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.normalText}>
                2. When did the pain start?
              </FormLabel>
              <Text sx={GlobalStyle.description}>
                (e.g. after an accident, disease, treatment, etc.)
              </Text>
              <Input sx={GlobalStyle.inputStyle} />
            </FormControl>

            {/* Question 3 */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.normalText}>
                3. Was the pain sudden or gradual?
              </FormLabel>
              <RadioGroup>
                <Stack direction="row" gap={16}>
                  <Radio value="sudden" sx={borderStyle}>
                    <Text sx={GlobalStyle.normalText}>Sudden</Text>
                  </Radio>
                  <Radio value="gradual" sx={borderStyle}>
                    <Text sx={GlobalStyle.normalText}>Gradual</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            {/* Question 4 */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.normalText}>
                4. How does the pain feel like?
              </FormLabel>
              <PainList />
            </FormControl>

            {/* Question 5 */}
            <FormControl>
              <FormLabel sx={GlobalStyle.normalText}>
                5. Is there any other symptoms associated with the pain?
              </FormLabel>
              <SimpleGrid columns={2} spacingX={10} spacingY={6}>
                <Checkbox sx={checkboxStyle}>Nausea</Checkbox>
                <Checkbox sx={checkboxStyle}>Fever</Checkbox>
                <Checkbox sx={checkboxStyle}>Dizziness</Checkbox>
                <Checkbox sx={checkboxStyle}>Muscle cramps</Checkbox>
                <Checkbox sx={checkboxStyle}>Muscle paralysis</Checkbox>
                <Checkbox sx={checkboxStyle}>Joint stiffness</Checkbox>
                <Checkbox sx={checkboxStyle}>Incontinence of bladder</Checkbox>
                <Checkbox sx={checkboxStyle}>Incontinence of bowels</Checkbox>
                <Checkbox sx={checkboxStyle}>Other</Checkbox>
              </SimpleGrid>
            </FormControl>

            {/* Question 6 */}
            <VStack align="left" spacing={10}>
              <Text sx={GlobalStyle.normalText}>
                6. What is the pain severity?
              </Text>
              <FormControl isRequired>
                <FormLabel sx={GlobalStyle.normalText}>Right now</FormLabel>
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
              <FormControl isRequired>
                <FormLabel sx={GlobalStyle.normalText}>
                  Average in the past 7 days
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
            </VStack>
          </VStack>

          <Link href="/historytaking/part2">
            <Button rightIcon={<ArrowForwardIcon />} sx={GlobalStyle.blueBtn}>
              Next
            </Button>
          </Link>
        </VStack>
      </Box>
    </Box>
  )
}

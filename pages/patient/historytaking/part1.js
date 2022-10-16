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
  Flex,
  Image,
} from '@chakra-ui/react'
import GlobalStyle from '../../../Style'
import Colour from '../../../Colour'
import FormProgress from '../../../components/FormProgress'
import BodySelector from '../../../components/BodySelector'
// import PainList from '../../../components/PainList'
import { PainTypes } from '../../../PainTypes'
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
  let painBox = {
    border: '2px solid',
    borderColor: Colour.grey,
    borderRadius: '16px',
    padding: '8px 16px',
    alignItems: 'center',
    gap: { base: '8px', md: '16px' },
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'all 0.1s ease',
    _hover: {
      backgroundColor: Colour.turquoise,
      borderColor: Colour.turquoise,
    },
  }
  let imgSize = {
    width: { base: '64px', sm: '72px', md: '80px' },
  }
  let gridBox = {
    overflowY: 'scroll',
    height: { base: '240px', md: '280px' },
    padding: '8px',
  }
  let other = {
    marginTop: '24px',
    alignItems: 'center',
    gap: '8px',
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <FormProgress progress={0} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.boldText}>
          Part 1: Symptoms and Associated Symptoms
        </Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="start" sx={GlobalStyle.formBox}>
            {/* =================== Question 1 =================== */}
            <FormControl sx={bottomLine} isRequired>
              <FormLabel sx={GlobalStyle.labelText}>
                1. Where is the pain? (The maximal site of the pain)
              </FormLabel>
              <BodySelector />
            </FormControl>

            {/* =================== Question 2 =================== */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.labelText}>
                2. When did the pain start?
              </FormLabel>
              <Input sx={GlobalStyle.inputStyle} />
              <FormHelperText sx={GlobalStyle.greyMediumText}>
                e.g. after an accident, disease, treatment, etc.
              </FormHelperText>
            </FormControl>

            {/*  ===================Question 3  ===================*/}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.labelText}>
                3. Was the pain sudden or gradual?
              </FormLabel>
              <RadioGroup>
                <Stack direction="row" gap={16}>
                  <Radio value="sudden" sx={borderStyle}>
                    <Text sx={GlobalStyle.labelText}>Sudden</Text>
                  </Radio>
                  <Radio value="gradual" sx={borderStyle}>
                    <Text sx={GlobalStyle.labelText}>Gradual</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            {/* =================== Question 4 =================== */}
            <FormControl isRequired>
              <FormLabel sx={GlobalStyle.labelText}>
                4. How does the pain feel like?
              </FormLabel>
              <Box sx={gridBox}>
                <SimpleGrid
                  templateColumns="repeat(auto-fill, minmax(180px, 1fr))"
                  sx={GlobalStyle.gridStyle}
                >
                  {PainTypes.map((item) => {
                    return (
                      <Flex sx={painBox}>
                        <Image sx={imgSize} src={item.image} />
                        <Text sx={GlobalStyle.labelText}>{item.name}</Text>
                      </Flex>
                    )
                  })}
                </SimpleGrid>
              </Box>
              <Flex sx={other}>
                <Text sx={GlobalStyle.labelText}>Other:</Text>
                <Input sx={GlobalStyle.inputStyle} />
              </Flex>
            </FormControl>

            {/* =================== Question 5 =================== */}
            <FormControl>
              <FormLabel sx={GlobalStyle.labelText}>
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
              </SimpleGrid>
              <Flex sx={other}>
                <Text sx={GlobalStyle.labelText}>Other:</Text>
                <Input sx={GlobalStyle.inputStyle} />
              </Flex>
            </FormControl>

            {/* =================== Question 6 =================== */}
            <VStack align="left" spacing={10}>
              <Text sx={GlobalStyle.labelText}>
                6. What is the pain severity?
              </Text>
              <FormControl isRequired>
                <FormLabel sx={GlobalStyle.labelText}>Right now</FormLabel>
                <Box sx={GlobalStyle.sliderBox}>
                  <Slider
                    defaultValue={0}
                    min={0}
                    max={10}
                    step={1}
                    sx={GlobalStyle.labelText}
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
                </Box>
              </FormControl>
              <FormControl isRequired>
                <FormLabel sx={GlobalStyle.labelText}>
                  Average in the past 7 days
                </FormLabel>
                <Box sx={GlobalStyle.sliderBox}>
                  <Slider
                    defaultValue={0}
                    min={0}
                    max={10}
                    step={1}
                    sx={GlobalStyle.labelText}
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
                </Box>
              </FormControl>
            </VStack>
          </VStack>

          <Link href="./part2">
            <Button rightIcon={<ArrowForwardIcon />} sx={GlobalStyle.blueBtn}>
              Next
            </Button>
          </Link>
        </VStack>
      </Box>
    </Box>
  )
}

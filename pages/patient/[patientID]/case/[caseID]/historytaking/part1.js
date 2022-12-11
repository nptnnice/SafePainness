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
  Flex,
  Image,
} from '@chakra-ui/react'
import {
  bottomLine,
  borderStyle,
  checkboxStyle,
  painBox,
  painBoxSelected,
  imgSize,
  gridBox,
  other,
} from '/style-props/Historytakingstyles'
import {
  bgColor,
  layout,
  formBox,
  inputStyle,
  boldText,
  mediumText,
  regularText,
  errorText,
  description,
  gridStyle,
  iconStyle,
  sliderBox,
  blueBtn,
} from '/style-props/Sharedstyles'
import Colour from '/style-props/SharedColour'
import FormProgress from '/components/FormProgress'
import { PainTypes } from '/PainTypes'
import { ArrowForwardIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import PainScaleModal from '/components/PainScaleModal'
import { BodyComponent } from 'reactjs-human-body'
import { useToast } from '@chakra-ui/react'

export default function History1() {
  // router
  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

  // toast
  const toast = useToast()

  // set modal
  const [showModal, setShowModal] = useState(false)
  const handleClickModal = () => setShowModal(!showModal)

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
  })

  // handle saved data
  useEffect(() => {
    if (localStorage.getItem('historytaking-1')) {
      setForm(JSON.parse(localStorage.getItem('historytaking-1')))
    }
  }, [])

  // handle form change
  // site
  const getSite = (e) => {
    let newSite = e
    if (form.site.includes(e)) {
      newSite = form.site.filter((item) => item !== e)
      setForm({ ...form, site: newSite })
    } else {
      newSite = [...form.site, e]
      setForm({ ...form, site: [...form.site, e] })
    }
  }
  // onset
  const getOnset = (e) => {
    setForm({ ...form, onset: e.target.value })
  }
  // onset type
  const getOnsetType = (value) => {
    setForm({ ...form, onsetType: value })
  }
  // characteristic
  const getCharacteristic = (painCharacter) => {
    let newCharacteristic = painCharacter
    if (form.characteristic.includes(painCharacter)) {
      newCharacteristic = form.characteristic.filter(
        (item) => item !== painCharacter
      )
      setForm({ ...form, characteristic: newCharacteristic })
    } else {
      newCharacteristic = [...form.characteristic, painCharacter]
      setForm({
        ...form,
        characteristic: [...form.characteristic, painCharacter],
      })
    }
  }
  // other characteristic
  const getOtherCharacteristic = (e) => {
    setForm({ ...form, otherCharacteristic: e.target.value })
  }
  // radiation
  const getRadiation = (e) => {
    setForm({ ...form, radiation: e.target.value })
  }
  // associated symptom
  const getAssociatedSymp = (e) => {
    let newAssociatedSymp = e
    if (form.associatedSymp.includes(e.target.value)) {
      newAssociatedSymp = form.associatedSymp.filter(
        (item) => item !== e.target.value
      )
      setForm({ ...form, associatedSymp: newAssociatedSymp })
    } else {
      newAssociatedSymp = [...form.associatedSymp, e.target.value]
      setForm({
        ...form,
        associatedSymp: [...form.associatedSymp, e.target.value],
      })
    }
  }
  // other symptom
  const getOtherSymptom = (e) => {
    setForm({ ...form, otherSymptom: e.target.value })
  }
  // pain scale now
  const getPainScaleNow = (e) => {
    setForm({ ...form, painScaleNow: e })
  }
  // pain scale past
  const getPainScalePast = (e) => {
    setForm({ ...form, painScalePast: e })
  }

  // handle error
  const [error, setError] = useState(false)

  // handle next button
  const onClickNext = () => {
    if (
      form.site.length !== 0 &&
      form.onset &&
      form.onsetType &&
      (form.characteristic.length !== 0 || form.otherCharacteristic) &&
      form.radiation &&
      (form.associatedSymp.length !== 0 || form.otherSymptom) &&
      form.painScaleNow &&
      form.painScalePast
    ) {
      setError(false)
      localStorage.setItem('historytaking-1', JSON.stringify(form))
      // console.log(localStorage.getItem('historytaking-1'))
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

  const [bodyState, setBodyState] = useState({
    head: {
      show: true,
      selected: false,
    },
    left_shoulder: {
      show: true,
      selected: false,
    },
    right_shoulder: {
      show: true,
      selected: false,
    },
    left_arm: {
      show: true,
      selected: false,
    },
    right_arm: {
      show: true,
      selected: false,
    },
    chest: {
      show: true,
      selected: false,
    },
    stomach: {
      show: true,
      selected: false,
    },
    left_leg: {
      show: true,
      selected: false,
    },
    right_leg: {
      show: true,
      selected: false,
    },
    left_hand: {
      show: true,
      selected: false,
    },
    right_hand: {
      show: true,
      selected: false,
    },
    left_foot: {
      show: true,
      selected: false,
    },
    right_foot: {
      show: true,
      selected: false,
    },
  })

  return (
    <Box sx={bgColor}>
      <FormProgress progress={0} />
      <Box sx={layout}>
        <Text sx={mediumText}>
          This is a history taking questionnaire based on SOCRATES pain
          assessment tool. You need to fill the answer according to your pain
          experience.
        </Text>
        <Text sx={boldText} marginTop="24px">
          Part 1: Symptoms and Associated Symptoms
        </Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="start" sx={formBox}>
            {/* =================== Question 1 =================== */}
            <FormControl
              sx={bottomLine}
              isRequired
              isInvalid={error && form.site.length == 0}
            >
              <FormLabel sx={mediumText}>
                1. Where is the pain? (The maximal site of the pain)
              </FormLabel>
              <FormErrorMessage sx={errorText}>
                Please select site of the pain.
              </FormErrorMessage>
              <BodyComponent
                onClick={(e) => getSite(e)}
                partsInput={bodyState}
              />
              {form.site.map((item) => (
                <Text key={item} sx={regularText}>
                  {item}
                </Text>
              ))}
            </FormControl>

            {/* =================== Question 2 =================== */}
            <FormControl isRequired isInvalid={error && !form.onset}>
              <FormLabel sx={mediumText}>2. When did the pain start?</FormLabel>
              <Text sx={description}>
                e.g. after an accident, disease, treatment, etc.
              </Text>
              <Input sx={inputStyle} onChange={getOnset} value={form.onset} />
            </FormControl>

            {/*  ===================Question 3  ===================*/}
            <FormControl isRequired isInvalid={error && !form.onsetType}>
              <FormLabel sx={mediumText}>
                3. Was the pain sudden or gradual?
              </FormLabel>
              <RadioGroup onChange={getOnsetType} value={form.onsetType}>
                <Stack direction="row" gap={16}>
                  <Radio value="Sudden" sx={borderStyle}>
                    <Text sx={mediumText}>Sudden</Text>
                  </Radio>
                  <Radio value="Gradual" sx={borderStyle}>
                    <Text sx={mediumText}>Gradual</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            {/* =================== Question 4 =================== */}
            <FormControl
              isRequired
              isInvalid={
                error &&
                form.characteristic.length == 0 &&
                !form.otherCharacteristic
              }
            >
              <FormLabel sx={mediumText}>
                4. How does the pain feel like?
              </FormLabel>
              <FormErrorMessage sx={errorText}>
                Please select your pain characteristic.
              </FormErrorMessage>
              <Box sx={gridBox}>
                <SimpleGrid
                  templateColumns="repeat(auto-fill, minmax(180px, 1fr))"
                  sx={gridStyle}
                >
                  {PainTypes.map((item, index) => {
                    return (
                      <Flex
                        sx={
                          form.characteristic.includes(item.name)
                            ? painBoxSelected
                            : painBox
                        }
                        key={index}
                        onClick={() => getCharacteristic(item.name)}
                      >
                        <Image sx={imgSize} src={item.image} />
                        <Text sx={mediumText}>{item.name}</Text>
                      </Flex>
                    )
                  })}
                </SimpleGrid>
              </Box>
              <Flex sx={other}>
                <Text sx={mediumText}>Other:</Text>
                <Input
                  sx={inputStyle}
                  onChange={getOtherCharacteristic}
                  value={form.otherCharacteristic}
                />
              </Flex>
            </FormControl>

            {/* =================== Question 5 =================== */}
            <FormControl isRequired isInvalid={error && !form.radiation}>
              <FormLabel sx={mediumText}>
                5. Does the pain radiate anywhere else?
              </FormLabel>
              <Text sx={description} marginBottom="8px">
                (Fill the blank with dash (-), if the answer is no.)
              </Text>
              <Input
                sx={inputStyle}
                onChange={getRadiation}
                value={form.radiation}
              />
            </FormControl>

            {/* =================== Question 6 =================== */}
            <FormControl
              isRequired
              isInvalid={
                error && form.associatedSymp.length == 0 && !form.otherSymptom
              }
            >
              <FormLabel sx={mediumText}>
                6. Is there any other symptoms associated with the pain?
              </FormLabel>

              <SimpleGrid columns={2} spacingX={10} spacingY={6}>
                <Checkbox
                  sx={checkboxStyle}
                  value="Nausea"
                  onChange={getAssociatedSymp}
                  isChecked={form.associatedSymp.includes('Nausea')}
                >
                  Nausea
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Fever"
                  onChange={getAssociatedSymp}
                  isChecked={form.associatedSymp.includes('Fever')}
                >
                  Fever
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Dizziness"
                  onChange={getAssociatedSymp}
                  isChecked={form.associatedSymp.includes('Dizziness')}
                >
                  Dizziness
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Muscle cramps"
                  onChange={getAssociatedSymp}
                  isChecked={form.associatedSymp.includes('Muscle cramps')}
                >
                  Muscle cramps
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Muscle paralysis"
                  onChange={getAssociatedSymp}
                  isChecked={form.associatedSymp.includes('Muscle paralysis')}
                >
                  Muscle paralysis
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Joint stiffness"
                  onChange={getAssociatedSymp}
                  isChecked={form.associatedSymp.includes('Joint stiffness')}
                >
                  Joint stiffness
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Incontinence of bladder"
                  onChange={getAssociatedSymp}
                  isChecked={form.associatedSymp.includes(
                    'Incontinence of bladder'
                  )}
                >
                  Incontinence of bladder
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Incontinence of bowels"
                  onChange={getAssociatedSymp}
                  isChecked={form.associatedSymp.includes(
                    'Incontinence of bowels'
                  )}
                >
                  Incontinence of bowels
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="None"
                  onChange={getAssociatedSymp}
                  isChecked={form.associatedSymp.includes('None')}
                >
                  None
                </Checkbox>
              </SimpleGrid>

              <Flex sx={other}>
                <Text sx={mediumText}>Other:</Text>
                <Input
                  sx={inputStyle}
                  onChange={getOtherSymptom}
                  value={form.otherSymptom}
                />
              </Flex>
            </FormControl>

            <VStack align="left" spacing={10} width="100%">
              <Flex>
                <Text sx={mediumText}>
                  7. What is the pain severity? {''}
                  <InfoOutlineIcon
                    onClick={() => handleClickModal()}
                    sx={iconStyle}
                  />
                </Text>
                <PainScaleModal isOpen={showModal} onClose={handleClickModal} />
              </Flex>
              {/* =================== Question 7.1 =================== */}
              <FormControl isRequired isInvalid={error && !form.painScaleNow}>
                <FormLabel sx={mediumText}>Right now</FormLabel>
                <FormErrorMessage sx={errorText}>
                  Please select.
                </FormErrorMessage>
                <Box sx={sliderBox}>
                  <Slider
                    value={form.painScaleNow == '' ? 0.5 : form.painScaleNow}
                    min={0}
                    max={10}
                    step={1}
                    sx={mediumText}
                    onChange={getPainScaleNow}
                  >
                    <SliderMark value={0}>0</SliderMark>
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

              {/* =================== Question 7.2 =================== */}
              <FormControl isRequired isInvalid={error && !form.painScalePast}>
                <FormLabel sx={mediumText}>
                  Average in the past 7 days
                </FormLabel>
                <FormErrorMessage sx={errorText}>
                  Please select.
                </FormErrorMessage>
                <Box sx={sliderBox}>
                  <Slider
                    value={form.painScalePast == '' ? 0.5 : form.painScalePast}
                    min={0}
                    max={10}
                    step={1}
                    sx={mediumText}
                    onChange={getPainScalePast}
                  >
                    <SliderMark value={0}>0</SliderMark>
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

          <Button
            rightIcon={<ArrowForwardIcon />}
            sx={blueBtn}
            onClick={() => onClickNext()}
          >
            Next
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

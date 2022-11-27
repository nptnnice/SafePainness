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
import GlobalStyle from '../../../../../../Style'
import Colour from '../../../../../../Colour'
import FormProgress from '/components/FormProgress'
import BodySelector from '/components/BodySelector'
import { PainTypes } from '/PainTypes'
import { ArrowForwardIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import PainScaleModal from '/components/PainScaleModal'
import { BodyComponent } from 'reactjs-human-body'
import { useToast } from '@chakra-ui/react'

export default function History1() {
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
  let painBoxSelected = {
    ...painBox,
    backgroundColor: Colour.turquoise,
    borderColor: Colour.turquoise,
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
      form.characteristic.length !== 0 &&
      form.radiation &&
      form.associatedSymp.length !== 0 &&
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
    <Box sx={GlobalStyle.bgColor}>
      <FormProgress progress={0} />
      <Box sx={GlobalStyle.layout}>
        <Text sx={GlobalStyle.labelText}>
          This is a history taking questionnaire based on SOCRATES pain
          assessment tool. You need to fill the answer according to your pain
          experience.
        </Text>
        <Text sx={GlobalStyle.boldText} marginTop="24px">
          Part 1: Symptoms and Associated Symptoms
        </Text>
        <VStack spacing={16}>
          <VStack spacing={16} align="start" sx={GlobalStyle.formBox}>
            {/* =================== Question 1 =================== */}
            <FormControl
              sx={bottomLine}
              isRequired
              isInvalid={error && form.site.length == 0}
            >
              <FormLabel sx={GlobalStyle.labelText}>
                1. Where is the pain? (The maximal site of the pain)
              </FormLabel>
              <FormErrorMessage sx={GlobalStyle.errorText}>
                Please select site of the pain.
              </FormErrorMessage>
              {/* <BodySelector /> */}
              {/* {console.log('test', form.site.includes('head'))} */}

              <BodyComponent onClick={getSite} partsInput={bodyState} />
            </FormControl>

            {/* =================== Question 2 =================== */}
            <FormControl isRequired isInvalid={error && !form.onset}>
              <FormLabel sx={GlobalStyle.labelText}>
                2. When did the pain start?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getOnset}
                value={form.onset}
              />
              <FormHelperText sx={GlobalStyle.greyMediumText}>
                e.g. after an accident, disease, treatment, etc.
              </FormHelperText>
            </FormControl>

            {/*  ===================Question 3  ===================*/}
            <FormControl isRequired isInvalid={error && !form.onsetType}>
              <FormLabel sx={GlobalStyle.labelText}>
                3. Was the pain sudden or gradual?
              </FormLabel>
              <RadioGroup onChange={getOnsetType} value={form.onsetType}>
                <Stack direction="row" gap={16}>
                  <Radio value="Sudden" sx={borderStyle}>
                    <Text sx={GlobalStyle.labelText}>Sudden</Text>
                  </Radio>
                  <Radio value="Gradual" sx={borderStyle}>
                    <Text sx={GlobalStyle.labelText}>Gradual</Text>
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
              <FormLabel sx={GlobalStyle.labelText}>
                4. How does the pain feel like?
              </FormLabel>
              <FormErrorMessage sx={GlobalStyle.errorText}>
                Please select your pain characteristic.
              </FormErrorMessage>
              <Box sx={gridBox}>
                <SimpleGrid
                  templateColumns="repeat(auto-fill, minmax(180px, 1fr))"
                  sx={GlobalStyle.gridStyle}
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
                        <Text sx={GlobalStyle.labelText}>{item.name}</Text>
                      </Flex>
                    )
                  })}
                </SimpleGrid>
              </Box>
              <Flex sx={other}>
                <Text sx={GlobalStyle.labelText}>Other:</Text>
                <Input
                  sx={GlobalStyle.inputStyle}
                  onChange={getOtherCharacteristic}
                  value={form.otherCharacteristic}
                />
              </Flex>
            </FormControl>

            {/* =================== Question 5 =================== */}
            <FormControl isRequired isInvalid={error && !form.radiation}>
              <FormLabel sx={GlobalStyle.labelText}>
                5. Does the pain radiate anywhere else?
              </FormLabel>
              <Text sx={GlobalStyle.greyMediumText} marginBottom="8px">
                (Fill the blank with dash (-), if the answer is no.)
              </Text>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getRadiation}
                value={form.radiation}
              />
              {/* <FormHelperText sx={GlobalStyle.greyMediumText}>
                (Fill the blank with dash (-), if the answer is no.)
              </FormHelperText> */}
            </FormControl>

            {/* =================== Question 6 =================== */}
            <FormControl
              isRequired
              isInvalid={
                error && form.associatedSymp.length == 0 && !form.otherSymptom
              }
            >
              <FormLabel sx={GlobalStyle.labelText}>
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
                <Text sx={GlobalStyle.labelText}>Other:</Text>
                <Input
                  sx={GlobalStyle.inputStyle}
                  onChange={getOtherSymptom}
                  value={form.otherSymptom}
                />
              </Flex>
            </FormControl>

            <VStack align="left" spacing={10} width="100%">
              <Flex>
                <Text sx={GlobalStyle.labelText}>
                  7. What is the pain severity? {''}
                  <InfoOutlineIcon
                    onClick={handleClickModal}
                    sx={GlobalStyle.iconStyle}
                  />
                </Text>
                <PainScaleModal isOpen={showModal} onClose={handleClickModal} />
              </Flex>
              {/* =================== Question 7.1 =================== */}
              <FormControl isRequired isInvalid={error && !form.painScaleNow}>
                <FormLabel sx={GlobalStyle.labelText}>Right now</FormLabel>
                <FormErrorMessage sx={GlobalStyle.errorText}>
                  Please select.
                </FormErrorMessage>
                <Box sx={GlobalStyle.sliderBox}>
                  <Slider
                    value={form.painScaleNow == '' ? 0.5 : form.painScaleNow}
                    min={0}
                    max={10}
                    step={1}
                    sx={GlobalStyle.labelText}
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
                <FormLabel sx={GlobalStyle.labelText}>
                  Average in the past 7 days
                </FormLabel>
                <FormErrorMessage sx={GlobalStyle.errorText}>
                  Please select.
                </FormErrorMessage>
                <Box sx={GlobalStyle.sliderBox}>
                  <Slider
                    value={form.painScalePast == '' ? 0.5 : form.painScalePast}
                    min={0}
                    max={10}
                    step={1}
                    sx={GlobalStyle.labelText}
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
            sx={GlobalStyle.blueBtn}
            onClick={onClickNext}
          >
            Next
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

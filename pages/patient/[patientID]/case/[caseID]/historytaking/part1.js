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
  const [site, setSite] = useState([])
  const [onset, setOnset] = useState('')
  const [onsetType, setOnsetType] = useState('')
  const [characteristic, setCharacteristic] = useState([])
  const [radiation, setRadiation] = useState('')
  const [associatedSymp, setAssociatedSymp] = useState([])
  const [painScaleNow, setPainScaleNow] = useState('')
  const [painScalePast, setPainScalePast] = useState('')

  const [otherSymptom, setOtherSymptom] = useState('')
  const [otherCharacteristic, setOtherCharacteristic] = useState('')

  // localStorage.clear()
  useEffect(() => {
    if (localStorage.getItem('site') !== null) {
      setSite(localStorage.getItem('site'))
      console.log(localStorage.getItem('site'))
    }
    if (localStorage.getItem('onset') !== null) {
      setOnset(localStorage.getItem('onset'))
      console.log(localStorage.getItem('onset'))
    }
    if (localStorage.getItem('onsetType') !== null) {
      setOnsetType(localStorage.getItem('onsetType'))
      console.log(localStorage.getItem('onsetType'))
    }
    if (localStorage.getItem('characteristic') !== null) {
      setCharacteristic(localStorage.getItem('characteristic'))
      console.log(localStorage.getItem('characteristic'))
    }
    if (localStorage.getItem('radiation') !== null) {
      setRadiation(localStorage.getItem('radiation'))
      console.log(localStorage.getItem('radiation'))
    }
    if (localStorage.getItem('associatedSymp') !== null) {
      setAssociatedSymp(localStorage.getItem('associatedSymp'))
      console.log(localStorage.getItem('associatedSymp'))
    }
    if (localStorage.getItem('painScaleNow') !== null) {
      setPainScaleNow(localStorage.getItem('painScaleNow'))
      console.log(localStorage.getItem('painScaleNow'))
    }
    if (localStorage.getItem('painScalePast') !== null) {
      setPainScalePast(localStorage.getItem('painScalePast'))
      console.log(localStorage.getItem('painScalePast'))
    }
    if (localStorage.getItem('otherSymptom') !== null) {
      setOtherSymptom(localStorage.getItem('otherSymptom'))
      console.log(localStorage.getItem('otherSymptom'))
    }
    if (localStorage.getItem('otherCharacteristic') !== null) {
      setOtherCharacteristic(localStorage.getItem('otherCharacteristic'))
      console.log(localStorage.getItem('otherCharacteristic'))
    }
  }, [])

  // handle form change
  // site
  const getSite = (e) => {
    if (site.includes(e)) {
      setSite(site.filter((item) => item !== e))
    } else {
      setSite([...site, e])
    }
  }
  // onset
  const getOnset = (e) => {
    setOnset(e.target.value)
  }
  // onset type
  const getOnsetType = (value) => {
    setOnsetType(value)
  }
  // characteristic
  const getCharacteristic = (painCharacter) => {
    if (characteristic.includes(painCharacter)) {
      setCharacteristic(characteristic.filter((item) => item !== painCharacter))
    } else {
      setCharacteristic([...characteristic, painCharacter])
    }
  }
  const getOtherCharacteristic = (e) => {
    setOtherCharacteristic(e.target.value)
  }
  // radiation
  const getRadiation = (e) => {
    setRadiation(e.target.value)
  }
  // associated symptom
  const getAssociatedSymp = (e) => {
    // if array consists of the value, remove it
    if (associatedSymp.includes(e.target.value)) {
      setAssociatedSymp(
        associatedSymp.filter((item) => item !== e.target.value)
      )
    }
    // if array doesn't consist of the value, add it
    else {
      setAssociatedSymp([...associatedSymp, e.target.value])
    }
  }
  // other symptom
  const getOtherSymptom = (e) => {
    setOtherSymptom(e.target.value)
  }
  // pain scale now
  const getPainScaleNow = (e) => {
    setPainScaleNow(e)
  }
  // pain scale past
  const getPainScalePast = (e) => {
    setPainScalePast(e)
  }

  // handle error
  const [error, setError] = useState(false)

  // handle next button
  const onClickNext = () => {
    console.log('site: ', site)
    console.log('onset: ', onset)
    console.log('onsetType: ', onsetType)
    console.log('characteristic: ', characteristic)
    console.log('otherCharacteristic: ', otherCharacteristic)
    console.log('radiation: ', radiation)
    console.log('associatedSymp: ', associatedSymp)
    console.log('otherSymptom: ', otherSymptom)
    console.log('painScaleNow: ', painScaleNow)
    console.log('painScalePast: ', painScalePast)
    if (
      site &&
      onset &&
      onsetType &&
      characteristic &&
      radiation &&
      associatedSymp &&
      painScaleNow &&
      painScalePast
    ) {
      setError(false)
      localStorage.setItem('site', site)
      localStorage.setItem('onset', onset)
      localStorage.setItem('onsetType', onsetType)
      localStorage.setItem('characteristic', characteristic)
      localStorage.setItem('otherCharacteristic', otherCharacteristic)
      localStorage.setItem('radiation', radiation)
      localStorage.setItem('associatedSymp', associatedSymp)
      localStorage.setItem('otherSymptom', otherSymptom)
      localStorage.setItem('painScaleNow', painScaleNow)
      localStorage.setItem('painScalePast', painScalePast)
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
            <FormControl sx={bottomLine} isRequired>
              <FormLabel sx={GlobalStyle.labelText}>
                1. Where is the pain? (The maximal site of the pain)
              </FormLabel>
              <FormErrorMessage sx={GlobalStyle.errorText}>
                Please select site of the pain.
              </FormErrorMessage>
              {/* <BodySelector /> */}
              <BodyComponent
                onClick={getSite}
                partsInput={{
                  head: { show: true },
                  left_shoulder: {
                    show: true,
                  },
                  right_shoulder: {
                    show: true,
                  },
                  left_arm: { show: true },
                  right_arm: {
                    show: true,
                  },
                  chest: { show: true },
                  stomach: { show: true },
                  left_leg: { show: true },
                  right_leg: {
                    show: true,
                  },
                  left_hand: {
                    show: true,
                  },
                  right_hand: {
                    show: true,
                  },
                  left_foot: {
                    show: true,
                  },
                  right_foot: {
                    show: true,
                  },
                }}
              />
            </FormControl>

            {/* =================== Question 2 =================== */}
            <FormControl isRequired isInvalid={error && !onset}>
              <FormLabel sx={GlobalStyle.labelText}>
                2. When did the pain start?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getOnset}
                value={onset}
              />
              <FormHelperText sx={GlobalStyle.greyMediumText}>
                e.g. after an accident, disease, treatment, etc.
              </FormHelperText>
            </FormControl>

            {/*  ===================Question 3  ===================*/}
            <FormControl isRequired isInvalid={error && !onsetType}>
              <FormLabel sx={GlobalStyle.labelText}>
                3. Was the pain sudden or gradual?
              </FormLabel>
              <RadioGroup onChange={getOnsetType} value={onsetType}>
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
            <FormControl isRequired isInvalid={error && !characteristic}>
              <FormLabel sx={GlobalStyle.labelText}>
                4. How does the pain feel like?
              </FormLabel>
              <FormErrorMessage sx={GlobalStyle.errorText}>
                Please enter a value
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
                          characteristic.includes(item.name)
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
                  value={otherCharacteristic}
                />
              </Flex>
            </FormControl>

            {/* =================== Question 5 =================== */}
            <FormControl isRequired isInvalid={error && !radiation}>
              <FormLabel sx={GlobalStyle.labelText}>
                5. Does the pain radiate anywhere else?
              </FormLabel>
              <Input
                sx={GlobalStyle.inputStyle}
                onChange={getRadiation}
                value={radiation}
              />
              <FormHelperText sx={GlobalStyle.greyMediumText}>
                (Fill the blank with dash (-), if the answer is no.)
              </FormHelperText>
            </FormControl>

            {/* =================== Question 6 =================== */}
            <FormControl
              isRequired
              isInvalid={error && associatedSymp.length == 0}
            >
              <FormLabel sx={GlobalStyle.labelText}>
                6. Is there any other symptoms associated with the pain?
              </FormLabel>

              <SimpleGrid columns={2} spacingX={10} spacingY={6}>
                <Checkbox
                  sx={checkboxStyle}
                  value="Nausea"
                  onChange={getAssociatedSymp}
                  isChecked={associatedSymp.includes('Nausea')}
                >
                  Nausea
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Fever"
                  onChange={getAssociatedSymp}
                  isChecked={associatedSymp.includes('Fever')}
                >
                  Fever
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Dizziness"
                  onChange={getAssociatedSymp}
                  isChecked={associatedSymp.includes('Dizziness')}
                >
                  Dizziness
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Muscle cramps"
                  onChange={getAssociatedSymp}
                  isChecked={associatedSymp.includes('Muscle cramps')}
                >
                  Muscle cramps
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Muscle paralysis"
                  onChange={getAssociatedSymp}
                  isChecked={associatedSymp.includes('Muscle paralysis')}
                >
                  Muscle paralysis
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Joint stiffness"
                  onChange={getAssociatedSymp}
                  isChecked={associatedSymp.includes('Joint stiffness')}
                >
                  Joint stiffness
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Incontinence of bladder"
                  onChange={getAssociatedSymp}
                  isChecked={associatedSymp.includes('Incontinence of bladder')}
                >
                  Incontinence of bladder
                </Checkbox>
                <Checkbox
                  sx={checkboxStyle}
                  value="Incontinence of bowels"
                  onChange={getAssociatedSymp}
                  isChecked={associatedSymp.includes('Incontinence of bowels')}
                >
                  Incontinence of bowels
                </Checkbox>
              </SimpleGrid>

              <Flex sx={other}>
                <Text sx={GlobalStyle.labelText}>Other:</Text>
                <Input sx={GlobalStyle.inputStyle} onChange={getOtherSymptom} />
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
              <FormControl isRequired isInvalid={error && !painScaleNow}>
                <FormLabel sx={GlobalStyle.labelText}>Right now</FormLabel>
                <Box sx={GlobalStyle.sliderBox}>
                  <Slider
                    value={painScaleNow == '' ? 0.5 : painScaleNow}
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
              <FormControl isRequired isInvalid={error && !painScalePast}>
                <FormLabel sx={GlobalStyle.labelText}>
                  Average in the past 7 days
                </FormLabel>
                <Box sx={GlobalStyle.sliderBox}>
                  <Slider
                    value={painScalePast == '' ? 0.5 : painScalePast}
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

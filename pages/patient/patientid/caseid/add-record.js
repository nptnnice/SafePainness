import {
  Box,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Image,
  SimpleGrid,
  Button,
  chakra,
} from '@chakra-ui/react'
import GlobalStyle from '../../../../Style'
import Colour from '../../../../Colour'
import HeadBox from '../../../../components/HeadCenter'
import { useState } from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { useToast } from '@chakra-ui/react'

export default () => {
  let imgStyle = {
    objectFit: 'cover',
    borderRadius: '12px',
    width: '100%',
    height: '160px',
  }
  let imgBox = {
    position: 'relative',
  }
  let close = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    cursor: 'pointer',
    color: Colour.lightBlack,
  }

  const [isError, setIsError] = useState(false)
  const [isExceed, setIsExceed] = useState(false)
  const toast = useToast()

  const [form, setForm] = useState({
    symptom: '',
    datetime: '',
    painscale: '',
    photo: [],
    comment: '',
  })

  function uploadSingleFile(e) {
    setIsExceed(false)
    if (e.target.files.length > 4) {
      setIsExceed(true)
      return
    }
    setIsError(false)
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    )
    console.log(ImagesArray)
    setForm({ ...form, photo: [...form.photo, ...ImagesArray] })
  }

  function deleteFile(e) {
    const s = form.photo.filter((item, index) => index !== e)
    setForm({ ...form, photo: s })
  }

  const onSend = () => {
    setIsExceed(false)
    if (!form.symptom || !form.painscale) {
      setIsError(true)
      console.log('form is invalid')
      toast({
        title: 'An error occurred.',
        description: 'Please fill in all required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      if (form.photo.length > 4) {
        setIsExceed(true)
        setForm({ ...form, photo: [] })
        return
      }
      setIsError(false)
      console.log('form is valid')
      var now = new Date().toLocaleString()
      setForm({ ...form, datetime: now })
      console.log(form)
      toast({
        title: 'Submit successfully',
        description: 'Your record has been submitted.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      // reload page
      setTimeout(() => {
        window.location.reload()
      }, 4000)
    }
  }

  // console.log('form', form)
  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadBox topic="symptom tracking" />
      <Box sx={GlobalStyle.layout}>
        <VStack sx={GlobalStyle.infoBox} align="left" spacing={16}>
          {/* ==================== Symptom ==================== */}
          <FormControl isRequired isInvalid={isError && !form.symptom}>
            <FormLabel sx={GlobalStyle.labelText}>Symptom</FormLabel>
            <Textarea
              sx={GlobalStyle.inputStyle}
              placeholder="Fill in your current symptom"
              onChange={(e) => setForm({ ...form, symptom: e.target.value })}
            />
          </FormControl>

          {/* ==================== Pain scale ==================== */}
          <FormControl isRequired isInvalid={isError && !form.painscale}>
            <FormLabel sx={GlobalStyle.labelText}>Pain severity</FormLabel>
            <Box sx={GlobalStyle.sliderBox}>
              <Slider
                defaultValue={4.5}
                min={0}
                max={10}
                step={1}
                sx={GlobalStyle.labelText}
                onChange={(e) => setForm({ ...form, painscale: e })}
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
            <FormErrorMessage marginTop="16px" sx={GlobalStyle.errorText}>
              Please select pain severity
            </FormErrorMessage>
          </FormControl>

          {/* ==================== Upload picture ==================== */}
          <FormControl isInvalid={isExceed}>
            <FormLabel sx={GlobalStyle.labelText}>
              Upload picture of your symptom{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Optional)
              </chakra.span>
            </FormLabel>
            <Input
              type="file"
              sx={GlobalStyle.inputStyle}
              onChange={uploadSingleFile}
              multiple
              isDisabled={form.photo.length >= 4}
            />
            {!isExceed ? (
              <FormHelperText sx={GlobalStyle.greyMediumText}>
                You can upload up to 4 pictures.
              </FormHelperText>
            ) : (
              <FormErrorMessage sx={GlobalStyle.errorText}>
                Too many files selected.
              </FormErrorMessage>
            )}

            <SimpleGrid
              templateColumns="repeat(auto-fill, minmax(160px, 1fr))"
              sx={GlobalStyle.gridStyle}
              marginTop="24px"
            >
              {form.photo.map((item, index) => {
                return (
                  <Box sx={imgBox} key={item}>
                    <CloseIcon
                      sx={close}
                      onClick={() => {
                        deleteFile(index)
                      }}
                    />
                    <Image src={item} sx={imgStyle} />
                  </Box>
                )
              })}
            </SimpleGrid>
          </FormControl>

          {/* ==================== Comment ==================== */}
          <FormControl>
            <FormLabel sx={GlobalStyle.labelText}>
              Comment to your doctor{' '}
              <chakra.span sx={GlobalStyle.greyMediumText}>
                (Optional)
              </chakra.span>
            </FormLabel>
            <Textarea
              sx={GlobalStyle.inputStyle}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
            />
          </FormControl>
        </VStack>

        {/* ==================== Submit button ==================== */}
        <Box sx={GlobalStyle.btnBox}>
          <Button sx={GlobalStyle.blueBtn} onClick={onSend}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

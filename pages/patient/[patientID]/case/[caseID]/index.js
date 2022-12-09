import {
  Text,
  Box,
  Flex,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import SummaryBox from '/components/SummaryBox'
import Dashboard from '/components/Dashboard'
import HeadInfo from '/components/HeadInfo'
import ConfirmModal from '/components/ConfirmModal'
import QRgenerator from '/components/QRgenerator'
import StopTrackModal from '/components/StopTrackModal'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import BreadcrumbMenu from '/components/BreadcrumbMenu'
import axios from 'axios'
import url from '/url'

export default function Case(props) {
  const { caseInfo } = props

  useEffect(() => {
    sessionStorage.setItem('caseDoctor', caseInfo.doctorID)
    console.log(sessionStorage.getItem('caseDoctor'))
  }, [])

  console.log('this is props')
  console.log(props)

  const { user } = useAppContext()
  console.log(user)

  let layout = {
    width: '90%',
    margin: '0 auto',
    maxWidth: '900px',
    padding: { base: '48px 0 160px', md: '56px 0 240px' },
    position: 'relative',
  }
  let layout2 = {
    width: '90%',
    margin: '0 auto',
    maxWidth: '900px',
    padding: { base: '120px 0 160px', md: '200px 0 240px' },
    position: 'relative',
  }
  let diagnosisFlex = {
    alignItems: { base: 'flex-start', md: 'flex-start' },
    gap: '16px',
    width: '100%',
    flexDirection: { base: 'column', md: 'row' },
    marginBottom: '24px',
  }
  let section = {
    marginTop: { base: '24px', md: '16px' },
    position: 'relative',
    width: '100%',
    borderRadius: '12px',
    backgroundColor: Colour.white,
    padding: { base: '24px 16px', md: '40px 20px' },
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
  }
  let btnPosition = {
    position: 'absolute',
    right: '0',
    top: { base: '-16px', md: '32px' },
  }
  let btnStyle = {
    color: Colour.lightRed,
    backgroundColor: Colour.white,
    padding: { base: '16px 24px', md: '24px 32px' },
    fontFamily: 'Lato',
    fontSize: { base: '16px', md: '18px' },
    fontWeight: 'bold',
    borderRadius: '12px',
    border: '3px solid',
    borderColor: Colour.lightRed,
    transition: 'all 0.2s ease',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
    _hover: {
      borderColor: Colour.red,
      color: Colour.red,
    },
  }
  const currentPage = {
    color: Colour.darkBlue,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: { base: '16px', md: '18px' },
  }
  // For Confirm Diagnosis Modal
  const [diseaseName, setDiseaseName] = useState('')
  const [isError, setIsError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isConfirm, setConfirm] = useState(false)
  const onConfirmDiagnosis = () => {
    if (diseaseName == '') {
      setIsError(true)
    } else {
      setIsError(false)
      setShowModal(!showModal)
    }
  }
  // For Stop Tracking Modal
  const [showStopModal, setShowStopModal] = useState(false)
  const onStopTracking = () => setShowStopModal(!showStopModal)

  const router = useRouter()
  const caseID = router.query.caseID
  console.log('props', caseInfo)

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo />
      {/* ==================== No pain experience ==================== */}
      {caseInfo.painFrequency == null ? (
        <Box sx={layout2}>
          <QRgenerator caseInfo={caseInfo} />
        </Box>
      ) : (
        <Box sx={layout}>
          {/* ==================== Confirm diagnosis ==================== */}
          {!isConfirm && caseInfo.caseName == null ? (
            <>
              <Flex sx={diagnosisFlex}>
                <FormControl id="disease" isInvalid={isError}>
                  <Input
                    placeholder="Disease name"
                    onChange={(e) => setDiseaseName(e.target.value)}
                    sx={GlobalStyle.inputStyle}
                  />
                  <FormErrorMessage>
                    Please fill in the disease name
                  </FormErrorMessage>
                </FormControl>
                <Button
                  sx={GlobalStyle.yellowBtn}
                  onClick={() => onConfirmDiagnosis()}
                >
                  Confirm diagnosis
                </Button>
              </Flex>
              <ConfirmModal
                isOpen={showModal}
                onClose={onConfirmDiagnosis}
                setConfirm={setConfirm}
                caseInfo={caseInfo}
                diseaseName={diseaseName}
              />
            </>
          ) : (
            <>
              <Box sx={btnPosition}>
                <Button sx={btnStyle} onClick={() => onStopTracking()}>
                  Stop Tracking
                </Button>
              </Box>
              <StopTrackModal
                isOpen={showStopModal}
                onClose={onStopTracking}
                setConfirm={setConfirm}
                caseInfo={caseInfo}
              />
            </>
          )}

          {/* ==================== Breadcrumb ==================== */}
          <BreadcrumbMenu />

          <Box sx={section}>
            <SummaryBox caseInfo={caseInfo} />
            <Dashboard />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export async function getServerSideProps(context) {
  const result = await axios.get(`${url}/api/caseManager/getCase`, {
    headers: {
      caseID: context.params.caseID,
    },
  })
  return {
    props: {
      caseInfo: result.data,
    },
  }
}

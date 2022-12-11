import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import {
  layout,
  layout2,
  diagnosisFlex,
  section,
} from '/style-props/Casepagestyles'
import {
  bgColor,
  inputStyle,
  yellowBtn,
  stopTrackBtn,
  breadcrumbFlex,
} from '/style-props/Sharedstyles'
import SummaryBox from '/components/SummaryBox'
import Dashboard from '/components/Dashboard'
import HeadInfo from '/components/HeadInfo'
import ConfirmModal from '/components/ConfirmModal'
import QRgenerator from '/components/QRgenerator'
import StopTrackModal from '/components/StopTrackModal'
import { useState, useEffect } from 'react'
import BreadcrumbMenu from '/components/BreadcrumbMenu'
import axios from 'axios'
import url from '/url'
import { useAppContext } from '/context/UserContext'
import jwt_decode from 'jwt-decode'

export default function Case(props) {
  const { caseInfo, painGraph } = props

  // context
  const { user, setUser } = useAppContext()
  const [userRole, setUserRole] = useState('')

  // check if user is logged in
  useEffect(() => {
    if (sessionStorage.getItem('token') == null) {
      sessionStorage.clear()
      setUser(null)
      router.push('/')
      setTimeout(() => {
        alert('Please login first')
      }, 500)
    } else {
      setUserRole(jwt_decode(sessionStorage.getItem('token')).role)
    }
  }, [user])

  // set disease name
  const [diseaseName, setDiseaseName] = useState('')

  // check error
  const [isError, setIsError] = useState(false)

  // set confirm modal
  const [showModal, setShowModal] = useState(false)

  const [isConfirm, setConfirm] = useState(false)

  // For Confirm Modal
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

  if (caseInfo.site == null) {
    return (
      <Box sx={bgColor}>
        <HeadInfo />
        <Box sx={layout2}>
          <QRgenerator caseInfo={caseInfo} />
        </Box>
      </Box>
    )
  } else if (caseInfo.site != null && userRole == 'doctor') {
    return (
      <Box sx={bgColor}>
        <HeadInfo />
        <Box sx={layout}>
          {!isConfirm && caseInfo.caseName == null ? (
            <>
              <Flex sx={diagnosisFlex}>
                <FormControl id="disease" isInvalid={isError}>
                  <Input
                    placeholder="Disease name"
                    onChange={(e) => setDiseaseName(e.target.value)}
                    sx={inputStyle}
                  />
                  <FormErrorMessage>
                    Please fill in the disease name
                  </FormErrorMessage>
                </FormControl>
                <Button sx={yellowBtn} onClick={() => onConfirmDiagnosis()}>
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
          ) : caseInfo.status == true ? (
            <>
              {/* ==================== Show stop tracking if already diagnosed ==================== */}
              <Flex sx={breadcrumbFlex}>
                <BreadcrumbMenu />
                {userRole == 'doctor' ? (
                  <Button sx={stopTrackBtn} onClick={() => onStopTracking()}>
                    Stop Tracking
                  </Button>
                ) : null}
              </Flex>
              <StopTrackModal
                isOpen={showStopModal}
                onClose={onStopTracking}
                setConfirm={setConfirm}
                caseInfo={caseInfo}
              />
            </>
          ) : (
            <>
              {/* ==================== Doctor view when stop tracking ==================== */}
              <BreadcrumbMenu />
            </>
          )}

          {/* ==================== Body ==================== */}
          <Box sx={section}>
            <SummaryBox caseInfo={caseInfo} />
            <Dashboard painGraph={painGraph} />
          </Box>
        </Box>
      </Box>
    )
  } else if (caseInfo.site != null && userRole == 'patient') {
    return (
      <Box sx={bgColor}>
        <HeadInfo />
        <Box sx={layout}>
          <BreadcrumbMenu />
          <Box sx={section}>
            <SummaryBox caseInfo={caseInfo} />
            <Dashboard painGraph={painGraph} />
          </Box>
        </Box>
      </Box>
    )
  }
}

export async function getServerSideProps(context) {
  const result = await axios.get(`${url}/api/caseManager/getCase`, {
    headers: {
      caseid: context.params.caseID,
    },
  })
  const result2 = await axios.get(`${url}/api/caseManager/getChart`, {
    headers: {
      caseid: context.params.caseID,
    },
  })
  return {
    props: {
      caseInfo: result.data,
      painGraph: result2.data,
    },
  }
}

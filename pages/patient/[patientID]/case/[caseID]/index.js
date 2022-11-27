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
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import SummaryBox from '/components/SummaryBox'
import Dashboard from '/components/Dashboard'
import HeadInfo from '/components/HeadInfo'
import ConfirmModal from '/components/ConfirmModal'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from '/context/UserContext'
import BreadcrumbMenu from '/components/BreadcrumbMenu'
import axios from 'axios'
import url from '/url'

export default function Case(props) {
  let layout = {
    width: '90%',
    margin: '0 auto',
    maxWidth: '900px',
    padding: { base: '48px 0 160px', md: '56px 0 240px' },
    position: 'relative',
  }
  let diagnosisFlex = {
    alignItems: { base: 'flex-start', md: 'center' },
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
  let takeHistoryBtn = {
    backgroundColor: Colour.lightBlue,
    color: Colour.white,
    padding: { base: '16px 24px', md: '24px 40px' },
    fontFamily: 'Lato',
    fontSize: { base: '16px', md: '18px' },
    fontWeight: 'bold',
    borderRadius: '12px',
    border: '3px solid',
    borderColor: Colour.lightBlue,
    transition: 'all 0.2s ease',
    filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
    _hover: {
      backgroundColor: Colour.darkBlue,
      borderColor: Colour.darkBlue,
    },
  }
  const currentPage = {
    color: Colour.darkBlue,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: { base: '16px', md: '18px' },
  }

  const [noHistory, setHistory] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isconfirm, setConfirm] = useState(false)
  const onConfirmDiagnosis = () => setShowModal(!showModal)
  const router = useRouter()
  const caseID = router.query.caseID
  const { caseInfo } = props
  console.log('props', caseInfo)

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo />
      {/* ==================== No pain experience ==================== */}
      <VStack>
        <Text sx={GlobalStyle.greyMediumText}>
          No record of pain experience
        </Text>
        <Button sx={takeHistoryBtn} onClick={() => setHistory(!noHistory)}>
          Take history
        </Button>
      </VStack>
      <Box sx={layout}>
        {/* ==================== Confirm diagnosis ==================== */}
        {!isconfirm ? (
          <Flex sx={diagnosisFlex}>
            <Text sx={GlobalStyle.boldText} whiteSpace="nowrap">
              Case {caseID}:
            </Text>
            <Input placeholder="Disease name" sx={GlobalStyle.inputStyle} />
            <Button sx={GlobalStyle.yellowBtn} onClick={onConfirmDiagnosis}>
              Confirm diagnosis
            </Button>
          </Flex>
        ) : (
          <Box sx={btnPosition}>
            <Button sx={btnStyle}>Stop Tracking</Button>
          </Box>
        )}
        <ConfirmModal
          isOpen={showModal}
          onClose={onConfirmDiagnosis}
          setConfirm={setConfirm}
        />

        {/* ==================== Breadcrumb ==================== */}
        <BreadcrumbMenu />

        <Box sx={section}>
          <SummaryBox caseInfo={caseInfo} />
          <Dashboard />
        </Box>
      </Box>
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

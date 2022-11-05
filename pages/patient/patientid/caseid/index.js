import {
  Text,
  Box,
  Flex,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import GlobalStyle from '../../../../Style'
import Colour from '../../../../Colour'
import SummaryBox from '../../../../components/SummaryBox'
import Dashboard from '../../../../components/Dashboard'
import HeadInfo from '../../../../components/HeadInfo'
import ConfirmModal from '../../../../components/ConfirmModal'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Case() {
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
  let section2 = {
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

  const [showModal, setShowModal] = useState(false)
  const [isconfirm, setConfirm] = useState(false)
  const handleClick = () => setShowModal(!showModal)
  const router = useRouter()

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo
        name="Patient ID"
        patientID="XXXXXX"
        caseID="XXXX"
        caseName="Grammar addict"
        doctor="Alan Smith"
      />

      <Box sx={layout}>
        {/* ==================== Confirm diagnosis ==================== */}
        {!isconfirm ? (
          <Flex sx={diagnosisFlex}>
            <Text sx={GlobalStyle.boldText} whiteSpace="nowrap">
              Case XXXX:
            </Text>
            <Input placeholder="Disease name" sx={GlobalStyle.inputStyle} />
            <Button sx={GlobalStyle.yellowBtn} onClick={handleClick}>
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
          onClose={handleClick}
          setConfirm={setConfirm}
        />
        <Breadcrumb>
          <BreadcrumbItem iscurrentPage>
            <BreadcrumbLink>
              <Text sx={currentPage}>Summary</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="./caseid/recordid">
              <Text sx={GlobalStyle.boldText}>Records</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="./caseid/feedback">
              <Text sx={GlobalStyle.boldText}>Feedbacks</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box sx={section2}>
          <SummaryBox />
          <Dashboard />
        </Box>
      </Box>
    </Box>
  )
}

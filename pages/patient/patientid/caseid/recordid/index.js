import {
  Text,
  Box,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import GlobalStyle from '../../../../../Style'
import Colour from '../../../../../Colour'
import HeadInfo from '../../../../../components/HeadInfo'
import { useRouter } from 'next/router'
import Records from '../../../../../components/Records'

export default function Case() {
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
    top: { base: '-64px', md: '-72px' },
  }

  const router = useRouter()
  const onClickAddRecord = () => {
    router.push('../caseid/add-record')
  }
  const onClickFeedback = () => {
    router.push('./feedback/feedbackid')
  }

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo
        name="Patient ID"
        patientID="XXXXXX"
        caseID="XXXX"
        caseName="Grammar addict"
        doctor="Alan Smith"
      />

      <Box sx={GlobalStyle.layout}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="../caseid">
              <Text sx={GlobalStyle.boldText}>Summary</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem iscurrentPage>
            <BreadcrumbLink>
              <Text sx={GlobalStyle.boldText}>Records</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="./feedback">
              <Text sx={GlobalStyle.boldText}>Feedbacks</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box sx={section2}>
          <Box sx={btnPosition}>
            <Button sx={GlobalStyle.turquoiseBtn} onClick={onClickAddRecord}>
              + Record
            </Button>
          </Box>
          <Records />
        </Box>
      </Box>
    </Box>
  )
}

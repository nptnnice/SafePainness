import {
  Text,
  Box,
  Flex,
  Input,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import Colour from '../Colour'
import SummaryBox from './SummaryBox'



export default function TabBreadcrumb() {

  let layout = {
    width: '90%',
    margin: '0 auto',
    maxWidth: '900px',
    padding: { base: '48px 0 160px', md: '64px 0 240px' },
    position: 'relative',
  }

  let section1 = {
    marginTop: { base: '40px', md: '16px' },
    position: 'relative',
    padding: '0px 0px 24px 0px',
  }
  let section2 = {
    marginTop: { base: '72px', md: '56px' },
    position: 'relative',
  }

  let boldText = {
    color: Colour.lightBlack,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: { base: '16px', md: '18px' },
  }

  let labelText = {
    color: '#8A8A8A',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'medium',
    fontSize: { base: '16px', md: '18px' },
  }

  return (
    <Breadcrumb sx={section1}>
      <BreadcrumbItem sx={boldText}>
        <BreadcrumbLink href="http://localhost:3000/patient/patientid/caseid">Summary</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem sx={labelText}>
        <BreadcrumbLink href="http://localhost:3000/create-patient-account">Dashboard</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem sx={labelText}>
        <BreadcrumbLink href="/patient">Records</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem sx={labelText}>
        <BreadcrumbLink href="/patient">Feedbacks</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}
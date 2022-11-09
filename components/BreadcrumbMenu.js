import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useRouter } from 'next/router'

export default function BreadcrumbMenu() {
  let currentPage = {
    color: Colour.darkBlue,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: { base: '16px', md: '18px' },
  }

  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink
          onClick={() => router.push(`/patient/${patientID}/case/${caseID}`)}
          sx={
            router.pathname === '/patient/[patientID]/case/[caseID]'
              ? currentPage
              : GlobalStyle.boldText
          }
        >
          Summary
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          onClick={() =>
            router.push(`/patient/${patientID}/case/${caseID}/record`)
          }
          sx={
            router.pathname === '/patient/[patientID]/case/[caseID]/record'
              ? currentPage
              : GlobalStyle.boldText
          }
        >
          Records
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          onClick={() =>
            router.push(`/patient/${patientID}/case/${caseID}/feedback`)
          }
          sx={
            router.pathname === '/patient/[patientID]/case/[caseID]/feedback'
              ? currentPage
              : GlobalStyle.boldText
          }
        >
          Feedbacks
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

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
  console.log(router.pathname)

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink
          onClick={() => router.push(`/patient/${patientID}/case/caseid`)}
          sx={
            router.pathname === '/patient/[patientID]/case/caseid'
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
            router.push(`/patient/${patientID}/case/caseid/record`)
          }
          sx={
            router.pathname === '/patient/[patientID]/case/caseid/record'
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
            router.push(`/patient/${patientID}/case/caseid/feedback`)
          }
          sx={
            router.pathname === '/patient/[patientID]/case/caseid/feedback'
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

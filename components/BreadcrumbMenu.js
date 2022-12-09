import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { boldText, blueText } from '../style-props/Sharedstyles'
import { useRouter } from 'next/router'

export default function BreadcrumbMenu() {
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
              ? blueText
              : boldText
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
              ? blueText
              : boldText
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
              ? blueText
              : boldText
          }
        >
          Feedbacks
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

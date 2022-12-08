import { Text, Flex, Box, Button } from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import HeadInfo from '/components/HeadInfo'
import { useRouter } from 'next/router'
import BreadcrumbMenu from '/components/BreadcrumbMenu'
import RecordModal from '/components/RecordModal'
import Record from '/components/Record'
import { useAppContext } from '/context/UserContext'
import axios from 'axios'
import url from '/url'
import jwt_decode from 'jwt-decode'
import { useState, useEffect } from 'react'
import {
  bgColor,
  layout,
  turquoiseBtn,
  recordBox,
  boldText,
  greyMediumText,
  breadcrumbFlex,
  contentBox,
} from '/style-props/Sharedstyles'

export default function Case(props) {
  const { allRecords } = props

  let total = allRecords.length + 1

  // router
  const router = useRouter()
  const patientID = router.query.patientID
  const caseID = router.query.caseID

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
  }, [])

  // count records
  const [recordAmount, setRecordAmount] = useState(allRecords.length)

  // set record modal
  const [showRecordModal, setShowRecordModal] = useState(false)
  const onClickRecord = () => setShowRecordModal(!showRecordModal)

  // const [focuskey, setFocuskey] = useState(0)

  // redirect to add record page
  const onClickAddRecord = () => {
    router.push(`/patient/${patientID}/case/${caseID}/add-record`)
  }

  return (
    <Box sx={bgColor}>
      {/* <HeadInfo
        name="Patient ID"
        patientID={patientID}
        caseID={caseID}
        caseName="Grammar addict"
        // doctor={user.name}
      />

      <Box sx={layout}>
        <Flex sx={breadcrumbFlex}>
          <BreadcrumbMenu />
          {userRole == 'patient' ? (
            <Button sx={turquoiseBtn} onClick={() => onClickAddRecord()}>
              + Record
            </Button>
          ) : null}
        </Flex>

        <Box sx={contentBox}>
          {allRecords.map((record, index) => {
            return (
              <Flex key={index} sx={recordBox} onClick={() => onClickRecord()}>
                <Text sx={boldText}>Record #{recordAmount - index}</Text>
                <Text sx={greyMediumText}>
                  {new Date(record.datetime).toLocaleString()}
                </Text>
                <Record isOpen={showRecordModal} onClose={onClickRecord} />

                
              </Flex>
            )
          })}
        </Box>
      </Box> */}
    </Box>
  )
}

export async function getServerSideProps(context) {
  const allrecordResult = await axios.get(
    'http://localhost:3000/api/recordManager/getAllRecords',
    {
      headers: {
        caseid: context.params.caseID,
      },
    }
  )

  // const recordResult = await axios.get(
  //   'http://localhost:3000/api/recordManager/getRecord',
  //   {
  //     headers: {
  //       recordid: context.params.recordID,
  //     },
  //   }
  // )
  return {
    props: {
      allRecords: allrecordResult.data,
      // getRecord: recordResult.data,
    },
  }
}

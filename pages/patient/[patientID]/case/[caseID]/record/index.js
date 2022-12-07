import {
  Text,
  Flex,
  Box,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import GlobalStyle from '/Style'
import Colour from '/Colour'
import HeadInfo from '/components/HeadInfo'
import { useRouter } from 'next/router'
import BreadcrumbMenu from '/components/BreadcrumbMenu'
import RecordModal from '/components/RecordModal'
import { useAppContext } from '/context/UserContext'
import axios from 'axios'
import url from '/url'
import { useState, useEffect } from 'react'

export default function Case(props) {
  const { getAllRecords, getRecord } = props

  let total = getAllRecords.length + 1

  console.log('This sdadas')
  console.log(props.getAllRecords)

  console.log('This is getRecord')
  console.log(props.getRecord)

  const { user } = useAppContext()
  console.log('user test', user)

  // console.log("this is getRecord")
  // console.log(getRecord)

  // console.log("This is getAllRecords  ")
  // console.log(getAllRecords)

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
  const currentPage = {
    color: Colour.darkBlue,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: { base: '16px', md: '18px' },
  }

  const router = useRouter(props)
  const patientID = router.query.patientID
  const caseID = router.query.caseID

  console.log(router)

  const onClickAddRecord = () => {
    router.push(`/patient/${patientID}/case/${caseID}/add-record`)
  }

  const [recordAmount, setRecordAmount] = useState(getAllRecords.length)

  const [focuskey, setFocuskey] = useState(0)

  const [showModal, setShowModal] = useState(false)

  const onClickRecord = () => setShowModal(!showModal)

  return (
    <Box sx={GlobalStyle.bgColor}>
      <HeadInfo
        name="Patient ID"
        patientID={patientID}
        caseID={caseID}
        caseName="Grammar addict"
        doctor={user.name}
      />

      <Box sx={GlobalStyle.layout}>
        <BreadcrumbMenu />

        <Box sx={section2}>
          <Box sx={btnPosition}>
            <Button sx={GlobalStyle.turquoiseBtn} onClick={onClickAddRecord}>
              + Record
            </Button>
          </Box>

          {getAllRecords.map((record, index) => {
            console.log(index, record.recordID)
            return (
              <Flex
                key={index}
                sx={GlobalStyle.recordBox}
                onClick={() => {
                  onClickRecord()
                  setFocuskey(index)
                }}
              >
                <Text sx={GlobalStyle.boldText}>
                  Record #{recordAmount - index}
                </Text>
                <Text sx={GlobalStyle.greyMediumText}>
                  {new Date(record.datetime).toLocaleString()}
                </Text>

                {/* {console.log(record)}
                {console.log(index)}

                {console.log(record[index])} */}
                <RecordModal
                  isOpen={showModal}
                  index={index}
                  focuskey={focuskey}
                  onClose={onClickRecord}
                  total={total}
                  record={record}
                  allrecord={getAllRecords}
                />
              </Flex>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export async function getServerSideProps(context) {
  //get recordID
  const recordID = context.params.recordID
  const caseID = context.params.caseID

  const result = await axios.get(
    'http://localhost:3000/api/recordManager/getAllRecords',
    {
      headers: {
        caseid: caseID,
      },
    }
  )

  const result2 = await axios.get(
    'http://localhost:3000/api/recordManager/getRecord',
    {
      headers: {
        recordid: recordID,
      },
    }
  )
  return {
    props: {
      getAllRecords: result.data,
      getRecord: result2.data,
      // caseList: caseList.data,
    },
  }
}

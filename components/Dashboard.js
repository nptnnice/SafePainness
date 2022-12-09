import { Text, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import axios from 'axios'
import { async } from '@firebase/util'
import url from '/url'

export default function Dashboard(props) {
  // const { painGraph } = props
  // const [painGraph, setPainGraph] = useState({
  //   dataset: [{}],
  // })
  const painGraphValue = [
    { datetime: '2022-11-01', painScale: 1 },
    { datetime: '2022-11-02', painScale: 2 },
    { datetime: '2022-11-03', painScale: 3 },
    { datetime: '2022-11-04', painScale: 4 },
    { datetime: '2022-11-05', painScale: 5 },
    { datetime: '2022-11-06', painScale: 6 },
    { datetime: '2022-11-07', painScale: 7 },
  ]

  const data = {
    // labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Pain Severity',
        fill: false,
        lineTension: 0.1,
        backgroundColor: Colour.turquoise,
        borderColor: Colour.turquoise,
        data: painGraphValue,
        parsing: {
          xAxisKey: 'datetime',
          yAxisKey: 'painScale',
        },
      },
    ],
  }
  console.log('painGraph: ', props)
  return (
    <>
      <Text sx={GlobalStyle.boldText} marginBottom="16px">
        PAIN SEVERITY PROGRESS
      </Text>
      <Box width="100%" margin="0 auto">
        <Line data={data} />
      </Box>
    </>
  )
}

export async function getServerSideProps(context) {
  const result = await axios.get(`${url}/api/caseManager/getChart`, {
    headers: {
      caseid: context.params.caseID,
    },
  })
  return {
    props: {
      painGraph: result.data,
    },
  }
}

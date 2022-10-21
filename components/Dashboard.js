import { Text, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

export default function Dashboard() {
  const [painGraph, setPainGraph] = useState({
    dataset: [{}],
  })

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Pain Severity',
        fill: false,
        lineTension: 0.1,
        backgroundColor: Colour.turquoise,
        borderColor: Colour.turquoise,
        data: [8, 7, 6, 5, 4, 3, 2],
      },
    ],
  }

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

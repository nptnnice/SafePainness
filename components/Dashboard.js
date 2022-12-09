import { Text, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

export default function Dashboard(props) {
  const { painGraph } = props
  {
    new Date(painGraph.datetime).toLocaleString()
  }
  console.log('painGraph', painGraph)
  const painGraphValue = painGraph
  console.log('painGraphValue', painGraphValue)
  const data = {
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
  return (
    <>
      <Text sx={GlobalStyle.boldText} marginBottom="16px">
        PAIN SEVERITY SUMMARY
      </Text>
      <Box width="100%" margin="0 auto">
        <Line data={data} />
      </Box>
    </>
  )
}

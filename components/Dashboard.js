import { Text, Box } from '@chakra-ui/react'
import Colour from '/style-props/SharedColour'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { boldText } from '../style-props/Sharedstyles'
import { useEffect } from 'react'

export default function Dashboard(props) {
  const { painGraph } = props

  // format timestamp to date
  useEffect(() => {
    painGraph.map((item) => {
      item.datetime = new Date(item.datetime).toDateString()
    })
  }, [])

  const painGraphValue = painGraph

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
      <Text sx={boldText} marginBottom="16px">
        PAIN SEVERITY SUMMARY
      </Text>
      <Box width="100%" margin="0 auto">
        <Line data={data} />
      </Box>
    </>
  )
}

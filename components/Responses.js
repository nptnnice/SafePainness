import { Box, Flex, Divider, Text } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'
import axios from 'axios'

export default function Responses(props) {
  const { feedback, allResponses, roleID } = props

  let flexStyle = {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
  }
  let BoxStyle = {
    padding: '16px 0px 16px 0px',
    borderBottom: '1px solid #D9D9D9',
  }

  return (
    <>
      <Box sx={BoxStyle}>
        <Flex sx={flexStyle}>
          <Text sx={GlobalStyle.labelText}>
            Feedback from Dr. {feedback.firstName} {feedback.lastName}
          </Text>
          <Text sx={GlobalStyle.greyMediumText} textAlign="right">
            {new Date(feedback.datetime).toLocaleString()}
          </Text>
        </Flex>
        <Text sx={GlobalStyle.regularText}>{feedback.message}</Text>
      </Box>

      {allResponses.map((item, index) => {
        return (
          <Box sx={BoxStyle} key={index}>
            <Flex sx={flexStyle}>
              <Text sx={GlobalStyle.labelText}>
                Response from {item.firstName} {item.lastName}
              </Text>
              <Text sx={GlobalStyle.greyMediumText} textAlign="right">
                {new Date(item.datetime).toLocaleString()}
              </Text>
            </Flex>
            <Text sx={GlobalStyle.regularText}>{item.message}</Text>
          </Box>
        )
      })}
    </>
  )
}

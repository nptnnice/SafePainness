import { Flex, Image, Text, SimpleGrid } from '@chakra-ui/react'
import Colour from '../Colour'
import GlobalStyle from '../Style'
import { PainTypes } from '../PainTypes'
import { useState } from 'react'

export default () => {
  let painBox = {
    border: '2px solid',
    borderColor: Colour.grey,
    borderRadius: '16px',
    padding: '8px 16px',
    alignItems: 'center',
    gap: '16px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'all 0.1s ease',
    _hover: {
      backgroundColor: Colour.turquoise,
      borderColor: Colour.turquoise,
      transform: 'scale(1.05)',
    },
  }
  let imgSize = {
    width: '80px',
  }
  return (
    <SimpleGrid columns={3} gap={2}>
      {PainTypes.map((item) => {
        return (
          <Flex sx={painBox}>
            <Image sx={imgSize} src={item.image} />
            <Text sx={GlobalStyle.normalText}>{item.name}</Text>
          </Flex>
        )
      })}
    </SimpleGrid>
  )
}

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Tag,
  Flex,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'
import GlobalStyle from '../Style'
import Colour from '../Colour'

export default function Notification() {
  let iconButton = {
    color: Colour.white,
    boxSize: '32px',
    cursor: 'pointer',
    transition: 'all 0.1s ease-out',
    _hover: {
      color: Colour.lightYellow,
    },
  }
  let notificationBox = {
    justifyContent: 'space-between',
    borderBottom: '2px solid',
    borderColor: Colour.grey,
    padding: { base: '8px 16px', md: '8px 20px' },
    cursor: 'pointer',
    transition: 'all 0.1s ease-out',
    width: '100%',
    height: '90px',
    _hover: {
      backgroundColor: Colour.lightGrey,
      borderColor: Colour.turquoise,
    },
  }
  let statusBox = {
    backgroundColor: Colour.green,
    color: Colour.white,
    size: 'md',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  }
  let dateText = {
    color: Colour.darkGrey,
    fontFamily: 'IBM Plex Sans',
  }
  return (
    <Popover>
      <PopoverTrigger>
        <BellIcon role="button" tabIndex="0" sx={iconButton} />
      </PopoverTrigger>
      <PopoverContent width="480px">
        <PopoverArrow />
        <PopoverBody>
          <Flex sx={notificationBox}>
            <Text sx={GlobalStyle.regularText} width="60%">
              Your case has been diagnosed
            </Text>
            <VStack align="end" spacing={6} justify="end">
              <Tag sx={statusBox}>NEW</Tag>
              <Text sx={dateText}>Tue 11 Oct 12:35 AM</Text>
            </VStack>
          </Flex>
          <Flex sx={notificationBox}>
            <Text sx={GlobalStyle.regularText} width="60%">
              Doctor has reviewed and feedback on your records
            </Text>
            <VStack align="end" spacing={6} justify="end">
              <Tag sx={statusBox}>NEW</Tag>
              <Text sx={dateText}>Tue 11 Oct 12:35 AM</Text>
            </VStack>
          </Flex>
          <Flex sx={notificationBox}>
            <Text sx={GlobalStyle.regularText} width="60%">
              Patient has responsed to your feedback
            </Text>
            <VStack align="end" spacing={6} justify="end">
              <Text sx={dateText}>Tue 11 Oct 12:35 AM</Text>
            </VStack>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

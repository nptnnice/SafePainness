import GlobalStyle from '../Style'
import Colour from '../Colour'
import { useState } from 'react'
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid,
  GridItem,
  Box,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  chakra,
  Center,
  Flex,
} from '@chakra-ui/react'

export default function PainScaleModal({ isOpen, onClose }) {
  let modalStyle = {
    maxWidth: '800px',
    Height: '600px',
    width: '90%',
    borderRadius: '24px',
    padding: { base: '16px', md: '24px' },
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent sx={modalStyle}>
        <ModalCloseButton />
        <ModalHeader sx={GlobalStyle.headingText}>
          How to rate the pain scale
        </ModalHeader>

        <ModalBody>
          <Grid
            height="100%"
            gridTemplateColumns="80px 1fr"
            gridTemplateRows="repeat(4, auto)"
            gap="16px"
          >
            <GridItem rowSpan={4} colSpan={1}>
              <Box
                width="100%"
                height="100%"
                backgroundImage="linear-gradient(green, orange, red)"
              ></Box>
            </GridItem>
            <GridItem>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>0</chakra.span> - Pain
                free.
              </Text>
            </GridItem>
            <GridItem>
              <Text sx={GlobalStyle.boldText}>MILD PAIN</Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>1</chakra.span> - Pain is
                very mild, barely noticeable.
              </Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>2</chakra.span> - Minor
                pain. Annoying and may gave occasional stronger twinges.
              </Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>3</chakra.span> - Pain is
                noticeable and distracting; however, you can get used to it and
                adapt.
              </Text>
            </GridItem>
            <GridItem>
              <Text sx={GlobalStyle.boldText}>MODERATE PAIN</Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>4</chakra.span> - If you
                are deeply involved in an activity, it can be ignored for a
                period of time, but is still distracting.
              </Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>5</chakra.span> - It
                can’t be ignored for more than a few minutes, but with effort
                you still can manage to work or participate in some social
                activities.
              </Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>6</chakra.span> -
                Moderately strong pain that interferes with normal daily
                activities. Difficulty concentrating..
              </Text>
            </GridItem>
            <GridItem>
              <Text sx={GlobalStyle.boldText}>SEVERE PAIN</Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>7</chakra.span> - Severe
                pain that dominates your senses and significantly limits your
                ability to perform normal daily activities. Interferes with
                sleep.
              </Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>8</chakra.span> - Intense
                pain. Physical activity is severely limited. Conversing requires
                great effort.
              </Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>9</chakra.span> -
                Excruciating pain. Unable to converse. Crying out and/or moaning
                uncontrollably.
              </Text>
              <Text sx={GlobalStyle.regularText}>
                <chakra.span sx={GlobalStyle.boldText}>10</chakra.span> -
                Unspeakable pain. Bedridden and possibly delirious. Very few
                people will ever experience this level of pain.
              </Text>
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

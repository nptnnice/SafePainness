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
  chakra,
} from '@chakra-ui/react'
import { boldText, regularText, headingText } from '../style-props/Sharedstyles'
import { modalStyle } from '../style-props/Historytakingstyles'

export default function PainScaleModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent sx={modalStyle}>
        <ModalCloseButton />
        <ModalHeader sx={headingText}>How to rate the pain scale</ModalHeader>

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
              <Text sx={regularText}>
                <chakra.span sx={boldText}>0</chakra.span> - Pain free.
              </Text>
            </GridItem>
            <GridItem>
              <Text sx={boldText}>MILD PAIN</Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>1</chakra.span> - Pain is very mild,
                barely noticeable.
              </Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>2</chakra.span> - Minor pain.
                Annoying and may gave occasional stronger twinges.
              </Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>3</chakra.span> - Pain is noticeable
                and distracting; however, you can get used to it and adapt.
              </Text>
            </GridItem>
            <GridItem>
              <Text sx={boldText}>MODERATE PAIN</Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>4</chakra.span> - If you are deeply
                involved in an activity, it can be ignored for a period of time,
                but is still distracting.
              </Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>5</chakra.span> - It can’t be ignored
                for more than a few minutes, but with effort you still can
                manage to work or participate in some social activities.
              </Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>6</chakra.span> - Moderately strong
                pain that interferes with normal daily activities. Difficulty
                concentrating..
              </Text>
            </GridItem>
            <GridItem>
              <Text sx={boldText}>SEVERE PAIN</Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>7</chakra.span> - Severe pain that
                dominates your senses and significantly limits your ability to
                perform normal daily activities. Interferes with sleep.
              </Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>8</chakra.span> - Intense pain.
                Physical activity is severely limited. Conversing requires great
                effort.
              </Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>9</chakra.span> - Excruciating pain.
                Unable to converse. Crying out and/or moaning uncontrollably.
              </Text>
              <Text sx={regularText}>
                <chakra.span sx={boldText}>10</chakra.span> - Unspeakable pain.
                Bedridden and possibly delirious. Very few people will ever
                experience this level of pain.
              </Text>
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

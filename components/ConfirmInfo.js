import { Text, SimpleGrid, Input, Button, Box, FormControl, FormLabel } from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import Style from '../Style'

export default () => {

    let whiteBtn = {
        color: Colour.lightBlue,
        padding: '30px 40px',
        width: '35%',
        fontFamily: 'Lato',
        fontSize: '22px',
        fontWeight: 'bold',
        borderRadius: '40px',
        border: '4px solid',
        borderColor: Colour.lightBlue,
        boxSizing: 'border-box',
        transition: 'all 0.2s ease',
        filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
        _hover: {
          borderColor: Colour.turqoise,
          color: Colour.turqoise,
        },
      }
    
      let blueBtn = {
        backgroundColor: Colour.lightBlue,
        color: Colour.white,
        padding: '30px 40px',
        fontFamily: 'Lato',
        width: '35%',
        fontSize: '22px',
        fontWeight: 'bold',
        borderRadius: '40px',
        border: '4px solid',
        borderColor: Colour.lightBlue,
        boxSizing: 'border-box',
        transition: 'all 0.2s ease',
        filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))',
        _hover: {
          backgroundColor: Colour.turqoise,
          borderColor: Colour.turqoise,
        },
      }
    return (
        <>
            <Text sx={GlobalStyle.headingText} marginTop= '40px' marginLeft='280px'>Contact Information</Text>            
            <SimpleGrid columns={2} marginLeft='319px'>
                <Box>
                  <FormControl isRequired>
                    <FormLabel marginTop='20px' width='80%'  sx={GlobalStyle.normalText}>Phone</FormLabel>
                    <Input width='80%' type="tel" style={GlobalStyle.inputText} />
                  </FormControl>
                </Box>
                <Box>
                    <Text marginTop='20px'  width='80%'  sx={GlobalStyle.normalText}>Email(Optional)</Text>
                    <Input width='80%' type="email" style={GlobalStyle.inputText} />
                </Box>
            </SimpleGrid>
            <SimpleGrid columns={2} marginTop='50px' marginLeft='200px' marginBottom='13px'>
                <Button width='20%' marginLeft='650px' sx={whiteBtn}>Cancel</Button>
                <Button width='20%' marginLeft='300px' sx={blueBtn}>Create</Button>
            </SimpleGrid>
        </>
    )
}

import { Text, Input,Button, SimpleGrid, Box ,Flex, Image, FormControl, FormLabel} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

export default () => {
    let imgStyle = {
        width: '120px',
        height: '120px',
        borderRadius: '100%',
        objectFit: 'cover',
      }
      let whiteBtn = {
        color: Colour.lightBlue,
        padding: '30px 40px',
        width: '24%',
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
        width: '24%',
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
//<Input width='80%' type="text" style={GlobalStyle.inputText} />
    return (
        <Box marginTop='-40px' position='relative'>
        <Flex>
            <Text sx={GlobalStyle.headingText} marginTop= '12%' marginLeft='-40px'>Basic Information</Text>
            <Image marginTop='8%' position='absolute' right='0' sx={imgStyle} src="/images/Cutting.png" />
        </Flex>
            <SimpleGrid columns={2} spacing={8} marginTop='24px'>
                <FormControl isRequired>
                    <Box>
                        <FormLabel sx={GlobalStyle.normalText}>First Name</FormLabel>
                        <Input type="text" style={GlobalStyle.inputStyle} />
                    </Box>
                </FormControl>
                <FormControl isRequired>
                    <Box>
                        <FormLabel sx={GlobalStyle.normalText}>Last Name</FormLabel>
                        <Input type="text" style={GlobalStyle.inputStyle} />
                    </Box>
                </FormControl>
                <FormControl isRequired>
                    <Box>
                        <FormLabel sx={GlobalStyle.normalText}>Username</FormLabel>
                        <Input type="text" style={GlobalStyle.inputStyle} />
                    </Box>
                </FormControl>
                <FormControl isRequired>
                    <Box>
                        <FormLabel sx={GlobalStyle.normalText}>Password</FormLabel>
                        <Input type="password" style={GlobalStyle.inputStyle} />
                    </Box>
                </FormControl>
                <FormControl isRequired>
                    <Box>
                        <FormLabel sx={GlobalStyle.normalText}>Date of birth</FormLabel>
                        <Input placeholder="Select Date"size="md"type="date" style={GlobalStyle.inputStyle}/>  
                    </Box>
                </FormControl>
                <FormControl isRequired>
                    <Box>
                        <FormLabel sx={GlobalStyle.normalText}>Citizen ID</FormLabel>
                        <Input type="number" style={GlobalStyle.inputStyle} />
                    </Box>
                </FormControl>
            </SimpleGrid>
            <SimpleGrid column={1} spacing={5} marginTop='24px' >
                <Box>
                    <FormControl isRequired>
                        <FormLabel sx={GlobalStyle.normalText}>Medical License Number</FormLabel>
                        <Input type="text" style={GlobalStyle.inputStyle} />
                        <Text sx={GlobalStyle.normalTextNoColor} color='#8A8A8A'>Doctors must be verified by the medical license number</Text>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl isRequired>
                        <FormLabel sx={GlobalStyle.normalText}>Department</FormLabel>
                        <Input type="text" style={GlobalStyle.inputStyle} />
                    </FormControl>
                </Box>
            </SimpleGrid>
            <Text sx={GlobalStyle.headingText} marginTop= '40px' marginLeft='-40px'>Contact Information</Text>            
            <Flex gap={8} marginTop='16px'>
                    <FormControl isRequired>
                      <FormLabel marginBottom='0px' sx={GlobalStyle.normalText}>Phone</FormLabel>
                      <Input type="tel" sx={GlobalStyle.inputStyle} />
                    </FormControl>
                    <FormControl isRequired>
                      <Text sx={GlobalStyle.normalText}>Email (Optional)</Text>
                      <Input type="email" sx={GlobalStyle.inputStyle} />
                    </FormControl>
            </Flex>
            <Box position='relative'>
              <Flex marginTop='40px'>         
                <Button position='absolute' right='0' sx={whiteBtn}>Cancel</Button>
                <Button position='absolute' right='64' sx={blueBtn}>Create</Button>
              </Flex>
            </Box>
        
        </Box>
    )
}
import { Text, Input, SimpleGrid, Box ,Flex, Image, FormControl, FormLabel} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'

export default () => {
    let imgStyle = {
        width: '141px',
        height: '141px',
        borderRadius: '100%',
        objectFit: 'cover',
      }    
//<Input width='80%' type="text" style={GlobalStyle.inputText} />
    return (
        <Box marginTop='-100px'>
        <Flex>
            <Text sx={GlobalStyle.headingText} marginTop= '12%' marginLeft='280px'>Basic Information</Text>
            <Image marginTop='8%' marginLeft='40%' sx={imgStyle} src="/images/Cutting.png" />
        </Flex>
        <FormControl isRequired>
            <SimpleGrid columns={2} spacing={5} marginTop='-5px' marginLeft='319px'>
                <Box>
                    <FormLabel width='80%'  sx={GlobalStyle.normalText}>First Name</FormLabel>
                    <Input width='80%' type="text" style={GlobalStyle.inputText} />
                </Box>
                <Box>
                    <FormLabel width='80%'  sx={GlobalStyle.normalText}>Last Name</FormLabel>
                    <Input width='80%' type="text" style={GlobalStyle.inputText} />
                </Box>
                <Box>
                    <FormLabel width='80%'  sx={GlobalStyle.normalText}>Username</FormLabel>
                    <Input width='80%' type="text" style={GlobalStyle.inputText} />
                </Box>
                <Box>
                    <FormLabel width='80%'  sx={GlobalStyle.normalText}>Password</FormLabel>
                    <Input width='80%' type="password" style={GlobalStyle.inputText} />
                </Box>
                <Box>
                    <FormLabel width='80%' sx={GlobalStyle.normalText}>Date of birth</FormLabel>
                    <Input width='80%' placeholder="Select Date"size="md"type="date"/>  
                </Box>
                <Box>
                    <FormLabel width='80%' sx={GlobalStyle.normalText}>Citizen ID</FormLabel>
                    <Input width='80%' type="number" style={GlobalStyle.inputText} />
                </Box>
            </SimpleGrid>
            <SimpleGrid column={1} spacing={5} marginTop='20px' marginLeft='319px' >
                <Box>
                    <FormLabel width='80%' sx={GlobalStyle.normalText}>Medical License Number</FormLabel>
                    <Input width='60%' type="text" style={GlobalStyle.inputText} />
                    <Text sx={GlobalStyle.normalTextNoColor} color='#8A8A8A'>Doctors must be verified by the medical license number</Text>
                </Box>
                <Box>
                    <FormLabel width='80%' sx={GlobalStyle.normalText}>Department</FormLabel>
                    <Input width='60%' type="text" style={GlobalStyle.inputText} />
                </Box>
            </SimpleGrid>
        </FormControl>
        </Box>
    )
}
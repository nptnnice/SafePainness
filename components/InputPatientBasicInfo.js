import { Text, Input, SimpleGrid, Box ,Flex, Select, Stack, Textarea, FormControl, FormLabel} from '@chakra-ui/react'
import GlobalStyle from '../Style'
import Colour from '../Colour'
import { SERVERLESS_DIRECTORY } from 'next/dist/shared/lib/constants'

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
            <Text sx={GlobalStyle.headingText} marginTop= '10%' marginLeft='280px'>Basic Information</Text>
        </Flex>
        <FormControl isRequired>
            <SimpleGrid columns={2} spacing={5} marginTop='20px' marginLeft='319px'>
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
                    <Input width='80%' placeholder="Select Date" size="md" type="date"/>  
                </Box>
                <Box>
                    <SimpleGrid columns={2} spacing='-20px' minChildWidth='250px'>
                        <Box>
                            <FormLabel width='30%' sx={GlobalStyle.normalText}>Sex</FormLabel>
                            <Select width='60%' placeholder=' '>
                                <option>Female</option>
                                <option>Male</option>
                                <option>?</option>
                                <option>??</option>
                            </Select>
                        </Box>
                        <Box>
                            <FormLabel width='80%' sx={GlobalStyle.normalText}>Blood group</FormLabel>
                            <Select width='60%' placeholder=' '>
                                <option>O Positive</option>
                                <option>O Negative</option>
                                <option>A Positive</option>
                                <option>A Negative</option>
                                <option>B Positive</option>
                                <option>B Negative</option>
                                <option>AB Positive</option>
                                <option>AB Negative</option>
                            </Select>                        
                        </Box>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
            <SimpleGrid column={1} spacing={5} marginTop='20px' marginLeft='319px' >
                <Box>
                    <FormLabel width='80%' sx={GlobalStyle.normalText}>Citizen ID</FormLabel>
                    <Input width='60%' type="number" style={GlobalStyle.inputText} />
                </Box>
                <Box>
                    <Stack direction='row' spcing={1}>
                        <FormLabel width='17%' sx={GlobalStyle.normalText}>Medical conditions</FormLabel>
                        <Text width='100%' color='#8A8A8A' sx={GlobalStyle.normalTextNoColor}>(Fill the blank with dash (-), if the answer is no.)</Text>
                    </Stack>
                    <Textarea width='60%' type="text" style={GlobalStyle.inputText} />
                    <Stack direction='row' spcing={1} marginTop='2%'>
                        <FormLabel width='11%' sx={GlobalStyle.normalText}>Drug allergy</FormLabel>
                        <Text width='100%' color='#8A8A8A' sx={GlobalStyle.normalTextNoColor}>(Fill the blank with dash (-), if the answer is no.)</Text>
                    </Stack>
                    <Textarea width='60%' type="text" style={GlobalStyle.inputText} />
                </Box>
            </SimpleGrid>
        </FormControl>
        </Box>
    )
}
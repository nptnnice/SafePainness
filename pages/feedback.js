import {
    Text,
    Box,
    Flex,
    Button,
    Textarea,
    FormLabel,
    FormControl,
    VStack,
} from '@chakra-ui/react'
import HeadCenter from '../components/Headcenter'
import GlobalStyle from '../Style'

export default () => {

    
    return (
        <>
            <HeadCenter topic="feedback" />
            <VStack sx={GlobalStyle.layout} spacing={16}>
                <Box sx={GlobalStyle.infoBox}>

                </Box>
                <Box sx={GlobalStyle.infoBox}>
                    <FormControl>
                        <FormLabel sx={GlobalStyle.labelText}>
                            Response to your doctor
                        </FormLabel>
                        <Textarea sx={GlobalStyle.inputStyle} />
                    </FormControl>
                </Box>
                {/* ==== Button ==== */}
                <Box>
                    <Button sx={GlobalStyle.saveBtn}>Send</Button>
                </Box>
            </VStack>

        </>
    );
}
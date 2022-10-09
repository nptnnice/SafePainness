import { Text, Flex, VStack, Image, Box } from '@chakra-ui/react'
import HeaderCreateDocAcc from '../components/HeaderCreateDocAcc'
import InputBasicInfo from '../components/InputBasicInfo'
import ConfirmInfo from '../components/ConfirmInfo'
import GlobalStyle from '../Style'


export default () => {

    let Center = {
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <Box sx={Center}>
            <HeaderCreateDocAcc/>
            <InputBasicInfo/>
            <ConfirmInfo/>
        </Box>
    )    
}

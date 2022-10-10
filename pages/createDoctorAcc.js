import { Box } from '@chakra-ui/react'
import HeaderCreateDocAcc from '../components/HeaderCreateDocAcc'
import InputBasicInfo from '../components/InputBasicInfo'
import GlobalStyle from '../Style'


export default () => {

    return (
        <Box sx={GlobalStyle.layout}>
            <HeaderCreateDocAcc/>
            <InputBasicInfo/>
        </Box>
    )    
}

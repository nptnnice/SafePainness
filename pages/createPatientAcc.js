import { Box } from '@chakra-ui/react'
import HeaderCreatePaAcc from '../components/HeaderCreatePaAcc'
import InputPatientBasicInfo from '../components/InputPatientBasicInfo'
import GlobalStyle from '../Style'


export default () => {

    return (
        <Box sx={GlobalStyle.layout} >
            <HeaderCreatePaAcc/>
            <InputPatientBasicInfo/>
        </Box>
    )    
}

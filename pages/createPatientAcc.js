import { Box } from '@chakra-ui/react'
import HeaderCreatePaAcc from '../components/HeaderCreatePaAcc'
import InputPatientBasicInfo from '../components/InputPatientBasicInfo'
import ConfirmInfo from '../components/ConfirmInfo'
import GlobalStyle from '../Style'


export default () => {

    return (
        <Box>
            <HeaderCreatePaAcc/>
            <InputPatientBasicInfo/>
            <ConfirmInfo/>
        </Box>
    )    
}

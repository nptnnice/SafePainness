import { Box, Flex, Divider, Text } from '@chakra-ui/react';
import GlobalStyle from '../Style';
import { ResponseList } from '../ResponseList';

export default () => {
    let flexStyle = {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
    }
    return (
        <>
            {ResponseList.map((response) => {
                return (
                    <>
                        <Flex sx={flexStyle}>
                            <Text sx={GlobalStyle.labelText}>{response.responsefrom}</Text>
                            <Text sx={GlobalStyle.greyMediumText} textAlign="right">
                                {response.responsedate}
                            </Text>
                        </Flex>
                        <Text sx={GlobalStyle.regularText}>{response.responsemessage}</Text>
                        
                    </>   
                   
                );
            })}
        </>
    )
}
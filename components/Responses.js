import { Box, Flex, Divider, Text } from '@chakra-ui/react';
import GlobalStyle from '../Style';
import Colour from '../Colour';
import { ResponseList } from '../ResponseList';

export default function Responses() {
    let flexStyle = {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
    }
    let BoxStyle = {
        padding: '16px 0px 16px 0px',
        borderBottom: '1px solid #D9D9D9',

    }

    return (
        <>
            {ResponseList.map((response, index) => {
                return (
                    <Box sx={BoxStyle}>
                        <Flex sx={flexStyle} key={index}>
                            <Text sx={GlobalStyle.labelText}>{response.responsefrom}</Text>
                            <Text sx={GlobalStyle.greyMediumText} textAlign="right">
                                {response.responsedate}
                            </Text>
                        </Flex>
                        <Text sx={GlobalStyle.regularText}>{response.responsemessage}</Text>
                        {/* <Divider sx={Global.divider} /> */}
                    </Box>

                );
            })}
        </>
    )
}

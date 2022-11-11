import { Box, Flex, Divider, Text } from '@chakra-ui/react';
import GlobalStyle from '../Style';
import Colour from '../Colour';
import { useState } from 'react'
import axios from 'axios';
import { ResponseList } from '../ResponseList';

export default function Responses({getAllResponse}) {

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
            {getAllResponse.map((item, index) => {
                return (
                    <Box sx={BoxStyle} key={index}>
                        <Flex sx={flexStyle} >
                            <Text sx={GlobalStyle.labelText}>Response from {item.senderID}</Text>
                            <Text sx={GlobalStyle.greyMediumText} textAlign="right">
                                {item.datetime}
                            </Text>
                        </Flex>
                        <Text sx={GlobalStyle.regularText}>{item.message}</Text>
                        {/* <Divider sx={Global.divider} /> */}
                    </Box>

                );
            })} 
        </>
    )
}

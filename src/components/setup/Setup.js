import React from 'react';
import {Box, } from "@mui/material";

export default function Setup() {
    return (
        <Box display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
        justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Box>oops no data found ! </Box>
        </Box>
    );
};
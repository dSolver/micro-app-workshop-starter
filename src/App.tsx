import './App.scss';

import React, { useState } from 'react';


import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import HelloWidget from './components/HelloWidget/HelloWidget';

function App() {

    return (
        <Box className="App">
            <Stack direction={'row'} gap={2} height={"100%"}>
              
                <HelloWidget sayHello='stranger' />
            </Stack>

        </Box>
    );
}

export default App;

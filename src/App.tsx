/**
 * Typically your App.tsx is not exposed to the host, but it is a good way to test your widget in isolation.
 */

import './App.scss';

import { Box, Stack } from '@mui/material';

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

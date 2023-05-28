/**
 * Typically your App.tsx is not exposed to the host, but it is a good way to test your widget in isolation.
 */
import React from 'react';
import './App.scss';

import { Box, Stack, Typography } from '@mui/material';
import {
    createBrowserRouter,
    createHashRouter,
    Outlet,
    RouteObject,
    RouterProvider,
} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import routes from './routes';

const router = createHashRouter(routes)

function App() {
    return (
        <Box className="App">
            <RouterProvider router={router} />
        </Box>
    );
}

export default App;

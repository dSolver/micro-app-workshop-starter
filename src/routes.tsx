import React from 'react';
import { Stack, Typography } from "@mui/material"
import { Outlet, RouteObject } from "react-router-dom"
import HelloWidget from './components/HelloWidget/HelloWidget';
import { UserPage } from './components/UserPage/UserPage';

export default [
    {
        path: "/starter",
        element: (
            <Stack direction={'column'} padding={2} gap={2} height={"100%"}>
                <HelloWidget sayHello='stranger' />
            </Stack>)
    },
    {
        path: "/starter/:userId",
        element: (<UserPage />)
    },
    {
        path: "*",
        element: <Typography>404, page does not exist</Typography>
    }
] as RouteObject[]
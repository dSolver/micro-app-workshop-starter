import React from 'react';
import { Stack, Typography } from "@mui/material"
import { Outlet, RouteObject } from "react-router-dom"
import HelloWidget from './components/HelloWidget/HelloWidget';

export default [
    {
        path: "/starter",
        element: (
            <Stack direction={'column'} padding={2} gap={2} height={"100%"}>
                <HelloWidget sayHello='stranger' />
                <Outlet />
            </Stack>),
        children: [
            {
                path: "test",
                element: (<Stack direction={'row'} gap={2} height={"100%"}><Typography>Test</Typography></Stack>)
            },
        ]
    },
    {
        path: "*",
        element: <Typography>404, page does not exist</Typography>
    }
] as RouteObject[]
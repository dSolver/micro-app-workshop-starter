/**
 * This is a demonstration of inject routing via module federation
 * 
 * Note: We need to specify the path to the widget by what webpack's mapping is.
 * 
 * Question: Since UserPage was not directly exposed via module federation, will the routing work?
 * 
 * Question 2: Will UserPage be available remotely without routing?
 */
import React from 'react';
import { Stack, Typography } from "@mui/material"
import { Outlet, RouteObject } from "react-router-dom"
import { UserPage } from './components/UserPage/UserPage';
import HelloWidget from './components/HelloWidget/HelloWidget';

export default [
    {
        path: "/starter", // please change this to your alias
        element: (
            <Stack direction={'column'} padding={2} gap={2} height={"100%"}>
                <HelloWidget sayHello='stranger' />
            </Stack>),
        children: [
            {
                path: "test",
                element: (<Stack direction={'row'} gap={2} height={"100%"}><Typography>Test</Typography></Stack>)
            },
        ]
    },
    {
        path: "/starter/:userId", // please change this to your alias
        element: (
            <UserPage />
        )
    },
    {
        path: "*",
        element: <Typography>Starter Package - 404, page does not exist</Typography>
    }
] as RouteObject[]
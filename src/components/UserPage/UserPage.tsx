import React from 'react';

import { Stack, Typography } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import { remoteWidget } from '../../remoteWidget';

export const UserPage = () => {


    const params = useParams();

    console.log(params);
    return (
        <Stack direction={'column'} padding={2} gap={2} height={"100%"}>
            <Typography variant={'h4'}>User Page: {params.userId}</Typography>
            {
                remoteWidget('./components/HelloWidget/HelloWidget.tsx', { sayHello: params.userId })
            }
            <Outlet />
        </Stack>)

}
/**
 * An example of a widget where we build the components assuming it will be loaded remotely
 * 
 * It demonstrates the example of loading in a remote component, ContactCard
 * 
 * If you take a close look at the federation.config.js, you'll notice that this component is *not* explicitly listed
 * 
 * Yet, if you go to the /starter/abc page on the host, you'll see it. Why? Because the routing *is* remotely loaded,
 * and the routing has a reference to this component.
 */

import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import loadable from '@loadable/component';
import HelloWidget from '../HelloWidget/HelloWidget';
const ContactCard = loadable(() => import('Shared/ContactCard'), {
    fallback: (<Typography>Loading Contact Card...</Typography>)
})

export const UserPage = () => {
    const params = useParams();

    return (
        <Stack direction={'column'} padding={2} gap={2} height={"100%"}>
            <Typography variant={'h4'}>User Page: {params.userId}</Typography>
            <Box>
                <ContactCard
                    name={params.userId ?? 'John Doe'}
                    email={params.userId + '@example.com'}
                    image={'https://picsum.photos/1200/300'}
                />

            </Box>

            <HelloWidget sayHello={params.userId ?? "stranger"} />

        </Stack>)

}
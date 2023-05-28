import React from 'react'
import { Box, Typography } from '@mui/material'
import { withErrorBoundary } from 'react-error-boundary'

import "./HelloWidget.scss"
import { Notes } from '../Notes/Notes'
import { createBrowserRouter } from 'react-router-dom'
export interface HelloWidgetProps {
    sayHello: string
}

const HelloWidget = withErrorBoundary((props: HelloWidgetProps) => {
    
    return (
        <Box className="HelloWidget" data-package-id="starter">
            <Typography variant="h3">Hello {props.sayHello}</Typography>
            <Typography variant="body1">This widget is hosted on {origin}</Typography>
            <Notes userId={props.sayHello} />
        </Box>
    )
}, {
    fallback: <div>HelloWidget failed to load</div>,
    onError(error, componentStack) {
        console.error(error);
        console.error(componentStack);
        // should send error to logging service
    }
});


export default HelloWidget
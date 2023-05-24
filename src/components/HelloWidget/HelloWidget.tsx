import React from 'react'
import { Box, Typography } from '@mui/material'
import { withErrorBoundary } from 'react-error-boundary'

import "./HelloWidget.scss"
export interface HelloWidgetProps {
    sayHello: string
}

const HelloWidget = withErrorBoundary((props: HelloWidgetProps) => {

    return (
        <Box className="HelloWidget" data-package-id="starter">
            <Typography variant="h1">Hello {props.sayHello}</Typography>
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
/**
 * A sample widget, very simple in nature, which accepts a name and says hello.
 * 
 * This is the first widget we'll look at in the workshop.
 */

import React from 'react'
import { Box, Typography } from '@mui/material'
import { withErrorBoundary } from 'react-error-boundary'

import "./HelloWidget.scss"
import { Notes } from '../Notes/Notes'



export interface HelloWidgetProps {
    sayHello: string
}

// withErrorBoundary is a nice way to make the widget more robust, as errors inside the widget will not
// crash the entire host. It is a good idea to wrap your widget in this.

// alternatively, you can use the <ErrorBoundary> component directly, but this is a bit more convenient

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
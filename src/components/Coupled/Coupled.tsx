import React from 'react';
import { CommunicationService } from '../../@types/CommunicationService';
import { Typography } from '@mui/material';
import { withErrorBoundary } from 'react-error-boundary';

export interface CoupledProps {
    service: CommunicationService;
}

export const Coupled = withErrorBoundary(({ service }: CoupledProps) => {

    return (
        <div>
            <Typography variant="h5">Tightly Coupled Component</Typography>

            <Typography variant="body1">We use an injected service from another package to get the current username: {
                service.getUserName()
            }</Typography>
        </div>
    )
}, {
    fallback: <div>Coupled ran into issues</div>,
    onError(error, componentStack) {
        console.error(error);
        console.error(componentStack);
        // should send error to logging service
    }
})

export default Coupled
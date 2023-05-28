import React from 'react';
import loadable from "@loadable/component";
import { Typography } from "@mui/material";

// We will use @loadable/component's dynamic import to load the widget at runtime
export const remoteWidget = (w: string, props: any) => {
    const Widget = loadable(() => import(`${w}`), {
        fallback: <Typography>Loading {w} from Starter...</Typography>,
    }) as React.FC<any>;

    return <Widget {...props} />
}

import React from "react";
import {Zoom} from "@mui/material";

export interface IAnimateZoom {
    icon: React.ReactElement<any, any>,
    isActive: boolean,
    out?: boolean
}

const AnimateZoom: React.FC<IAnimateZoom> = ({icon, isActive, out}) => {
    return (
        <Zoom in={isActive} unmountOnExit timeout={{
            enter: out ? 100 : 500,
            exit: !out ? 0 : 0
        }} style={{
            transitionDelay: `${isActive && !out ? 100 : 0}ms`
        }} easing={{
            enter: 'cubic-bezier(0,0,.61,1.58)',
            exit: 'linear'
        }}>{icon}</Zoom>
    )
}

export default AnimateZoom;
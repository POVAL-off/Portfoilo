import {StepIconProps, styled} from "@mui/material";
import React from "react";

const StepTruncRoot = styled('div')(
    ({theme}) => ({
        display: 'flex',
        height: 22,
        alignItems: 'center',
        '& .StepTrunc': {
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: `15px solid #FFF4`,
        },
        '& .StepTrunc-completed': {
            borderTop: `15px solid ${theme.palette.primary.main}`
        },
        '& .StepTrunc-active': {
            borderTop: `15px solid ${theme.palette.primary.light}`
        },
    }),
);

export function StepTrunc(props: StepIconProps) {
    const {active, completed, className} = props;

    return (
        <StepTruncRoot className={className}>
            <div className={`StepTrunc StepTrunc${completed ? '-completed' : ''}${active ? '-active' : ''}`}/>
        </StepTruncRoot>
    );
}
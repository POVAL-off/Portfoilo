import React, {useEffect, useState} from "react";
import {LinearProgress as MuiLinearProgress, linearProgressClasses, LinearProgressProps, styled} from "@mui/material";

const LinearProgressStyled = styled(MuiLinearProgress)(({theme}) => ({
    height: 16,
    borderRadius: 20,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#FFFFFF99'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 20,
        backgroundColor: theme.palette.primary.main,
        transition: '1s ease-in-out'
    }
}));

const LinearProgress: React.FC<LinearProgressProps> = ({ value, ...props }) => {
    const [animateValue, setAnimateValue] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimateValue(value || 0), 1);
    }, [value]);

    return (
        <LinearProgressStyled value={animateValue} {...props} />
    )
}

export default React.memo(LinearProgress);
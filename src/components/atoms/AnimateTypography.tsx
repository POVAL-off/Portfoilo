import React from 'react'
import {Typography, TypographyProps} from "@mui/material";

interface IAnimateTypography extends TypographyProps {
    text?: string;
}

const AnimateTypography: React.FC<IAnimateTypography> = ({children, text, ...props}) => {

    return (
        <Typography className="animate-typography" display="flex" {...props}>
            {(text || children || '').toString().split('').map(element => (
                <p className='animate-typography-symbol' style={{
                    margin: 0,
                    padding: .5,
                }}>{element === ' ' ? ' ' : element}</p>
            ))}
        </Typography>
    );
};

export default AnimateTypography;
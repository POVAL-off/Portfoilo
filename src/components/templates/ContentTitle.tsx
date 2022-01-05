import React from 'react';
import {Box, Typography} from "@mui/material";

interface IContentTitleProps {
    title: string;
    titleIcon?: React.ReactNode;
}

const ContentTitle: React.FC<IContentTitleProps> = ({ title, titleIcon, children }) => {
    return (
        <Box className="content-title">
            <Box className="title-container">
                {titleIcon}
                <Typography style={{
                    fontSize: 40,
                    color: '#fff'
                }}> {title} </Typography>
            </Box>
            <Box className="content-container">
                {children}
            </Box>
        </Box>
    );
};

export default ContentTitle;
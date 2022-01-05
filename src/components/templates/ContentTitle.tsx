import React from 'react';
import {Box, SvgIcon, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";
import {SidebarItems} from "../../settings/components/sidebar";

interface IContentTitleProps {
    title?: string;
    titleIcon?: React.ReactNode | boolean;
}

const ContentTitle: React.FC<IContentTitleProps> = ({title, titleIcon, children}) => {
    const location = useLocation();
    const titleInPath = SidebarItems.find(element => location.pathname?.includes(element.link) && element.link !== '/');

    return (
        <Box className="content-title">
            <Box className="title-container">
                {titleIcon !== false && (<SvgIcon style={{
                    position: 'absolute',
                    width: 150,
                    height: 150,
                    transform: 'translateY(-30%)',
                    color: '#8388B844'
                }}>
                    {titleIcon || titleInPath?.borderIcon}
                </SvgIcon>)}
                <Typography style={{
                    fontSize: 40,
                    color: '#fffc'
                }}> {title || titleInPath?.name} </Typography>
            </Box>
            <Box className="content-container">
                {children}
            </Box>
        </Box>
    );
};

export default ContentTitle;
import React from 'react';
import {Link} from "react-router-dom";
import {Box, IconButton, Typography} from "@mui/material";
import AnimateZoom from "../atoms/AnimateZoom";
import {ISidebarItem} from "../../interfaces/sidebar";

interface ISidebarItemProps {
    item: ISidebarItem,
    active: boolean;
}

const SidebarItem: React.FC<ISidebarItemProps> = ( { item, active } ) => {
    return (
        <Box className='sidebar-item'>
            <Link to={item.link} className='sidebar-item-link'>
                <IconButton className='sidebar-item-button' key={item.id} size="large" color={'primary'}>
                    <AnimateZoom icon={item.icon} isActive={active} />
                    <AnimateZoom icon={item.borderIcon} isActive={!active} out/>
                </IconButton>
            </Link>
            <Typography className={`sidebar-item-text ${active && 'active'}`}>
                {item.name}
            </Typography>
        </Box>
    );
};

export default SidebarItem;
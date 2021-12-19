import React from 'react';
import {Box, IconButton, Typography, Zoom} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import InfoIcon from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {Link, useLocation} from "react-router-dom";

interface ISidebarItems {
    id: string | number;
    name: string;
    link: string;
    icon: React.ReactElement<any, any>;
    borderIcon: React.ReactElement<any, any>;
}

const SidebarItems: ISidebarItems[] = [
    {id: 1, name: 'Home', link: '/', icon: <HomeIcon/>, borderIcon: <HomeOutlinedIcon/>},
    {id: 2, name: 'Skills', link: '/skills', icon: <SchoolIcon/>, borderIcon: <SchoolOutlinedIcon/>},
    {id: 3, name: 'Projects', link: '/projects', icon: <WorkIcon/>, borderIcon: <WorkOutlineOutlinedIcon/>},
    {id: 4, name: 'About me', link: '/about-me', icon: <ContactMailIcon/>, borderIcon: <ContactMailOutlinedIcon/>},
    {id: 5, name: 'Settings', link: '/settings', icon: <SettingsIcon/>, borderIcon: <SettingsOutlinedIcon/>},
    {id: 6, name: 'Info', link: '/info', icon: <InfoIcon/>, borderIcon: <InfoOutlinedIcon/>}
]

const Sidebar: React.FC = () => {
    const location = useLocation();

    const isRouteActive = (link: string) => location.pathname === (link || '/');

    return (
        <Box className="sidebar">
            {SidebarItems.map(item => (
                <Box className='sidebar-item'>
                    <Link to={item.link} className='sidebar-item-link'>
                        <IconButton className='sidebar-item-button' key={item.id} size="large" color={'primary'}>
                            <ZoomSidebar icon={item.icon} isActive={isRouteActive(item.link)} />
                            <ZoomSidebar icon={item.borderIcon} isActive={!isRouteActive(item.link)} />
                        </IconButton>
                    </Link>
                    <Typography className={`sidebar-item-text ${isRouteActive(item.link) && 'active'}`}>
                        {item.name}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

interface IZoomSidebar {
    icon: React.ReactElement<any, any>,
    isActive: boolean
}

const ZoomSidebar: React.FC<IZoomSidebar> = ({icon, isActive}) => {
    return (
        <Zoom in={isActive} unmountOnExit timeout={{
            enter: 500,
            exit: 300
        }} style={{
            transitionDelay: `${isActive ? 300 : 0}ms`
        }} >{icon}</Zoom>
    )
}

export default Sidebar;
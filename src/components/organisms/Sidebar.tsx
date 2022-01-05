import React from 'react';
import {Box} from "@mui/material";
import {useLocation} from "react-router-dom";
import SidebarItem from "../molecules/SidebarItem";
import {SidebarItems} from "../../settings/components/sidebar";
import {ImageSize, Logo} from "../atoms/Logo";

const Sidebar: React.FC = () => {
    const location = useLocation();

    const isRouteActive = (link: string) => location.pathname === (link || '/');

    return (
        <Box className="sidebar">
            <Logo imageSize={ImageSize.Small}/>
            <Box className="sidebar-list">
                {SidebarItems.map(item => (
                    <SidebarItem key={item.id} item={item} active={isRouteActive(item.link)}/>
                ))}
            </Box>
        </Box>
    );
};

export default Sidebar;
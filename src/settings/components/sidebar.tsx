import {ISidebarItem} from "../../interfaces/sidebar";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolIcon from "@mui/icons-material/School";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";

export const SidebarItems: ISidebarItem[] = [
    {id: 1, name: 'Home', link: '/', icon: <HomeIcon/>, borderIcon: <HomeOutlinedIcon/>},
    {id: 2, name: 'Skills', link: '/skills', icon: <SchoolIcon/>, borderIcon: <SchoolOutlinedIcon/>},
    {id: 3, name: 'Projects', link: '/projects', icon: <WorkIcon/>, borderIcon: <WorkOutlineOutlinedIcon/>},
    {id: 4, name: 'About me', link: '/about-me', icon: <ContactMailIcon/>, borderIcon: <ContactMailOutlinedIcon/>},
    {id: 5, name: 'Settings', link: '/settings', icon: <SettingsIcon/>, borderIcon: <SettingsOutlinedIcon/>},
    {id: 6, name: 'Info', link: '/info', icon: <InfoIcon/>, borderIcon: <InfoOutlinedIcon/>}
]
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
    {id: 1, name: 'Главная', link: '/', icon: <HomeIcon/>, borderIcon: <HomeOutlinedIcon/>},
    {id: 2, name: 'Умения', link: '/skills', icon: <SchoolIcon/>, borderIcon: <SchoolOutlinedIcon/>},
    {id: 3, name: 'Проекты', link: '/projects', icon: <WorkIcon/>, borderIcon: <WorkOutlineOutlinedIcon/>},
    {id: 4, name: 'Связатся', link: '/about-me', icon: <ContactMailIcon/>, borderIcon: <ContactMailOutlinedIcon/>},
    {id: 5, name: 'Настройки', link: '/settings', icon: <SettingsIcon/>, borderIcon: <SettingsOutlinedIcon/>},
    {id: 6, name: 'Информация', link: '/info', icon: <InfoIcon/>, borderIcon: <InfoOutlinedIcon/>}
]
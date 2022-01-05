import React from 'react';
import {Box} from "@mui/material";
import AnimateTypography from "../components/atoms/AnimateTypography";
import {Logo} from "../components/atoms/Logo";

const Home: React.FC = () => {

    return (
        <Box className="home" display="flex" alignItems="center" justifyContent="space-evenly" width="100%">
            <Box className="home-container">
                <AnimateTypography color="#ECECEC" fontSize={40} fontWeight={600} text={"Привет меня зовут Валера"}/>
                <Box display={"flex"}>
                    <AnimateTypography color="#ACACAC" display="flex" fontSize={36} fontWeight={600}>И я </AnimateTypography>
                    <AnimateTypography fontSize={36} fontWeight={600} color={"#5999E3"} margin="0 5px">Full
                        Stack</AnimateTypography>
                    <AnimateTypography color="#ACACAC" display="flex" fontSize={36}
                                       fontWeight={600}> developer</AnimateTypography>
                </Box>
                <AnimateTypography color="#878787" fontSize={30} fontWeight={600}>Это мой сайт Портфолио</AnimateTypography>
            </Box>
            <Logo animation/>
        </Box>
    );
};

export default Home;
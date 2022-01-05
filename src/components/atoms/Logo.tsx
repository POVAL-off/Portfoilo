import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import Logo_V from "../../resourse/svg/logo/Logo_V.svg";
import Logo_P from "../../resourse/svg/logo/Logo_P.svg";

export enum ImageSize {
    Small = 25
}

export interface ILogoProps {
    animation?: boolean;
    imageSize?: ImageSize
}

export const Logo: React.FC<ILogoProps> = ({animation, imageSize}) => {
    const [rotateV, setRotateV] = useState(345);

    const logoStyle = {
        V: {
            transform: `translate(-5px, -40px) rotate(${rotateV}deg)`,
            transition: "1s ease-in-out"
        },
        P: {
            transform: `translate(5px, 60px) rotate(${-rotateV}deg)`,
            transition: "1s ease-in-out",
        }
    }

    useEffect(() => {
        if (animation === false) return;

        const intervalAnimateLogo = setInterval(() => {
            setRotateV(prev => prev === 345 ? 360 : 345);
        }, 1000);

        return () => {
            clearInterval(intervalAnimateLogo);
        }
    }, []);

    return (<Box className="logo">
        <img style={animation ? logoStyle.V : undefined} draggable={false} src={Logo_V} alt="V" height={imageSize || undefined}/>
        <img style={animation ? logoStyle.P : undefined} draggable={false} src={Logo_P} alt="P" height={imageSize || undefined} />
    </Box>)
};
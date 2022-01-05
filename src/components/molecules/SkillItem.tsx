import React from "react";
import {Box} from "@mui/material";
import {SkillsStepper} from "./SkillStepper";
import {LinearProgress} from "../atoms/Progress";
import {ISkill} from "../../pages/Skills";

interface ISkillItemProps {
    item: ISkill
}

export const SkillItem: React.FC<ISkillItemProps> = ({item}) => (
    <Box className="skill-item">
        <img className="skill-item-icon" src={item.icon} alt={item.name}/>
        <Box className="skill-item-progress">
            <SkillsStepper activeStep={~~(item.progress / 25)}/>
            <LinearProgress variant="determinate" value={item.progress}/>
        </Box>
    </Box>
);
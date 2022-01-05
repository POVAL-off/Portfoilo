import React from 'react';
import {Box} from "@mui/material";
import JSIcon from "../resourse/svg/skills/JS.svg";
import TSIcon from "../resourse/svg/skills/TS.svg";
import ReactIcon from "../resourse/svg/skills/React.svg";
import MongoIcon from "../resourse/svg/skills/Mongo.svg";
import {SkillItem} from "../components/molecules/SkillItem";
import ContentTitle from "../components/templates/ContentTitle";

export interface ISkill {
    id: number | string;
    name: string;
    icon: string;
    progress: number;
}

export const SkillsData: ISkill[] = [
    {id: 1, name: 'JavaScript', icon: JSIcon, progress: 90},
    {id: 2, name: 'TypeScript', icon: TSIcon, progress: 80},
    {id: 3, name: 'React', icon: ReactIcon, progress: 70},
    {id: 4, name: 'Mongo', icon: MongoIcon, progress: 50}
]

const Skills: React.FC = () => {
    return (
        <Box className="skills" width="100%">
            <ContentTitle>
                {SkillsData.map(item => (
                    <SkillItem key={item.id} item={item}/>
                ))}
            </ContentTitle>

        </Box>
    );
};

export default Skills;
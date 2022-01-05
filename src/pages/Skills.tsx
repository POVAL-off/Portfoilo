import React from 'react';
import {Box} from "@mui/material";
import JSIcon from "../resourse/svg/skills/JS.svg";
import TSIcon from "../resourse/svg/skills/TS.svg";
import ReactIcon from "../resourse/svg/skills/React.svg";
import MongoIcon from "../resourse/svg/skills/Mongo.svg";
import {SkillItem} from "../components/molecules/SkillItem";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ContentTitle from "../components/templates/ContentTitle";

export interface ISkill {
    id: number | string;
    name: string;
    icon: string;
    progress: number;
}

const SkillsData: ISkill[] = [
    {id: 1, name: 'JavaScript', icon: JSIcon, progress: 90},
    {id: 2, name: 'TypeScript', icon: TSIcon, progress: 80},
    {id: 3, name: 'React', icon: ReactIcon, progress: 70},
    {id: 4, name: 'Mongo', icon: MongoIcon, progress: 50}
]

const Skills: React.FC = () => {
    return (
        <Box className="skills" width="100%">
            <ContentTitle title="Skills" titleIcon={
                <SchoolOutlinedIcon style={{
                    position: 'absolute',
                    width: 150,
                    height: 150,
                    transform: 'translateY(-30%)',
                    color: '#8388B844'
                }}/>
            }>
                {SkillsData.map(item => (
                    <SkillItem key={item.id} item={item}/>
                ))}
            </ContentTitle>

        </Box>
    );
};

export default Skills;


// <Box className="skills" width="50%" margin="200px auto">
//     <Box display="flex" justifyContent="center" marginBottom="50px">
//         <SchoolOutlinedIcon style={{
//             position: 'absolute',
//             width: 150,
//             height: 150,
//             transform: 'translateY(-30%)',
//             color: '#8388B844'
//         }} />
//         <Typography style={{
//             fontSize: 40,
//             color: '#fff'
//         }}> Skills </Typography>
//     </Box>
//     <Box className="skills-list">
//         {SkillsData.map(item => (
//             <SkillItem key={item.id} item={item}/>
//         ))}
//     </Box>
// </Box>
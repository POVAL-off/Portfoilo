import React from 'react';
import {Box, Grid} from "@mui/material";
import ContentTitle from "../components/templates/ContentTitle";
import {ISkill, SkillsData} from "./Skills";
import {ProjectItem} from "../components/molecules/ProjectItem";

export interface IProject {
    id: number | string;
    name: string;
    image: string;
    description?: string;
    body?: string;
    date?: Date | string;
    rate?: number;
    stack?: ISkill[];
}

const ProjetsData: IProject[] = [
    {
        id: 1,
        name: 'Fluent Torrent',
        image: 'https://preview.redd.it/2wcrxzsydnp71.png?width=640&crop=smart&auto=webp&s=fd63152f298fafe3216d43d16961c6b2f4101d00',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: new Date(),
        rate: 4.5,
        stack: [
            SkillsData[1],
            SkillsData[3]
        ]
    },
    {
        id: 2,
        name: 'Fluent WinRar',
        image: 'data:image/jpeg;base64,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',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: new Date(),
        rate: 3.5
    }
]

const Projects: React.FC = () => {

    return (
        <Box width="100%">
            <ContentTitle>
                <Grid container>
                    {ProjetsData.map(project => (
                        <Grid key={project.id} lg={6} xs={12}>
                            <ProjectItem project={project}/>
                        </Grid>
                    ))}
                </Grid>
            </ContentTitle>
        </Box>
    );
};

export default Projects;
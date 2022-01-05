import {Box, Typography} from "@mui/material";
import React from "react";
import {IProject} from "../../pages/Projects";
import {Rate} from "../atoms/Rate";

interface IProjectItem {
    project: IProject;
}

export const ProjectItem = ({project}: IProjectItem) =>
    <Box className="project-item">
        <Box className="project-item-header" display="flex" justifyContent="space-between">
            <Typography className="project-item-name" variant="h6">{project.name}</Typography>
            <Typography className="project-item-date">{project.date?.toLocaleString("ru-RU", {
                dateStyle: "short"
            })}</Typography>
        </Box>
        <Box className="project-item-content" display="flex" justifyContent="space-between">
            <img
                src={project.image}
                alt={project.name}
            />
            <Typography className="project-item-description"> {project.description} </Typography>
        </Box>
        <Box className="project-item-footer">
            <Rate rate={project.rate}/>
            <Box className="stack">
                {project?.stack?.map(element => (
                    <img src={element.icon} alt={element.name}/>
                ))}
            </Box>
        </Box>
    </Box>;
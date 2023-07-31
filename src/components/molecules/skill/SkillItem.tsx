import React from "react";
import {Box, Tooltip} from "@mui/material";
import SkillStepper from "./SkillStepper";
import LinearProgress from "../../atoms/Progress";
import {SkillDialog} from "./SkillDialog";
import {ISkill} from "../../../generated/graphql";

export interface ISkillItemProps {
    item: ISkill
}

export const SkillItem: React.FC<ISkillItemProps> = ({item}) => {
    const [open, setOpen] = React.useState(false);

    const skillClickHandler = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className="skill-item">
            <Tooltip title={item.name} placement="left">
                <img className="skill-item-icon " src={`http://localhost:5000/${item.image}`} alt={item.name}
                     onClick={skillClickHandler}/>
            </Tooltip>
            <Box className="skill-item-progress">
                <SkillStepper activeStep={~~((item.progress || 0) / 25)}/>
                <LinearProgress variant="determinate" value={item.progress || 0}/>
            </Box>

            <SkillDialog open={open} onClose={handleClose} skill={item}/>
        </Box>
    )
};
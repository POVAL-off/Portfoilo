import React from "react";
import {Step, Stepper} from "@mui/material";
import {StepLabel} from "../atoms/StepLabel";
import {StepTrunc} from "../atoms/StepTrunc";

interface ISkillsStepper {
    activeStep?: number
}

export const SkillsStepper: React.FC<ISkillsStepper> = ({ activeStep }) => {
    const NameSkills = ['Beginner', 'Junior', 'Middle', 'Senior', 'Expert'];

    return (
        <Stepper alternativeLabel activeStep={activeStep || 0} connector={null}>
            {NameSkills.map((element, index) => (
                <Step key={index}>
                    <StepLabel StepIconComponent={StepTrunc}>{element}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};
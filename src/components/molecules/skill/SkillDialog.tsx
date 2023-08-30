import React from "react";
import {ContentDialog} from "../../templates/ContentDialog";
import {DialogContentText} from "@mui/material";
import {ISkill} from "../../../generated/graphql";

interface ISkillDialog {
    open: boolean;
    onClose: () => void;
    skill: ISkill;
}

export const SkillDialog: React.FC<ISkillDialog> = ({open, onClose, skill}) =>
    <ContentDialog open={open} onClose={onClose} title={skill.name}>
        <img style={{width: 100, height: 100}} src={`http://localhost:5000/${skill.image}`} alt={skill.name}/>
        <DialogContentText color="primary">
            <div dangerouslySetInnerHTML={{ __html: skill.description || "" }} />
        </DialogContentText>
    </ContentDialog>;
import React from "react";
import SkillEditForm from "./SkillEditForm";
import {Button, CircularProgress, Dialog, Grid, Typography} from "@mui/material";
import {IAddSkill, ISkill, useEditSkillMutation, useGetSkillsQuery} from "../../../generated/graphql";

interface ISkillEditModalProps {
    open: boolean;
    onClose: () => void;
    skill: ISkill;
}

const SkillEditModal: React.FC<ISkillEditModalProps> = ({ open, onClose, skill }) => {
    const [editSkill, { loading, error }] = useEditSkillMutation();
    const { refetch } = useGetSkillsQuery();

    const handleSaveSkill = async (data: IAddSkill) => {
        const { errors } = await editSkill({
            variables: {
                skill: data,
                editSkillId: skill._id!
            }
        });

        if(!errors?.length) {
            onClose();
            await refetch();
        }
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">Изменение умения</Typography>
                    {loading && <CircularProgress />}
                </Grid>
                <Grid item xs={12}>
                    <SkillEditForm skill={skill} onSave={handleSaveSkill} onCancel={onClose} />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="error">{error?.message}</Typography>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default SkillEditModal;
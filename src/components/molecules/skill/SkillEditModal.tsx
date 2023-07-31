import React from "react";
import SkillEditForm from "./SkillEditForm";
import {Button, Dialog, Grid, Typography} from "@mui/material";

interface ISkillEditModalProps {
    open: boolean;
    onClose?: () => void;
}

const SkillEditModal: React.FC<ISkillEditModalProps> = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">Изменение умения</Typography>
                </Grid>
                <Grid item xs={12}>
                    <SkillEditForm />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained">Сохранить</Button>
                    <Button variant="contained">Отменить</Button>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default SkillEditModal;
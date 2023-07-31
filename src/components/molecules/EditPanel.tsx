import {Box, IconButton} from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface IEditPanelProps {
    handleEdit?: () => void;
    handleDelete?: () => void;
}

const EditPanel: React.FC<IEditPanelProps> = ({ handleEdit, handleDelete, children }) => {
    return (
        <Box className="edit-panel-wrapper">
            {children}
            <Box className="edit-panel">
                <IconButton size="small" onClick={handleEdit}>
                    <EditIcon color="primary" fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={handleDelete}>
                    <DeleteIcon color="primary" fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default EditPanel;
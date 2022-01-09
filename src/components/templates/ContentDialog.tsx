import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

interface IContentDialog {
    open: boolean;
    onClose: () => void;
    title: string;
}

export const ContentDialog: React.FC<IContentDialog> = ({title, open, onClose, children}) =>
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"sm"}
        fullWidth
    >
        <DialogTitle id="responsive-dialog-title">
            {title}
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} autoFocus>
                Назад
            </Button>
        </DialogActions>
    </Dialog>;
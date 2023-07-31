import React from "react";
import {IconButton, Box} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface IContentStepperProps {
    page: number;
    onChange: (page: number) => void;
    pageCount?: number;
}

const ContentStepper: React.FC<IContentStepperProps> = ({ page, onChange, pageCount = 0, children }) => {
    const handleBeforeNavigate = () => {
        onChange(page && page - 1);
    }

    const handleNextNavigate = () => {
        onChange(page < pageCount - 1 ? page + 1 : page)
    }

    return (
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
                <IconButton onClick={handleBeforeNavigate} color={'primary'}>
                    <NavigateBeforeIcon color="primary" />
                </IconButton>
            </Box>
            <Box width="100%">{children}</Box>
            <Box>
                <IconButton onClick={handleNextNavigate} color={'primary'}>
                    <NavigateNextIcon color="primary" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default ContentStepper;
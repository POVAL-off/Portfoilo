import {StepLabel as MuiStepLabel, stepLabelClasses, styled} from "@mui/material";

export const StepLabel = styled(MuiStepLabel)(() => ({
    [`& .${stepLabelClasses.disabled}`]: {
        color: '#FFF4'
    },
    [`&.${stepLabelClasses.alternativeLabel}`]: {
        flexDirection: 'column-reverse'
    },

}))
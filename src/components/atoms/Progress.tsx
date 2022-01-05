import {LinearProgress as MuiLinearProgress, linearProgressClasses, styled} from "@mui/material";

export const LinearProgress = styled(MuiLinearProgress)(({theme}) => ({
    height: 16,
    borderRadius: 20,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#FFFFFF99'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 20,
        backgroundColor: theme.palette.primary.main
    },
}));
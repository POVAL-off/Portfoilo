import {Box, Rating, Typography} from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import React from "react";

interface IRate {
    rate: number
}

export function Rate({rate}: IRate) {
    return <Box className="rating" display="flex" alignItems="center">
        <Typography>Оценка: </Typography>
        <Rating size="small" defaultValue={rate} precision={0.5} readOnly
                emptyIcon={<StarBorderRoundedIcon style={{color: "#fff4"}}/>}
                icon={<StarRoundedIcon/>}
        />
    </Box>;
}
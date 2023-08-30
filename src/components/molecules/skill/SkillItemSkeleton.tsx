import React from "react";
import {Box, Skeleton} from "@mui/material";

const SkillItemSkeleton = () => {
    return (
        <Box className="skill-item">
            <Skeleton height={74} width={40} />
            <Skeleton height={74} width="100%" />
        </Box>
    );
};

export default SkillItemSkeleton;
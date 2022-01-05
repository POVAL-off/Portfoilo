import React from 'react';
import {Box, CircularProgress} from "@mui/material";
import ContentTitle from "../components/templates/ContentTitle";

const Loading: React.FC = () => {

    return (
        <Box width="100%" >
            <ContentTitle title="Загрузка..." titleIcon={false}>
                <CircularProgress size={100} />
            </ContentTitle>
        </Box>
    );
};

export default Loading;
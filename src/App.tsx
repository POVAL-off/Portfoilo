import React from 'react';
import {Box, CssBaseline} from "@mui/material";
import Sidebar from "./components/organisms/Sidebar";
import AppRouter from "./components/AppRouter";
import routes from "./settings/routes";

function App() {
  return (
    <Box sx={{ display: 'flex' }} className="App">
        <CssBaseline />
        <Sidebar />
        <AppRouter routes={routes} />
    </Box>
  );
}

export default App;

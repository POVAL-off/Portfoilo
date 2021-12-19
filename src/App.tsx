import React from 'react';
import {Box, CssBaseline} from "@mui/material";
import Sidebar from "./components/Sidebar";
import Skills from "./pages/Skills";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Box sx={{ display: 'flex' }} className="App">
        <CssBaseline />
        <Sidebar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/skills" element={<Skills/>} />
        </Routes>
    </Box>
  );
}

export default App;

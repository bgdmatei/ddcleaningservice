import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import './assets/styles/navbar.scss'
import './assets/styles/app.scss'

const App = () => {
  return (
    <>
    <Box id='wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </Box>
    </>
  );
};

export default App;

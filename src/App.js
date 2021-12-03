import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import './assets/styles/app.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  }
});

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </ThemeProvider>
    </>
  );
};

export default App;

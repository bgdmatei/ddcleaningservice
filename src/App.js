import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import './assets/styles/navbar.scss'
import './assets/styles/app.scss'

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </>
  );
};

export default App;

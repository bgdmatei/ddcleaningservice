import React from 'react';
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Services from './Services';
import Navbar from '../components/Navbar';
import Description from './Description'

import Clean from '../assets/images/clean.svg'
import Moving from '../assets/images/moving.svg'

const Home = () => {
  return (
    <>
      <Box className='page'>
        <Navbar />
        <Box className='landing-hero'>
          <Box className='title-hero'>
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              D&D Cleaning Services
            </Typography>
            <Typography style={{color: '#175d8899'}} variant='h5'>
              We know exactly what to use on each surface, for the best possible cleaning results!
            </Typography>
            <NavLink className='quote-btn' to='contact'>{''}<span>Get a free quote</span></NavLink>
          </Box>
          <Box className='box-1'>
            <img src={Clean} alt="" />
          </Box>
          <Box className='box-2'>
            <img src={Moving} alt="" />
          </Box>
        </Box>
      </Box>
      <Services />
      <Description />
    </>
  );
};

export default Home;

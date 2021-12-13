import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import Services from './Services';
import Description from './Description'
import Reviews from './Reviews'
import Navbar from '../components/Navbar';

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
              &nbsp;&nbsp;D&D &nbsp; Deep Cleaning Services
            </Typography>
            <Typography style={{color: '#175d8899'}} variant='h5'>
              We know exactly what to use on each surface, for the best possible cleaning results!
            </Typography>
            <Link href='mailto:info@dddeepcleaningservices.co.uk' className='quote'>{''}<span>Get a free quote</span></Link>
          </Box>
          <Box className='image-grid-1'>
            <img src={Clean} alt="" />
          </Box>
          <Box className='image-grid-2'>
            <img src={Moving} alt="" />
          </Box>
        </Box>
      </Box>
      <Services />
      <Description />
      <Reviews />
    </>
  );
};

export default Home;

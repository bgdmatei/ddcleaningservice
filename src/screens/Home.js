import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { Typography, Box, Link } from '@mui/material';
import Services from './Services';
import Description from './Description'
import Reviews from './Reviews'
import Navbar from '../components/Navbar';

import Clean from '../assets/images/clean.svg'
import Moving from '../assets/images/moving.svg'

const Home = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1824 })
    return isDesktop ? children : null
  }
  const Laptop = ({ children }) => {
    const isLaptop = useMediaQuery({ minWidth: 992, maxWidth: 1800 })
    return isLaptop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 360, maxWidth: 766 })
    return isMobile ? children : null
  }
  return (
    <>
      <Desktop>
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
              <Typography style={{ color: '#175d8899' }} variant='h5'>
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
      </Desktop>
      <Laptop>
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
              <Typography style={{ color: '#175d8899' }} variant='h5'>
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
      </Laptop>
      <Tablet>
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
              <Typography style={{ color: '#175d8899' }} variant='h5'>
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
      </Tablet>


      <Mobile>
        <Box className="page">
          <Navbar />
          <Box sx={{marginTop: '4em'}}>
            <Box className='title-hero'>
              <Typography
                sx={{fontWeight: '700'}}
                variant='h2'
                color='inherit'
                gutterBottom
              >
                &nbsp;&nbsp;D&D &nbsp; Deep Cleaning Services
              </Typography>
              <Typography style={{ margin: '3em', color: '#175d8899' }} variant='body1'>
                We know exactly what to use on each surface for the best possible cleaning results!
              </Typography>
              <Link href='mailto:info@dddeepcleaningservices.co.uk' className='quote'>{''}<span>Get a free quote</span></Link>
            </Box>
          </Box>
        </Box>
      </Mobile>

      <Services />
      <Description />
      <Reviews />
    </>
  );
};

export default Home;

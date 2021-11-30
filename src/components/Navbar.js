import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import {NavLink} from 'react-router-dom'
import Logo from '../assets/images/ddcleaninglogo.png';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const Navbar = () => {
  return (
    <Container
      sx={{
        minHeight: '10vh',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 0px',
      }}
    >
      <Box>
        <img className='logo' src={Logo} alt='Company logo' />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <MailIcon />
        <Link
          sx={{ marginLeft: '4px' }}
          variant='body1'
          href='mailto:info@dddeepcleaningservices.co.uk'
        >
          info@dddeepcleaningservices.co.uk
        </Link>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <QueryBuilderIcon />
        <Typography sx={{ marginLeft: '4px' }} variant='body1'>
          Mon-Sat: 08:00 - 20:00
        </Typography>
      </Box>
      <Box sx={{ display: 'block' }}>
        <Typography variant='body1'>Request free quote:</Typography>
        <Typography variant='body1'>
          <strong>07900991973</strong>
        </Typography>
      </Box>
      <NavLink to='contact'>Get a free quote</NavLink>
    </Container>
  );
};

export default Navbar;

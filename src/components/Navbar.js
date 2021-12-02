import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
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
      }}
    >
      <img className='logo' src={Logo} alt='Company logo' />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <MailIcon style={{ color: '#fff' }} />
        <Link
          sx={{ marginLeft: '4px', textDecoration: 'none', color: 'black' }}
          variant='body1'
          href='mailto:info@dddeepcleaningservices.co.uk'
        >
          info@dddeepcleaningservices.co.uk
        </Link>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <QueryBuilderIcon style={{ color: '#fff' }} />
        <Typography sx={{ marginLeft: '4px' }} variant='body1'>
          Mon-Sat: 08:00 - 20:00
        </Typography>
      </Box>
      <Box sx={{ display: 'block' }}>
        <Typography variant='body1'>Request free quote:</Typography>
        <Typography variant='body1'>
          <strong style={{ color: '#fff' }}>07900991973</strong>
        </Typography>
      </Box>
    </Container>
  );
};

export default Navbar;

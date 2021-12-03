import React from 'react'
import { Box, Typography, Link } from '@mui/material';
import '../assets/styles/navbar.scss'
import MailIcon from '@mui/icons-material/MailOutlineOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const Footer = () => {
  return (
    <Box sx={{
      minHeight: '10vh',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ marginLeft: '4px', color: '#fff' }} variant='body1'>
          Locations: London
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <MailIcon style={{ color: '#FAE0DE' }} />
        <Link
          sx={{ marginLeft: '4px', textDecoration: 'none', color: '#fff' }}
          variant='body1'
          href='mailto:info@dddeepcleaningservices.co.uk'
        >
          info@dddeepcleaningservices.co.uk
        </Link>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <QueryBuilderIcon style={{ color: '#FAE0DE' }} />
        <Typography sx={{ marginLeft: '4px', color: '#fff' }} variant='body1'>
          Mon-Sat: 08:00 - 20:00
        </Typography>
      </Box>
      <Box sx={{ display: 'block', marginTop: '1.5em' }}>
        <Typography style={{ color: '#fff' }} variant='body1'>Phone number: </Typography>
        <Typography variant='body1'>
          <strong style={{ color: '#FAE0DE' }}>07900991973</strong>
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer

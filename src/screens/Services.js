import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import office from '../assets/images/office.jpg'
import house from '../assets/images/house.jpg'
import covid from '../assets/images/covid.jpg'
import pub from '../assets/images/pub.jpg'

const Services = () => {
  return (
    <Box className='page-2' sx={{textAlign: 'center'}}>
      <Typography className='divider-services' variant='h3'>Services</Typography>
      <Grid className='services-grid' container sx={{ marginTop: '5%' }} justifyContent="center"
        alignItems="center" >
        <Grid item xs={12} md={8} xl={8}>
          <Box className='service'>
            <Box className='bubble'>
              Office Cleaning
            </Box>
            <img src={office} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} xl={4}>
          <Box className='service'>
            <Box className='bubble'>
              Home Cleaning
            </Box>
            <img src={house} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} xl={4}>
          <Box className='service'>
            <Box className='bubble'>
              Covid-19 Disinfection
            </Box>
            <img src={covid} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} md={8} xl={8}>
          <Box className='service'>
            <Box className='bubble'>
              Pub Cleaning
            </Box>
            <img src={pub} alt="" />
          </Box>
        </Grid>
        <Grid sx={{paddingTop: '7%'}} item xs={12} md={12} xl={12}>
          <Box>
            <Typography style={{color: '#fff', marginBottom: '1em'}} variant='h4'>
              How it Works?
            </Typography>
          </Box> 
          <Box>
            <Grid container sx={{color: '#fff'}}>
              <Grid item xs={12} md={4} xl={4}>
                <Typography variant='h5'>
                  1. Request a free <span style={{color: '#175d88'}}> quote</span>
                </Typography>
                <Typography style={{color: '#e1e1e1'}} variant='body1'>Contact us by phone or email</Typography>
              </Grid>
              <Grid item xs={12} md={4} xl={4}>
                <Typography variant='h5'>
                  2. Receive a fast <span style={{color: '#175d88'}}> reply</span>
                </Typography>
                <Typography style={{color: '#e1e1e1'}} variant='body1'>A member of our staff will make a quote and contact you </Typography>
              </Grid>
              <Grid item xs={12} md={4} xl={4}>
                <Typography variant='h5'>
                  3. Benefit from our<span style={{color: '#175d88'}}> services</span>
                </Typography>
                <Typography style={{color: '#e1e1e1'}} variant='body1'>No matter what service you choose, we will pay close attention to each task</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Services

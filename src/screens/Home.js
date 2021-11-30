import React from 'react';
import { Toolbar, AppBar, Paper, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Landing from '../assets/images/landing.jpg'

const Home = () => {
  return (
    <>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'space-around' }} disableGutters>
          <NavLink to='/'>
            <Typography sx={{ color: '#fff' }} variant='h6'>
              Home
            </Typography>
          </NavLink>
          <NavLink to='/about-us'>
            <Typography sx={{ color: '#fff' }} variant='h6'>
              About Us
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Paper className='landing-hero' sx={{minHeight: '80vh'}}>
        <Grid container>
          <Grid item md={6} sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography
                component='h1'
                variant='h3'
                color='inherit'
                gutterBottom
              >
                Title of a longer featured blog post
              </Typography>
              <Typography variant='h5' color='inherit' paragraph>
                Multiple lines of text that form the lede, informing new readers
                quickly and efficiently about what&apos;s most interesting in
                this post&apos;s contents…
              </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Home;

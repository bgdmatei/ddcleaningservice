import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import goals from '../assets/images/goals.svg'

const Description = () => {
  return (
    <Box className='page-3'>
      <Typography className='divider-description' sx={{ textAlign: 'center' }} variant='h3'>About Us</Typography>
      <Grid container style={{ marginTop: '3em' }} alignItems='center'>
        <Grid className='description-image's style={{ justifyContent: 'flex-end' }} item xs={12} md={4} xl={4}>
          <img style={{ float: 'inline-end' }} src={goals} alt="" />
        </Grid>
        <Grid item style={{ textAlign: 'center', padding: '3em' }} xs={12} md={6} xl={6}>
          <Typography style={{ color: 'rgb(63, 61, 86)', fontWeight: 'bold' }} mb={3} variant='h5'>
            Professional Deep Cleaning Services for Home and Office
          </Typography>
          <Typography style={{ color: 'rgb(63, 61, 86)' }} mb={3} variant='body1'>
            <strong>D&D offers</strong> a wide range of <strong>professional deep cleaning services</strong> for both <strong>individuals</strong> – apartment and house cleaning, as well as for <strong>companies</strong>: office cleaning, warehouse or showroom cleaning, commercial cleaning services of the highest standards.
          </Typography>
          <Typography style={{ color: 'rgb(63, 61, 86)' }} variant='body1'>
            <strong>D&D</strong> is a deep cleaning company that offers full services for any types of properties.
          </Typography>
          <Grid style={{color: '#40435c'}} container spacing={3} mt={5}>
            <Grid item xs={12} md={6} xl={6}>○ Trustworthy cleaning services at affordable prices</Grid>
            <Grid item xs={12} md={6} xl={6}>○ We treat our customers with professionalism</Grid>
            <Grid item xs={12} md={6} xl={6}>○ We guarantee outstanding results</Grid>
            <Grid item xs={12} md={6} xl={6}>○ We offer our customers flexibility</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Description

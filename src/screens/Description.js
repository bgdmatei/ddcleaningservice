import React from 'react'
import { Box, Typography, Grid, List, ListItem, ListItemText } from '@mui/material'
import goals from '../assets/images/goals.svg'

const Description = () => {
  return (
    <Box className='page-3'>
      <Typography className='divider-description' sx={{ textAlign: 'center' }} variant='h3'>About Us</Typography>
      <Grid container style={{ marginTop: '3em' }} alignItems='center'>
        <Grid style={{ justifyContent: 'flex-end' }} item xs={12} md={4} xl={4}>
          <img style={{ float: 'inline-end' }} src={goals} alt="" />
        </Grid>
        <Grid item style={{ textAlign: 'center', padding: '3em' }} xs={12} md={6} xl={6}>
          <Typography style={{ color: 'rgb(63, 61, 86)', fontWeight: 'bold' }} mb={3} variant='h5'>
            Professional Cleaning Services for Home and Office
          </Typography>
          <Typography style={{ color: 'rgb(63, 61, 86)' }} mb={3} variant='body1'>
            <strong>D&D offers</strong> a wide range of <strong>professional cleaning services</strong> for both <strong>individuals</strong> – apartment and house cleaning, as well as for <strong>companies</strong>: office cleaning, warehouse or showroom cleaning, commercial cleaning services of the highest standards.
          </Typography>
          <Typography style={{ color: 'rgb(63, 61, 86)' }} variant='body1'>
            <strong>D&D</strong> is a cleaning company that offers full services for any types of properties.
          </Typography>
          <List style={{marginTop: '2em', color: 'rgb(63, 61, 86)' }}>
            <ListItem>
              <ListItemText
                primary="Trustworthy cleaning services at affordable prices."
              />
              <ListItemText
                primary="We treat our customers with professionalism"
              />
              <ListItemText
                primary="We guarantee outstanding results"
              />
              <ListItemText
                primary="We offer our customers flexibility"
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Description

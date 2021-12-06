import React from 'react'
import { Box, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import Footer from '../components/Footer';

const Reviews = () => {

  var items = [
    {
      name: 'Daniel Heron',
      description: "I’m glad I can be a reference for your service. You did a great job when I needed you and I can only confirm the quality of D&D Deep Cleaning Services. I warmly recommend this service!"
    },
    {
      name: 'Blair Hutchison',
      description: "I can tell you that D&D has been remarked as an excellent home cleaning service. I say this from the perspective of a person who tried almost half of the cleaning companies in London. I will contact you with pleasure whenever I need."
    },
    {
      name: 'Lisa Shield',
      description: 'I’ve used and reused this office cleaning service and I’m really excited that I stumbled across them. The prices they practice are affordable and you have a service that is done in a professional way in the true sense of the word.'
    }
  ]

  function Item(props) {
    return (
      <Box style={{ height: '100%' }}>
        <Box className="apostrophe"></Box>
        <Typography style={{ color: '2f2e41' }} textAlign='center' variant='h4'>{props.item.name}</Typography>
        <Typography color='White' variant='h6'>{props.item.description}</Typography>
      </Box>
    )
  }
  return (
    <Box className='page-4'>
      <Typography className='divider-services' sx={{ textAlign: 'center', marginBottom: '2em' }} variant='h3'>Our Clients Say</Typography>
      <Box className='review-page'>
        <Box className='outside-carousel'>
          <Carousel className='carousel' navButtonsAlwaysInvisible={true} indicators={false}>
            {
              items.map((item, i) =>
                <Item key={i} item={item} />
              )
            }
          </Carousel>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Reviews

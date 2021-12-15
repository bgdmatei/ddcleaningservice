import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { Box, Typography, Link, Container } from '@mui/material';
import Logo from '../assets/images/ddcleaninglogo.png';
import '../assets/styles/navbar.scss'
import MailIcon from '@mui/icons-material/MailOutlineOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const Navbar = () => {

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
  const SmallScreen = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 315, maxWidth: 359 })
    return isMobile ? children : null
  }

  return (
    <>
      <Desktop>
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
            <Typography style={{ color: '#fff' }} variant='body1'>Request free quote:</Typography>
            <Typography variant='body1'>
              <strong style={{ color: '#FAE0DE' }}>07900991973</strong>
            </Typography>
          </Box>
        </Container>
      </Desktop>

      <Laptop>
        <Container
          sx={{
            minHeight: '5vh',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img style={{ width: '12%' }} src={Logo} alt='Company logo' />
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
            <Typography style={{ color: '#fff' }} variant='body1'>Request free quote:</Typography>
            <Typography variant='body1'>
              <strong style={{ color: '#FAE0DE' }}>07900991973</strong>
            </Typography>
          </Box>
        </Container>
      </Laptop>

      <Tablet>
        <Container
          sx={{
            minHeight: '5vh',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img style={{ width: '15%' }} src={Logo} alt='Company logo' />
          <Box sx={{ display: 'flex', alignItems: 'center', }}>
            <MailIcon style={{ color: '#FAE0DE' }} />
            <Link
              sx={{ marginLeft: '4px', textDecoration: 'none', color: '#fff', fontSize: '12px' }}
              variant='body1'
              href='mailto:info@dddeepcleaningservices.co.uk'
            >
              info@dddeepcleaningservices.co.uk
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <QueryBuilderIcon style={{ color: '#FAE0DE' }} />
            <Typography sx={{ marginLeft: '4px', color: '#fff', fontSize: '12px' }} variant='body1'>
              Mon-Sat: 08:00 - 20:00
            </Typography>
          </Box>
          <Box sx={{ display: 'block', marginTop: '1.5em' }}>
            <Typography style={{ color: '#fff', fontSize: '12px' }} variant='body1'>Request free quote:</Typography>
            <Typography variant='body1'>
              <strong style={{ color: '#FAE0DE', fontSize: '12px' }}>07900991973</strong>
            </Typography>
          </Box>
        </Container>
      </Tablet>

      <Mobile>
        <Container
          sx={{
            minHeight: '10vh',
            margin: 'auto',
            maxWidth: '100vw',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'

          }}
        >
          <img style={{ width: '30%' }} src={Logo} alt='Company logo' />
          <Box sx={{ display: 'block', marginTop: '1.5em' }}>
            <Typography style={{ color: '#fff', fontSize: '12px' }} variant='body1'>Request free quote:</Typography>
            <Typography variant='body1'>
              <strong style={{ color: '#FAE0DE', fontSize: '12px' }}>07900991973</strong>
            </Typography>
          </Box>
        </Container>
      </Mobile>

      <SmallScreen>
        <Container
          sx={{
            minHeight: '10vh',
            margin: 'auto',
            maxWidth: '100vw',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'

          }}
        >
          <img style={{ width: '30%' }} src={Logo} alt='Company logo' />
          <Box sx={{ display: 'block', marginTop: '1.5em' }}>
            <Typography style={{ color: '#fff', fontSize: '12px' }} variant='body1'>Request free quote:</Typography>
            <Typography variant='body1'>
              <strong style={{ color: '#FAE0DE', fontSize: '12px' }}>07900991973</strong>
            </Typography>
          </Box>
        </Container>
      </SmallScreen>
    </>
  );
};

export default Navbar;

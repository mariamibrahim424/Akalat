import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Dish', 'Cuisine', 'Ingredients', 'Type', 'Diet'];

/**
 *
 * See the basic-react example for an example of adding and reacting to
 * changes in state and lecture 10 for details on Material-UI
 *
 * @return {object} JSX
 *
 */
export default function Appbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar style={{background: '#2E3B55'}} position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'fantasy',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#D88643',
                textDecoration: 'none',
              }}
            >
              AKALAT
            </Typography>

            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='white'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {xs: 'block', md: 'none'},
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography href={`/${page}`} textAlign='center'>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: {xs: 'flex', md: 'none'},
                flexGrow: 1,
                fontFamily: 'fantasy',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#D88643',
                textDecoration: 'none',
              }}
            >
              AKALAT
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {xs: 'none', md: 'flex', fontFamily: 'fantasy'},
              }}
            >
              {pages.map((page) => (
                <Button
                  href={`/${page}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontFamily: 'fantasy',
                    my: 2,
                    color: 'orange',
                    display: 'block',
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

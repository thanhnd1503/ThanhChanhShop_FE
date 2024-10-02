import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: '#F0F0F0',
  marginLeft: 0,
  width: '100%',
  height: '48px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const CustomButtonHeader = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    margin: '0 20px',
    fontSize: '16px'
}));


function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profiler</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
    </Menu>
  );

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{p:3}}>
            <img src="/img/ThanhChanhLogo.png" alt="Logo" style={{height: '40px' , width:'100%'}} />
      </Box>
      <List>
        {['Shop', 'On Sale', 'New Arrivals', 'Brands'].map((text, index) => (
          <ListItem button key={text} component="a" href={`/${text.toLowerCase().replace(' ', '-')}`}>
            <ListItemText primary={text} sx={{ color: '#000' }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 , pb: 8}}>
      <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: '#000' , pl:{ xs: 1, sm: 2, lg: 6 }, pr:{ xs: 1, sm: 2, lg: 6 }}}>
        <Toolbar>
          {/* Icon Menu for Mobile */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box sx={{ display: {lg:'block', xs: 'none' }, marginRight: '10px' }}>
            <img src="/img/ThanhChanhLogo.png" alt="Logo" style={{ height: '40px' }} />
          </Box>

          {/* Navigation Links for Desktop */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <CustomButtonHeader color="inherit" href="/shop">Shop</CustomButtonHeader>
            <CustomButtonHeader color="inherit" href="/on-sale">On Sale</CustomButtonHeader>
            <CustomButtonHeader color="inherit" href="/new-arrivals">New Arrivals</CustomButtonHeader>
            <CustomButtonHeader color="inherit" href="/brands">Brands</CustomButtonHeader>
          </Box>

          {/* Search Bar */}
          <Search sx={{flexGrow: 1}} >
            <SearchIconWrapper>
              <SearchIcon sx={{color: '#909090'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Categories */}
          <IconButton size="large" aria-label="cart" color="inherit" href="/cart">
            <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Account */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </Box>
  );
}

export default Header;

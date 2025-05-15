// components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Button, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'About', href: '/About' },
    { text: 'Blog', href: '/Blog' },
    { text: 'Contact', href: '/Contact' },
  ];

  return (
    <>
      <header className="bg-transparent shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between px-12 py-1">
          <Link href="/">
            <Typography variant="h6" component="h6" className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent" sx={{ fontFamily: "Nunito, sans-serif" }}>
                BuzzyCart
            </Typography>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link key={item.text} href={item.href} className="text-white hover:text-white">
                <Button variant='text'>
                    {item.text}
                </Button>
              </Link>
            ))}
            <Button color="secondary">Sign Up | Log In</Button>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <div className="w-64">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-semibold">Menu</span>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </div>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} component={Link} href={item.href}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <ListItem>
              <Button variant="outlined" size="small" color="primary" fullWidth>
                Sign In
              </Button>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;

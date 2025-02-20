"use client";

import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon, LibraryBooks, Explore, GetApp, Settings } from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Library', icon: <LibraryBooks />, path: '/library' },
    { text: 'Sources', icon: <Explore />, path: '/sources' },
    { text: 'Downloads', icon: <GetApp />, path: '/downloads' },
    { text: 'Settings', icon: <Settings />, path: '/settings' },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            LNReader
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <Link href={item.path} key={item.text} passHref>
              <ListItem button onClick={() => setDrawerOpen(false)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
} 
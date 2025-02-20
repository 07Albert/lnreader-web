'use client';

import { Grid, Card, CardMedia, CardContent, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { useState } from 'react';

// Mock data for development
const mockLibrary = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: `Novel ${i + 1}`,
  cover: 'https://via.placeholder.com/150x200',
  unread: Math.floor(Math.random() * 10),
}));

export default function Library() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedItem(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedItem(null);
  };

  return (
    <Grid container spacing={2} padding={2}>
      {mockLibrary.map((item) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={item.cover}
              alt={item.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ position: 'relative' }}>
              <Typography noWrap>{item.title}</Typography>
              {item.unread > 0 && (
                <Typography variant="caption" color="primary">
                  {item.unread} unread
                </Typography>
              )}
              <IconButton
                sx={{ position: 'absolute', right: 8, top: 8 }}
                onClick={(e) => handleMenuOpen(e, item.id)}
              >
                <MoreVert />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Mark as Read</MenuItem>
        <MenuItem onClick={handleMenuClose}>Download</MenuItem>
        <MenuItem onClick={handleMenuClose}>Remove</MenuItem>
      </Menu>
    </Grid>
  );
} 
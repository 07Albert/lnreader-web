'use client';

import { Grid, Typography, Container, Box } from '@mui/material';
import { LibraryBooks } from '@mui/icons-material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          py: 4
        }}
      >
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Welcome to LNReader
        </Typography>
        
        <Typography variant="h5" component="h2" align="center" color="text.secondary" gutterBottom>
          Your personal light novel reader
        </Typography>

        <Grid container spacing={4} justifyContent="center" maxWidth="md">
          <Grid item xs={12} sm={6}>
            <Link href="/library" passHref style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 2,
                  }
                }}
              >
                <LibraryBooks sx={{ fontSize: 48, mb: 2 }} />
                <Typography variant="h6">Go to Library</Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

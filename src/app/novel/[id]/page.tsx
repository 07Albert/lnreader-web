'use client';

import { Box, Container, Grid, Typography, Paper, Chip, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import { GetApp, BookmarkAdd } from '@mui/icons-material';

// Mock data for development
const mockNovel = {
  id: '1',
  title: 'Sample Novel Title',
  cover: 'https://via.placeholder.com/300x450',
  author: 'Author Name',
  status: 'Ongoing',
  genres: ['Action', 'Adventure', 'Fantasy'],
  description: 'A long description of the novel that explains the plot and other details...',
  chapters: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Chapter ${i + 1}`,
    releaseDate: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
    read: Math.random() > 0.5
  }))
};

export default function NovelDetail({ params }: { params: { id: string } }) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Novel Info Section */}
        <Grid item xs={12} md={4}>
          <Paper
            component="img"
            src={mockNovel.cover}
            alt={mockNovel.title}
            sx={{ width: '100%', aspectRatio: '2/3', objectFit: 'cover' }}
          />
          
          <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {mockNovel.genres.map(genre => (
              <Chip key={genre} label={genre} size="small" />
            ))}
          </Box>

          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Button
              variant="contained"
              startIcon={<BookmarkAdd />}
              fullWidth
            >
              Add to Library
            </Button>
          </Box>
        </Grid>

        {/* Details and Chapters Section */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            {mockNovel.title}
          </Typography>
          
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            by {mockNovel.author} • {mockNovel.status}
          </Typography>

          <Typography variant="body1" paragraph>
            {mockNovel.description}
          </Typography>

          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Chapters
          </Typography>

          <List>
            {mockNovel.chapters.map((chapter) => (
              <Box key={chapter.id}>
                <ListItem
                  button
                  sx={{
                    opacity: chapter.read ? 0.6 : 1,
                  }}
                >
                  <ListItemText
                    primary={chapter.title}
                    secondary={chapter.releaseDate}
                  />
                  <GetApp />
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
} 
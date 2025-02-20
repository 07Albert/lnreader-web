'use client';

import { useState } from 'react';
import { Grid, Card, CardContent, Typography, TextField, Tab, Tabs, Box } from '@mui/material';

// Mock data for development
const mockSources = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  name: `Source ${i + 1}`,
  language: ['EN', 'JP', 'KR'][Math.floor(Math.random() * 3)],
  novels: Math.floor(Math.random() * 10000),
}));

export default function Sources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLang, setCurrentLang] = useState('ALL');

  const languages = ['ALL', 'EN', 'JP', 'KR'];
  
  const filteredSources = mockSources.filter(source => 
    source.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (currentLang === 'ALL' || source.language === currentLang)
  );

  return (
    <Box p={2}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search sources..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Tabs
        value={languages.indexOf(currentLang)}
        onChange={(_, newValue) => setCurrentLang(languages[newValue])}
        sx={{ mb: 2 }}
      >
        {languages.map((lang) => (
          <Tab key={lang} label={lang} />
        ))}
      </Tabs>

      <Grid container spacing={2}>
        {filteredSources.map((source) => (
          <Grid item xs={12} sm={6} md={4} key={source.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{source.name}</Typography>
                <Typography color="textSecondary">
                  {source.language} • {source.novels} novels
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 
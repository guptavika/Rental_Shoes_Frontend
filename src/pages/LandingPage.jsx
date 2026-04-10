import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
} from '@mui/material';
import {
  ArrowForward,
} from '@mui/icons-material';

// import { supabase } from '../lib/supabase';

const categories = ['All', 'sneakers', 'formal', 'running', 'boots', 'casual', 'outdoor'];

export default function LandingPage({ onNavigate }) {
  const [shoes, setShoes] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchShoes = async () => {
//       const { data } = await supabase.from('shoes').select('*').eq('available', true);
//       setShoes(data || []);
//       setLoading(false);
//     };
//     fetchShoes();
//   }, []);

  const filtered =
    activeCategory === 'All'
      ? shoes
      : shoes.filter((s) => s.category === activeCategory);

  return (
    <Box>

      {/* HERO */}
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg)',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          px: 4,
        }}
      >
        <Box maxWidth="600px">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Walk in Style, Without the Commitment
          </Typography>

          <Typography variant="h6" sx={{ mb: 4 }}>
            Rent premium shoes for any occasion. Delivered to your door.
          </Typography>

          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => onNavigate('register')}
          >
            Start Renting
          </Button>
        </Box>
      </Box>

      {/* COLLECTION */}
      <Box sx={{ py: 8, px: 4 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Featured Collection
        </Typography>

        {/* Categories */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 4, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              color={activeCategory === cat ? 'primary' : 'default'}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </Box>

        {/* Loading */}
        {loading ? (
          <Box textAlign="center">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((shoe) => (
              <Grid item xs={12} sm={6} md={4} key={shoe.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={shoe.image_url}
                    alt={shoe.name}
                  />

                  <CardContent>
                    <Typography variant="h6">{shoe.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {shoe.brand}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                      ${shoe.price_per_day} / day
                    </Typography>

                    <Box sx={{ mt: 1 }}>
                      {shoe.size_options?.slice(0, 4).map((s) => (
                        <Chip key={s} label={s} size="small" sx={{ mr: 0.5 }} />
                      ))}
                    </Box>

                    <Button
                      fullWidth
                      sx={{ mt: 2 }}
                      variant="contained"
                      onClick={() => onNavigate('register')}
                    >
                      Rent Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(to right, #0288d1, #01579b)',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ready to Step Into Something New?
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => onNavigate('register')}
        >
          Create Free Account
        </Button>
      </Box>

      {/* FOOTER */}
      <Box sx={{ py: 4, textAlign: 'center', bgcolor: '#111', color: '#aaa' }}>
        <Typography variant="body2">
          © 2024 StepRent. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
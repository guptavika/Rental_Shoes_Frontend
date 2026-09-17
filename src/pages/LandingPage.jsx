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
  Container,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ArrowForward, DirectionsWalk } from '@mui/icons-material';

// import { supabase } from '../lib/supabase';

const categories = ['All', 'sneakers', 'formal', 'running', 'boots', 'casual', 'outdoor'];

// 🔹 Demo data (jab tak supabase connect na ho)
const demoShoes = [
  {
    id: 1,
    name: 'Air Runner Pro',
    brand: 'Nike',
    category: 'running',
    price_per_day: 12,
    image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
    size_options: ['7', '8', '9', '10', '11'],
    available: true,
  },
  {
    id: 2,
    name: 'Classic Leather',
    brand: 'Clarks',
    category: 'formal',
    price_per_day: 15,
    image_url: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600',
    size_options: ['7', '8', '9', '10'],
    available: true,
  },
  {
    id: 3,
    name: 'Urban Sneaker',
    brand: 'Adidas',
    category: 'sneakers',
    price_per_day: 10,
    image_url: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600',
    size_options: ['8', '9', '10', '11'],
    available: true,
  },
  {
    id: 4,
    name: 'Trail Blazer',
    brand: 'Timberland',
    category: 'outdoor',
    price_per_day: 18,
    image_url: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600',
    size_options: ['8', '9', '10', '11', '12'],
    available: true,
  },
  {
    id: 5,
    name: 'Combat Boot',
    brand: 'Dr. Martens',
    category: 'boots',
    price_per_day: 14,
    image_url: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600',
    size_options: ['7', '8', '9', '10'],
    available: true,
  },
  {
    id: 6,
    name: 'Everyday Casual',
    brand: 'Puma',
    category: 'casual',
    price_per_day: 9,
    image_url: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600',
    size_options: ['7', '8', '9', '10', '11'],
    available: true,
  },
];

export default function LandingPage({ onNavigate }) {
  const [shoes, setShoes] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // 🔹 Supabase uncomment kar jab ready ho
    // const fetchShoes = async () => {
    //   try {
    //     const { data, error } = await supabase
    //       .from('shoes')
    //       .select('*')
    //       .eq('available', true);
    //     if (error) throw error;
    //     setShoes(data || []);
    //   } catch (err) {
    //     console.error('Failed to fetch shoes:', err);
    //     setShoes(demoShoes); // fallback
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchShoes();

    // 🔹 Demo mode (loading properly close hoti hai)
    const timer = setTimeout(() => {
      setShoes(demoShoes);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const filtered =
    activeCategory === 'All'
      ? shoes
      : shoes.filter((s) => s.category === activeCategory);

  return (
    <Box sx={{ overflowX: 'hidden' }}>

      {/* ============ HERO ============ */}
      <Box
        sx={{
          minHeight: { xs: '85vh', md: '100vh' },
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url(https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          px: { xs: 3, sm: 4, md: 8 },
          py: { xs: 6, md: 0 },
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Box maxWidth={{ xs: '100%', md: 640 }}>
            <Typography
              variant={isMobile ? 'h4' : 'h2'}
              fontWeight="bold"
              gutterBottom
              sx={{ lineHeight: 1.15 }}
            >
              Walk in Style, <br />
              Without the Commitment
            </Typography>

            <Typography
              variant={isMobile ? 'body1' : 'h6'}
              sx={{ mb: 4, opacity: 0.9, maxWidth: 500 }}
            >
              Rent premium shoes for any occasion. Delivered to your door.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => onNavigate('register')}
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              >
                Start Renting
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: 2,
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.6)',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                Browse Collection
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ============ COLLECTION ============ */}
      <Box id="collection" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 4 } }}>
        <Container maxWidth="lg" disableGutters>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Featured Collection
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Pick from our handpicked selection of premium footwear
          </Typography>

          {/* Categories */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              mb: 5,
              flexWrap: 'wrap',
              px: { xs: 1, md: 0 },
            }}
          >
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat.charAt(0).toUpperCase() + cat.slice(1)}
                color={activeCategory === cat ? 'primary' : 'default'}
                variant={activeCategory === cat ? 'filled' : 'outlined'}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  px: 1,
                }}
              />
            ))}
          </Box>

          {/* Loading */}
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress />
            </Box>
          ) : filtered.length === 0 ? (
            /* Empty State */
            <Box sx={{ textAlign: 'center', py: 8, color: 'text.secondary' }}>
              <DirectionsWalk sx={{ fontSize: 64, mb: 2, opacity: 0.4 }} />
              <Typography variant="h6" gutterBottom>
                No shoes in this category yet
              </Typography>
              <Typography variant="body2">
                Try selecting a different category
              </Typography>
            </Box>
          ) : (
            /* Grid */
            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {filtered.map((shoe) => (
                <Grid item xs={12} sm={6} md={4} key={shoe.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      boxShadow: 2,
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="220"
                      image={shoe.image_url}
                      alt={shoe.name}
                      sx={{ objectFit: 'cover' }}
                    />

                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" fontWeight="bold" noWrap>
                        {shoe.name}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {shoe.brand}
                      </Typography>

                      <Typography
                        variant="h6"
                        color="primary"
                        fontWeight="bold"
                        sx={{ mt: 'auto', mb: 1 }}
                      >
                        ${shoe.price_per_day}
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{ ml: 0.5 }}
                        >
                          / day
                        </Typography>
                      </Typography>

                      {shoe.size_options?.length > 0 && (
                        <Box sx={{ mb: 2 }}>
                          {shoe.size_options.slice(0, 4).map((s) => (
                            <Chip
                              key={s}
                              label={s}
                              size="small"
                              variant="outlined"
                              sx={{ mr: 0.5, mb: 0.5 }}
                            />
                          ))}
                        </Box>
                      )}

                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() => onNavigate('register')}
                        sx={{
                          mt: 'auto',
                          textTransform: 'none',
                          fontWeight: 600,
                          borderRadius: 2,
                        }}
                      >
                        Rent Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>

      {/* ============ CTA ============ */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 3, sm: 4 },
          textAlign: 'center',
          background: 'linear-gradient(to right, #0288d1, #01579b)',
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            fontWeight="bold"
            gutterBottom
          >
            Ready to Step Into Something New?
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of happy renters. No commitment, just style.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => onNavigate('register')}
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              fontWeight: 700,
              borderRadius: 2,
              '&:hover': {
                bgcolor: '#f0f0f0',
              },
            }}
          >
            Create Free Account
          </Button>
        </Container>
      </Box>

      {/* ============ FOOTER ============ */}
      <Box
        sx={{
          py: 4,
          px: 2,
          textAlign: 'center',
          bgcolor: '#111',
          color: '#aaa',
        }}
      >
        <Typography variant="body2">
          © 2024 StepRent. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
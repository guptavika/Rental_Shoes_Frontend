import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Rating,
  IconButton,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Pagination,
  useTheme,
  alpha,
  Fade,
  Slide,
  Drawer,
  Badge,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import {
  Search as SearchIcon,
  FavoriteBorder as WishlistIcon,
  Favorite as LikedIcon,
  CalendarMonth as CalendarIcon,
  FilterList as FilterIcon,
  GridView as GridIcon,
  ViewList as ListIcon,
  Close as CloseIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

const Collection = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sample shoe collection data
  const shoes = [
    {
      id: 1,
      name: 'Nike Air Jordan 1 Retro',
      brand: 'Nike',
      category: 'sneakers',
      price: 25,
      originalPrice: 180,
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop',
      sizes: [7, 8, 9, 10, 11],
      color: 'Red/Black/White',
      condition: 'Excellent',
      popular: true,
    },
    {
      id: 2,
      name: 'Adidas Yeezy Boost 350',
      brand: 'Adidas',
      category: 'sneakers',
      price: 35,
      originalPrice: 220,
      rating: 4.9,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop',
      sizes: [8, 9, 10, 11, 12],
      color: 'Triple White',
      condition: 'Like New',
      popular: true,
    },
    {
      id: 3,
      name: 'Gucci Ace Sneakers',
      brand: 'Gucci',
      category: 'luxury',
      price: 85,
      originalPrice: 650,
      rating: 4.9,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=300&fit=crop',
      sizes: [7, 8, 9, 10],
      color: 'White/Green/Red',
      condition: 'Very Good',
      popular: true,
    },
    {
      id: 4,
      name: 'Dr. Martens 1460 Boots',
      brand: 'Dr. Martens',
      category: 'boots',
      price: 30,
      originalPrice: 150,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop',
      sizes: [6, 7, 8, 9, 10],
      color: 'Black Smooth',
      condition: 'Good',
      popular: false,
    },
    {
      id: 5,
      name: 'Louis Vuitton Trainer',
      brand: 'Louis Vuitton',
      category: 'luxury',
      price: 95,
      originalPrice: 1250,
      rating: 5.0,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1560769623-6ec69d478ceb?w=400&h=300&fit=crop',
      sizes: [8, 9, 10, 11],
      color: 'Black/White',
      condition: 'Excellent',
      popular: true,
    },
    {
      id: 6,
      name: 'New Balance 990v5',
      brand: 'New Balance',
      category: 'sneakers',
      price: 20,
      originalPrice: 185,
      rating: 4.6,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=300&fit=crop',
      sizes: [7, 8, 9, 10, 11, 12],
      color: 'Grey',
      condition: 'Very Good',
      popular: false,
    },
    {
      id: 7,
      name: 'Timberland Premium Boots',
      brand: 'Timberland',
      category: 'boots',
      price: 28,
      originalPrice: 198,
      rating: 4.8,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop',
      sizes: [7, 8, 9, 10, 11],
      color: 'Wheat Nubuck',
      condition: 'Good',
      popular: false,
    },
    {
      id: 8,
      name: 'Balenciaga Triple S',
      brand: 'Balenciaga',
      category: 'luxury',
      price: 120,
      originalPrice: 950,
      rating: 4.7,
      reviews: 88,
      image: 'https://images.unsplash.com/photo-1560769623-6ec69d478ceb?w=400&h=300&fit=crop',
      sizes: [8, 9, 10, 11],
      color: 'White/Black/Red',
      condition: 'Very Good',
      popular: true,
    },
  ];

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredShoes = shoes.filter(shoe => {
    const matchesSearch = shoe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         shoe.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || shoe.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'under30' && shoe.price < 30) ||
                        (priceRange === '30to50' && shoe.price >= 30 && shoe.price <= 50) ||
                        (priceRange === 'over50' && shoe.price > 50);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) + (priceRange !== 'all' ? 1 : 0);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafaf9' }}>
      {/* Hero Banner with Parallax Effect */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: 'white',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=1200&h=400&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Fade in timeout={800}>
            <Box sx={{ textAlign: 'center' }}>
              <Chip
                label="New Arrivals Weekly"
                sx={{
                  bgcolor: alpha('#fff', 0.2),
                  color: 'white',
                  mb: 2,
                  backdropFilter: 'blur(8px)',
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 800,
                  mb: 2,
                  mt: 1,
                  background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Our Collection
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.95, maxWidth: 600, mx: 'auto' }}>
                Discover premium footwear from top luxury brands. Rent today, shine tomorrow.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Filters Section - Enhanced */}
      <Container maxWidth="lg" sx={{ mt: -4, mb: 4 }}>
        <Slide direction="down" in timeout={600}>
          <Box>
            {/* Main Filter Bar */}
            <Box
              sx={{
                bgcolor: 'white',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                p: 2,
                pt: 13,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              <TextField
                placeholder="Search shoes by name or brand..."
                variant="outlined"
                size="small"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ flex: 2, minWidth: 250 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: theme.palette.primary.main }} />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: 2 },
                }}
              />
              
              <Stack direction="row" spacing={2} alignItems="center" sx={{ flexWrap: 'wrap', gap: 1 }}>
                <FormControl size="small" sx={{ minWidth: 130 }}>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={selectedCategory}
                    label="Category"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <MenuItem value="all">All Categories</MenuItem>
                    <MenuItem value="sneakers">👟 Sneakers</MenuItem>
                    <MenuItem value="boots">👢 Boots</MenuItem>
                    <MenuItem value="luxury">💎 Luxury</MenuItem>
                  </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 130 }}>
                  <InputLabel>Price Range</InputLabel>
                  <Select
                    value={priceRange}
                    label="Price Range"
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                    <MenuItem value="all">All Prices</MenuItem>
                    <MenuItem value="under30">Under $30/day</MenuItem>
                    <MenuItem value="30to50">$30 - $50/day</MenuItem>
                    <MenuItem value="over50">Over $50/day</MenuItem>
                  </Select>
                </FormControl>

                <ToggleButtonGroup
                  value={viewMode}
                  exclusive
                  onChange={(e, val) => val && setViewMode(val)}
                  size="small"
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  <ToggleButton value="grid">
                    <GridIcon fontSize="small" />
                  </ToggleButton>
                  <ToggleButton value="list">
                    <ListIcon fontSize="small" />
                  </ToggleButton>
                </ToggleButtonGroup>

                <IconButton 
                  sx={{ display: { xs: 'flex', sm: 'none' }, bgcolor: alpha(theme.palette.primary.main, 0.1) }}
                  onClick={() => setMobileFilterOpen(true)}
                >
                  <Badge badgeContent={activeFiltersCount} color="primary">
                    <FilterIcon />
                  </Badge>
                </IconButton>
              </Stack>
            </Box>

            {/* Active Filters Display */}
            {activeFiltersCount > 0 && (
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                {selectedCategory !== 'all' && (
                  <Chip
                    label={`Category: ${selectedCategory}`}
                    onDelete={() => setSelectedCategory('all')}
                    size="small"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
                  />
                )}
                {priceRange !== 'all' && (
                  <Chip
                    label={`Price: ${priceRange === 'under30' ? 'Under $30' : priceRange === '30to50' ? '$30-$50' : 'Over $50'}`}
                    onDelete={() => setPriceRange('all')}
                    size="small"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
                  />
                )}
                <Chip
                  label={`${filteredShoes.length} results found`}
                  size="small"
                  variant="outlined"
                />
              </Box>
            )}
          </Box>
        </Slide>
      </Container>

      {/* Mobile Filter Drawer */}
      <Drawer
        anchor="bottom"
        open={mobileFilterOpen}
        onClose={() => setMobileFilterOpen(false)}
        PaperProps={{ sx: { borderRadius: '20px 20px 0 0', p: 3 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" fontWeight={700}>Filter Options</Typography>
          <IconButton onClick={() => setMobileFilterOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="sneakers">Sneakers</MenuItem>
            <MenuItem value="boots">Boots</MenuItem>
            <MenuItem value="luxury">Luxury</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Price Range</InputLabel>
          <Select
            value={priceRange}
            label="Price Range"
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <MenuItem value="all">All Prices</MenuItem>
            <MenuItem value="under30">Under $30/day</MenuItem>
            <MenuItem value="30to50">$30 - $50/day</MenuItem>
            <MenuItem value="over50">Over $50/day</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setMobileFilterOpen(false)}
          sx={{ borderRadius: 2 }}
        >
          Apply Filters
        </Button>
      </Drawer>

      {/* Shoes Grid/List View */}
      <Container maxWidth="xl" sx={{ pb: 8 }}>
        {viewMode === 'grid' ? (
          <Grid container spacing={3}>
            {filteredShoes.map((shoe, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={shoe.id}>
                <Fade in timeout={400 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                        '& .shoe-image': {
                          transform: 'scale(1.05)',
                        },
                      },
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Popular Badge */}
                    {shoe.popular && (
                      <Chip
                        label="🔥 Bestseller"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 12,
                          left: 12,
                          zIndex: 2,
                          bgcolor: '#ff4757',
                          color: 'white',
                          fontWeight: 600,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        }}
                      />
                    )}
                    
                    {/* Wishlist Button */}
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 2,
                        bgcolor: 'white',
                        '&:hover': { bgcolor: '#f0f0f0' },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                      onClick={() => toggleWishlist(shoe.id)}
                    >
                      {wishlist.includes(shoe.id) ? (
                        <LikedIcon sx={{ color: '#ff4757' }} />
                      ) : (
                        <WishlistIcon />
                      )}
                    </IconButton>

                    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="260"
                        image={shoe.image}
                        alt={shoe.name}
                        className="shoe-image"
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                    </Box>
                    
                    <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                          {shoe.brand}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Rating value={shoe.rating} precision={0.1} size="small" readOnly />
                          <Typography variant="caption" color="text.secondary">
                            ({shoe.reviews})
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontSize: '1rem', lineHeight: 1.3 }}>
                        {shoe.name}
                      </Typography>

                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1.5 }}>
                        <Chip
                          label={shoe.condition}
                          size="small"
                          sx={{
                            bgcolor: alpha(theme.palette.success.main, 0.1),
                            color: 'success.main',
                            fontSize: '0.7rem',
                            height: 22,
                          }}
                        />
                        <Chip
                          label={shoe.color}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.7rem', height: 22 }}
                        />
                      </Box>

                      <Box sx={{ mt: 1.5 }}>
                        <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main', display: 'inline' }}>
                          ${shoe.price}
                        </Typography>
                        <Typography component="span" variant="caption" sx={{ color: 'text.secondary' }}>
                          /day
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
                          Retail: ${shoe.originalPrice}
                        </Typography>
                      </Box>
                    </CardContent>

                    <CardActions sx={{ p: 2.5, pt: 0 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<CalendarIcon />}
                        sx={{
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          py: 1,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                        }}
                      >
                        Rent Now
                      </Button>
                    </CardActions>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        ) : (
          // List View
          <Stack spacing={2}>
            {filteredShoes.map((shoe, index) => (
              <Fade in timeout={400 + index * 100} key={shoe.id}>
                <Card sx={{ display: 'flex', borderRadius: 3, overflow: 'hidden' }}>
                  <Box sx={{ width: 180, height: 180 }}>
                    <CardMedia
                      component="img"
                      image={shoe.image}
                      alt={shoe.name}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                          {shoe.brand}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>{shoe.name}</Typography>
                      </Box>
                      <IconButton onClick={() => toggleWishlist(shoe.id)}>
                        {wishlist.includes(shoe.id) ? <LikedIcon sx={{ color: '#ff4757' }} /> : <WishlistIcon />}
                      </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, my: 1 }}>
                      <Rating value={shoe.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="caption">({shoe.reviews} reviews)</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                      <Chip label={shoe.condition} size="small" />
                      <Chip label={shoe.color} size="small" variant="outlined" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                          ${shoe.price}
                          <Typography component="span" variant="caption">/day</Typography>
                        </Typography>
                        <Typography variant="caption" color="text.secondary">Retail: ${shoe.originalPrice}</Typography>
                      </Box>
                      <Button variant="contained" startIcon={<CalendarIcon />}>Rent Now</Button>
                    </Box>
                  </Box>
                </Card>
              </Fade>
            ))}
          </Stack>
        )}

        {/* No Results */}
        {filteredShoes.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 15 }}>
            <Box sx={{ fontSize: 64, mb: 2 }}>👟</Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              No shoes found
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Try adjusting your search or filter criteria
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
            >
              Clear All Filters
            </Button>
          </Box>
        )}

        {/* Pagination */}
        {filteredShoes.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Pagination count={Math.ceil(filteredShoes.length / 8)} color="primary" size="large" />
          </Box>
        )}
      </Container>

      {/* Features Banner */}
      <Box
        sx={{
          background: `linear-gradient(120deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(theme.palette.secondary.main, 0.05)})`,
          py: 5,
          mt: 4,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={6} md={3} textAlign="center">
              <CheckIcon sx={{ fontSize: 32, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="body2" fontWeight={600}>Authentic Products</Typography>
              <Typography variant="caption" color="text.secondary">100% genuine brands</Typography>
            </Grid>
            <Grid item xs={6} md={3} textAlign="center">
              <CheckIcon sx={{ fontSize: 32, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="body2" fontWeight={600}>Free Shipping</Typography>
              <Typography variant="caption" color="text.secondary">Both ways</Typography>
            </Grid>
            <Grid item xs={6} md={3} textAlign="center">
              <CheckIcon sx={{ fontSize: 32, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="body2" fontWeight={600}>Sanitized</Typography>
              <Typography variant="caption" color="text.secondary">Professional cleaning</Typography>
            </Grid>
            <Grid item xs={6} md={3} textAlign="center">
              <CheckIcon sx={{ fontSize: 32, color: theme.palette.primary.main, mb: 1 }} />
              <Typography variant="body2" fontWeight={600}>24/7 Support</Typography>
              <Typography variant="caption" color="text.secondary">Always here to help</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Collection;
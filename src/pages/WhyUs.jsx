import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  alpha,
  Fade,
  Slide,
  Avatar,
  Rating,
  Chip,
} from '@mui/material';
import {
  Diamond as DiamondIcon,
  Speed as SpeedIcon,
  ThumbUp as ThumbUpIcon,
  LocalShipping as ShippingIcon,
  CleaningServices as CleanIcon,
  SupportAgent as SupportIcon,
  PriceCheck as PriceIcon,
  Verified as VerifiedIcon,
  Favorite as HeartIcon,
  EmojiEmotions as SmileIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

const WhyUs = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <PriceIcon sx={{ fontSize: 40 }} />,
      title: 'Affordable Luxury',
      description: 'Rent premium shoes starting from just $20/day. Save up to 90% compared to retail prices.',
      color: '#4caf50',
      stat: 'Save 90%',
    },
    {
      icon: <CleanIcon sx={{ fontSize: 40 }} />,
      title: 'Sterilized & Clean',
      description: 'Every pair undergoes professional deep cleaning and sanitization before each rental.',
      color: '#2196f3',
      stat: '100% Sanitized',
    },
    {
      icon: <ShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Free Shipping Both Ways',
      description: 'We deliver to your doorstep and provide prepaid return labels. No hidden fees.',
      color: '#ff9800',
      stat: 'Free Returns',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Customer Support',
      description: 'Our dedicated team is always here to help with sizing, returns, or any questions.',
      color: '#9c27b0',
      stat: 'Instant Help',
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
      title: 'Authenticity Guaranteed',
      description: '100% genuine luxury brands. Every pair is verified by experts.',
      color: '#e91e63',
      stat: 'Authentic Only',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure Payments',
      description: 'Multiple payment options with bank-level encryption. Rent now, pay later available.',
      color: '#00bcd4',
      stat: 'SSL Secure',
    },
  ];

  const stats = [
    { value: '10,000+', label: 'Happy Customers', icon: <SmileIcon /> },
    { value: '98%', label: 'Satisfaction Rate', icon: <ThumbUpIcon /> },
    { value: '50+', label: 'Luxury Brands', icon: <DiamondIcon /> },
    { value: '24h', label: 'Delivery Time', icon: <SpeedIcon /> },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Blogger',
      rating: 5,
      comment: 'Absolutely love this service! Rented Gucci sneakers for an event and they looked brand new. Will definitely rent again.',
      avatar: 'S',
    },
    {
      name: 'Michael Chen',
      role: 'Business Professional',
      rating: 5,
      comment: 'Fast delivery, perfect condition, and amazing customer service. The whole process was seamless.',
      avatar: 'M',
    },
    {
      name: 'Emma Davis',
      role: 'Wedding Guest',
      rating: 4.5,
      comment: 'Rented heels for a wedding and they were so comfortable! Great selection and fair prices.',
      avatar: 'E',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafaf9' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Fade in timeout={800}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="overline"
                sx={{ letterSpacing: 3, fontWeight: 600, opacity: 0.9 }}
              >
                Why Choose Us
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 800,
                  mb: 2,
                  mt: 1,
                }}
              >
                Why Rented Shoes?
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto', mb: 4 }}>
                Experience luxury footwear without the commitment. Affordable, stylish, and hassle-free.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: theme.palette.primary.main,
                  '&:hover': {
                    bgcolor: alpha('#fff', 0.9),
                    transform: 'translateY(-2px)',
                  },
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                Explore Collection →
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ mt: -4, mb: 6 }}>
        <Slide direction="up" in timeout={600}>
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: 4,
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              p: 3,
              pt: 15,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              gap: 3,
            }}
          >
            {stats.map((stat, index) => (
              <Box key={index} textAlign="center" sx={{ flex: 1, minWidth: 120 }}>
                <Avatar
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    width: 56,
                    height: 56,
                    mx: 'auto',
                    mb: 1,
                  }}
                >
                  {stat.icon}
                </Avatar>
                <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Slide>
      </Container>

      {/* Features Grid - 2 cards per row side by side */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 1 }}
          >
            Premium Benefits
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            What Makes Us Different
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            We're revolutionizing the way people experience luxury footwear. Here's why thousands trust us.
          </Typography>
        </Box>

        {/* Using display: grid for better control - ensures side by side layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',        // 1 column on mobile
              sm: 'repeat(2, 1fr)', // 2 columns on tablet and above
            },
            gap: 3,
          }}
        >
          {features.map((feature, index) => (
            <Fade in timeout={400 + index * 100} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: 3,
                      bgcolor: alpha(feature.color, 0.1),
                      color: feature.color,
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {feature.description}
                  </Typography>
                  <Chip
                    label={feature.stat}
                    size="small"
                    sx={{
                      bgcolor: alpha(feature.color, 0.1),
                      color: feature.color,
                      fontWeight: 600,
                    }}
                  />
                </CardContent>
              </Card>
            </Fade>
          ))}
        </Box>
      </Container>

      {/* Testimonials Section - 2 cards per row side by side */}
      <Box sx={{ bgcolor: alpha(theme.palette.primary.main, 0.03), py: 8, mt: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 1 }}
            >
              Testimonials
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              What Our Customers Say
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Don't just take our word for it - hear from our happy customers
            </Typography>
          </Box>

          {/* Using display: grid for testimonials */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',        // 1 column on mobile
                sm: 'repeat(2, 1fr)', // 2 columns on tablet and above
              },
              gap: 3,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <Fade in timeout={500 + index * 150} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    bgcolor: 'white',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          width: 48,
                          height: 48,
                          mr: 2,
                        }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} precision={0.5} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      "{testimonial.comment}"
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          background: `linear-gradient(120deg, ${alpha(theme.palette.secondary.main, 0.1)}, ${alpha(
            theme.palette.primary.main,
            0.05
          )})`,
          py: 6,
          mt: 6,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <HeartIcon sx={{ fontSize: 50, color: '#ff4757', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Ready to Step into Style?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Join thousands of happy customers and experience the future of footwear rental.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 3,
              }}
            >
              Start Renting Today
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Trust Indicators */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          <Box textAlign="center">
            <VerifiedIcon sx={{ fontSize: 32, color: 'success.main', mb: 1 }} />
            <Typography variant="body2" fontWeight={600}>
              Authentic Products
            </Typography>
          </Box>
          <Box textAlign="center">
            <ShippingIcon sx={{ fontSize: 32, color: 'info.main', mb: 1 }} />
            <Typography variant="body2" fontWeight={600}>
              Free Shipping
            </Typography>
          </Box>
          <Box textAlign="center">
            <CleanIcon sx={{ fontSize: 32, color: 'warning.main', mb: 1 }} />
            <Typography variant="body2" fontWeight={600}>
              Professional Cleaning
            </Typography>
          </Box>
          <Box textAlign="center">
            <SupportIcon sx={{ fontSize: 32, color: 'secondary.main', mb: 1 }} />
            <Typography variant="body2" fontWeight={600}>
              24/7 Support
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs;
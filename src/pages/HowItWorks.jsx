import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
  Divider,
  useTheme,
  alpha,
  Chip,
  Fade,
  Zoom,
  Stack,
} from '@mui/material';
import {
  ShoppingBag as ShoesIcon,
  CalendarMonth as CalendarIcon,
  CreditCard as BookingIcon,
  EmojiEmotions as EnjoyIcon,
  CheckCircle as CheckIcon,
  TrendingUp as TrendIcon,
  RocketLaunch as RocketIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';
import Navbar from './Navbar';

const HowItWorks = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  // Steps data for stepper and cards
  const steps = [
    {
      label: 'Choose Shoes',
      description: 'Browse our premium collection of sneakers, loafers, boots, and heels. Filter by size, brand, style, or occasion. Each pair comes with detailed photos and condition notes.',
      longDescription: 'Explore hundreds of authentic luxury footwear from top brands like Nike, Gucci, Adidas, and more. Use our smart filters to find the perfect pair for any occasion.',
      icon: <ShoesIcon sx={{ fontSize: 28 }} />,
      color: '#e91e63',
      tips: '200+ authentic brands',
      stat: '500+ Styles',
    },
    {
      label: 'Select Dates',
      description: 'Pick your rental start and end dates. Whether it\'s a weekend getaway, a business meeting, or a wedding — we offer flexible daily, weekly, and monthly rates.',
      longDescription: 'Choose from daily, weekly, or monthly rental plans. Need them longer? Easily extend your rental period through your dashboard.',
      icon: <CalendarIcon sx={{ fontSize: 28 }} />,
      color: '#2196f3',
      tips: 'Flexible durations',
      stat: 'Free 1-day buffer',
    },
    {
      label: 'Secure Booking',
      description: 'Secure your reservation with a few clicks. We accept all major credit cards, PayPal, and BNPL options. Instant confirmation and a dedicated support team ready to help.',
      longDescription: 'Complete your booking in under 2 minutes. Get instant confirmation via email and SMS. Cancel up to 24 hours before pickup for a full refund.',
      icon: <BookingIcon sx={{ fontSize: 28 }} />,
      color: '#ff9800',
      tips: 'Instant confirmation',
      stat: 'Secure payments',
    },
    {
      label: 'Enjoy Your Shoes',
      description: 'Your shoes arrive fresh, cleaned, and sanitized. Wear them with confidence. When done, just drop them in the prepaid return box — we handle the rest.',
      longDescription: 'Shoes are delivered to your doorstep in eco-friendly packaging. After wearing, simply use the prepaid shipping label to return. No hassle, no stress.',
      icon: <EnjoyIcon sx={{ fontSize: 28 }} />,
      color: '#4caf50',
      tips: 'Free returns',
      stat: 'Eco-friendly',
    },
  ];

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
    <Navbar />
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(145deg, ${alpha(theme.palette.primary.light, 0.05)} 0%, ${alpha(
          theme.palette.background.default,
          0.8
        )} 100%)`,
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Chip
              label="How It Works"
              size="medium"
              sx={{
                mb: 2,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                fontWeight: 600,
                letterSpacing: 0.5,
                px: 1,
              }}
              icon={<RocketIcon />}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              How Rented Shoes Works
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Four simple steps to step into luxury footwear without the commitment
            </Typography>
          </Box>
        </Fade>

        {/* Main Content */}
        <Grid container spacing={5} alignItems="stretch">
          {/* Left Side - Interactive Stepper */}
          <Grid item xs={12} md={7}>
            <Zoom in timeout={500}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  background: 'white',
                  height: '100%',
                  transition: 'all 0.3s',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                }}
              >
                <Box sx={{ p: { xs: 2, sm: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Box
                      sx={{
                        width: 4,
                        height: 28,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: 2,
                      }}
                    />
                    <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: 1 }}>
                      Simple Process
                    </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                    Get started in 4 easy steps
                  </Typography>

                  <Stepper activeStep={activeStep} orientation="vertical" sx={{ mb: 3 }}>
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          StepIconComponent={() => (
                            <Avatar
                              sx={{
                                bgcolor: activeStep >= index ? step.color : theme.palette.grey[200],
                                color: '#fff',
                                width: 44,
                                height: 44,
                                transition: 'all 0.3s',
                                boxShadow: activeStep === index ? `0 0 0 5px ${alpha(step.color, 0.2)}` : 'none',
                                fontSize: '1.2rem',
                                fontWeight: 600,
                              }}
                            >
                              {index + 1}
                            </Avatar>
                          )}
                          sx={{
                            '& .MuiStepLabel-label': {
                              fontSize: '1.1rem',
                              fontWeight: activeStep === index ? 700 : 500,
                              color: activeStep === index ? step.color : 'text.primary',
                            },
                          }}
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Box sx={{ ml: 1, mb: 2 }}>
                            <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                              {step.longDescription}
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                              <Chip
                                label={step.tips}
                                size="small"
                                sx={{
                                  bgcolor: alpha(step.color, 0.1),
                                  color: step.color,
                                  fontWeight: 500,
                                }}
                              />
                              <Chip
                                label={step.stat}
                                size="small"
                                variant="outlined"
                                sx={{ borderColor: alpha(step.color, 0.3) }}
                              />
                            </Stack>
                            <Box sx={{ mb: 2 }}>
                              <Button
                                variant="contained"
                                onClick={handleNext}
                                disabled={index === steps.length - 1}
                                sx={{
                                  mr: 1.5,
                                  bgcolor: step.color,
                                  textTransform: 'none',
                                  fontWeight: 600,
                                  '&:hover': { bgcolor: step.color, filter: 'brightness(0.9)' },
                                }}
                              >
                                {index === steps.length - 1 ? 'Completed' : 'Continue'}
                              </Button>
                              <Button 
                                disabled={index === 0} 
                                onClick={handleBack} 
                                sx={{ textTransform: 'none' }}
                              >
                                Back
                              </Button>
                            </Box>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  
                  {activeStep === steps.length && (
                    <Paper 
                      square 
                      elevation={0} 
                      sx={{ 
                        p: 3, 
                        bgcolor: alpha(theme.palette.success.main, 0.08), 
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                      }}
                    >
                      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <CheckIcon sx={{ color: theme.palette.success.main }} /> 
                        All steps completed — you're ready to rent!
                      </Typography>
                      <Button 
                        onClick={handleReset} 
                        sx={{ mt: 2, color: 'primary.main', textTransform: 'none' }}
                      >
                        Start over
                      </Button>
                    </Paper>
                  )}
                </Box>
              </Paper>
            </Zoom>
          </Grid>

          {/* Right Side - Feature Cards */}
          <Grid item xs={12} md={5}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {steps.map((step, idx) => (
                <Fade in timeout={400 + idx * 150} key={step.label}>
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: `1px solid ${alpha(step.color, 0.15)}`,
                      background: 'white',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateX(12px)',
                        boxShadow: `0 12px 28px -12px ${alpha(step.color, 0.4)}`,
                        borderColor: step.color,
                      },
                    }}
                    onClick={() => setActiveStep(idx)}
                  >
                    <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2.5 }}>
                      <Avatar
                        sx={{
                          bgcolor: alpha(step.color, 0.12),
                          color: step.color,
                          width: 64,
                          height: 64,
                          boxShadow: `0 4px 14px ${alpha(step.color, 0.2)}`,
                        }}
                      >
                        {step.icon}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Typography variant="caption" sx={{ color: step.color, fontWeight: 700 }}>
                            Step {idx + 1}
                          </Typography>
                          <Box sx={{ width: 4, height: 4, bgcolor: step.color, borderRadius: '50%' }} />
                          <Typography variant="caption" color="text.secondary">
                            {step.stat}
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                          {step.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                          {step.tips}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              ))}

              {/* Quick Stats Banner */}
              <Box
                sx={{
                  mt: 2,
                  p: 3,
                  borderRadius: 3,
                  background: `linear-gradient(120deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(
                    theme.palette.secondary.main,
                    0.05
                  )})`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                  textAlign: 'center',
                }}
              >
                <Stack direction="row" spacing={2} justifyContent="center" divider={<Divider orientation="vertical" flexItem />}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                      10k+
                    </Typography>
                    <Typography variant="caption" color="text.secondary">Happy Rentals</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                      4.9★
                    </Typography>
                    <Typography variant="caption" color="text.secondary">Rating</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                      50+
                    </Typography>
                    <Typography variant="caption" color="text.secondary">Brands</Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Process Flow */}
        <Box
          sx={{
            mt: 6,
            textAlign: 'center',
            py: 4,
            px: 3,
            borderRadius: 4,
            bgcolor: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 3 },
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            {steps.map((step, idx) => (
              <React.Fragment key={step.label}>
                <Box 
                  component="span" 
                  sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: 1,
                    px: 2,
                    py: 1,
                    borderRadius: 5,
                    bgcolor: alpha(step.color, 0.08),
                    color: step.color,
                  }}
                >
                  {step.icon}
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    {step.label.replace('👟', '').trim()}
                  </Typography>
                </Box>
                {idx < steps.length - 1 && (
                  <Box component="span" sx={{ fontSize: '1.8rem', color: 'primary.main', fontWeight: 300 }}>
                    →
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Typography>
          
          <Divider sx={{ my: 3, maxWidth: 400, mx: 'auto' }} />
          
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" sx={{ gap: 2 }}>
            <Chip icon={<VerifiedIcon />} label="100% Authentic" size="small" />
            <Chip label="Free Shipping Both Ways" size="small" />
            <Chip label="Professional Sanitization" size="small" />
            <Chip label="24/7 Customer Support" size="small" />
          </Stack>
          
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Join 10,000+ happy customers renting premium footwear
          </Typography>
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default HowItWorks;
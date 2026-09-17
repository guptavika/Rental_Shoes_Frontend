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
  RocketLaunch as RocketIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';

// ✅ Steps ko component ke BAHAR rakha (re-render pe recreate nahi hoga)
const STEPS = [
  {
    label: 'Choose Shoes',
    description:
      'Browse our premium collection of sneakers, loafers, boots, and heels. Filter by size, brand, style, or occasion.',
    longDescription:
      'Explore hundreds of authentic luxury footwear from top brands like Nike, Gucci, Adidas, and more. Use our smart filters to find the perfect pair for any occasion.',
    Icon: ShoesIcon,
    color: '#e91e63',
    tips: '200+ authentic brands',
    stat: '500+ Styles',
  },
  {
    label: 'Select Dates',
    description:
      "Pick your rental start and end dates. Whether it's a weekend getaway or a wedding — flexible daily, weekly, and monthly rates.",
    longDescription:
      'Choose from daily, weekly, or monthly rental plans. Need them longer? Easily extend your rental period through your dashboard.',
    Icon: CalendarIcon,
    color: '#2196f3',
    tips: 'Flexible durations',
    stat: 'Free 1-day buffer',
  },
  {
    label: 'Secure Booking',
    description:
      'Secure your reservation with a few clicks. All major cards, PayPal, and BNPL options accepted. Instant confirmation.',
    longDescription:
      'Complete your booking in under 2 minutes. Get instant confirmation via email and SMS. Cancel up to 24 hours before pickup for a full refund.',
    Icon: BookingIcon,
    color: '#ff9800',
    tips: 'Instant confirmation',
    stat: 'Secure payments',
  },
  {
    label: 'Enjoy Your Shoes',
    description:
      'Your shoes arrive fresh, cleaned, and sanitized. Wear them with confidence. When done, drop them in the prepaid return box.',
    longDescription:
      'Shoes are delivered to your doorstep in eco-friendly packaging. After wearing, simply use the prepaid shipping label to return. No hassle, no stress.',
    Icon: EnjoyIcon,
    color: '#4caf50',
    tips: 'Free returns',
    stat: 'Eco-friendly',
  },
];

const TRUST_BADGES = [
  '100% Authentic',
  'Free Shipping Both Ways',
  'Professional Sanitization',
  '24/7 Customer Support',
];

const STATS = [
  { value: '10k+', label: 'Happy Rentals' },
  { value: '4.9★', label: 'Rating' },
  { value: '50+', label: 'Brands' },
];

const HowItWorks = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((p) => p + 1);
  const handleBack = () => setActiveStep((p) => p - 1);
  const handleReset = () => setActiveStep(0);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        // ✅ Fixed navbar ke liye top padding
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 10 },
        background: `linear-gradient(145deg, ${alpha(
          theme.palette.primary.light,
          0.05
        )} 0%, ${alpha(theme.palette.background.default, 0.8)} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {/* ============ 1. HERO ============ */}
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Chip
              label="How It Works"
              icon={<RocketIcon />}
              sx={{
                mb: 2,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                fontWeight: 600,
                letterSpacing: 0.5,
                px: 1,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
                fontWeight: 800,
                background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
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
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              Four simple steps to step into luxury footwear without the
              commitment
            </Typography>
          </Box>
        </Fade>

        {/* ============ 2. MAIN CONTENT (Stepper + Cards) ============ */}
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="stretch">
          {/* ---- LEFT: Interactive Stepper ---- */}
          <Grid item xs={12} md={7}>
            <Zoom in timeout={500}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  background: '#fff',
                  height: '100%',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                }}
              >
                <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
                  {/* Header */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 4,
                        height: 28,
                        bgcolor: theme.palette.primary.main,
                        borderRadius: 2,
                      }}
                    />
                    <Typography
                      variant="overline"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        letterSpacing: 1,
                      }}
                    >
                      Simple Process
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    Get started in 4 easy steps
                  </Typography>

                  {/* Stepper */}
                  <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    sx={{ mb: 3 }}
                  >
                    {STEPS.map((step, index) => {
                      const StepIcon = step.Icon;
                      const isActive = activeStep === index;

                      return (
                        <Step key={step.label}>
                          <StepLabel
                            // ✅ Icon + number dono dikhte hain
                            StepIconComponent={() => (
                              <Avatar
                                sx={{
                                  bgcolor:
                                    activeStep >= index
                                      ? step.color
                                      : theme.palette.grey[200],
                                  color:
                                    activeStep >= index
                                      ? '#fff'
                                      : theme.palette.grey[500],
                                  width: 44,
                                  height: 44,
                                  transition: 'all 0.3s',
                                  boxShadow: isActive
                                    ? `0 0 0 5px ${alpha(step.color, 0.2)}`
                                    : 'none',
                                }}
                              >
                                <StepIcon sx={{ fontSize: 22 }} />
                              </Avatar>
                            )}
                            sx={{
                              '& .MuiStepLabel-label': {
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                fontWeight: isActive ? 700 : 500,
                                color: isActive ? step.color : 'text.primary',
                              },
                            }}
                          >
                            {step.label}
                          </StepLabel>

                          <StepContent>
                            <Box sx={{ ml: 1, mb: 2 }}>
                              <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                  color: 'text.secondary',
                                  lineHeight: 1.6,
                                }}
                              >
                                {step.longDescription}
                              </Typography>

                              <Stack
                                direction="row"
                                spacing={1}
                                sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}
                              >
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
                                  sx={{
                                    borderColor: alpha(step.color, 0.3),
                                  }}
                                />
                              </Stack>

                              <Box sx={{ display: 'flex', gap: 1.5 }}>
                                <Button
                                  variant="contained"
                                  onClick={handleNext}
                                  disabled={index === STEPS.length - 1}
                                  sx={{
                                    bgcolor: step.color,
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    '&:hover': {
                                      bgcolor: step.color,
                                      filter: 'brightness(0.9)',
                                    },
                                  }}
                                >
                                  {index === STEPS.length - 1
                                    ? 'Completed'
                                    : 'Continue'}
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
                      );
                    })}
                  </Stepper>

                  {/* Completion Message */}
                  {activeStep === STEPS.length && (
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: alpha(theme.palette.success.main, 0.08),
                        borderRadius: 3,
                        border: `1px solid ${alpha(
                          theme.palette.success.main,
                          0.2
                        )}`,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
                      >
                        <CheckIcon
                          sx={{ color: theme.palette.success.main }}
                        />
                        All steps completed — you're ready to rent!
                      </Typography>
                      <Button
                        onClick={handleReset}
                        sx={{
                          mt: 2,
                          color: 'primary.main',
                          textTransform: 'none',
                        }}
                      >
                        Start over
                      </Button>
                    </Paper>
                  )}
                </Box>
              </Paper>
            </Zoom>
          </Grid>

          {/* ---- RIGHT: Feature Cards ---- */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {STEPS.map((step, idx) => {
                const Icon = step.Icon;
                const isActive = activeStep === idx;

                return (
                  <Fade in timeout={400 + idx * 150} key={step.label}>
                    <Card
                      elevation={0}
                      onClick={() => setActiveStep(idx)}
                      sx={{
                        borderRadius: 3,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: `1px solid ${
                          isActive
                            ? step.color
                            : alpha(step.color, 0.15)
                        }`,
                        background: '#fff',
                        cursor: 'pointer',
                        // ✅ translateX ki jagah translateY use kiya (mobile safe)
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: `0 12px 28px -12px ${alpha(
                            step.color,
                            0.4
                          )}`,
                          borderColor: step.color,
                        },
                        ...(isActive && {
                          boxShadow: `0 12px 28px -12px ${alpha(
                            step.color,
                            0.4
                          )}`,
                        }),
                      }}
                    >
                      <CardContent
                        sx={{
                          p: { xs: 2, sm: 2.5 },
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          '&:last-child': { pb: { xs: 2, sm: 2.5 } },
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: alpha(step.color, 0.12),
                            color: step.color,
                            width: { xs: 52, sm: 60 },
                            height: { xs: 52, sm: 60 },
                            boxShadow: `0 4px 14px ${alpha(
                              step.color,
                              0.2
                            )}`,
                          }}
                        >
                          <Icon sx={{ fontSize: 26 }} />
                        </Avatar>

                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              mb: 0.5,
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{ color: step.color, fontWeight: 700 }}
                            >
                              Step {idx + 1}
                            </Typography>
                            <Box
                              sx={{
                                width: 4,
                                height: 4,
                                bgcolor: step.color,
                                borderRadius: '50%',
                              }}
                            />
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              noWrap
                            >
                              {step.stat}
                            </Typography>
                          </Box>

                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              mb: 0.5,
                              fontSize: { xs: '1rem', sm: '1.1rem' },
                            }}
                          >
                            {step.label}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.4 }}
                          >
                            {step.tips}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Fade>
                );
              })}

              {/* Quick Stats Banner */}
              <Box
                sx={{
                  mt: 1,
                  p: { xs: 2, sm: 3 },
                  borderRadius: 3,
                  background: `linear-gradient(120deg, ${alpha(
                    theme.palette.primary.main,
                    0.05
                  )}, ${alpha(theme.palette.secondary.main, 0.05)})`,
                  border: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.15
                  )}`,
                  textAlign: 'center',
                }}
              >
                <Stack
                  direction="row"
                  spacing={{ xs: 1, sm: 2 }}
                  justifyContent="center"
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  {STATS.map((s) => (
                    <Box key={s.label} sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          color: 'primary.main',
                          fontSize: { xs: '1.2rem', sm: '1.5rem' },
                        }}
                      >
                        {s.value}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {s.label}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* ============ 3. BOTTOM PROCESS FLOW ============ */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            py: { xs: 3, md: 4 },
            px: { xs: 2, sm: 3 },
            borderRadius: 4,
            bgcolor: '#fff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          {/* Flow Steps */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
              mb: 3,
            }}
          >
            {STEPS.map((step, idx) => {
              const Icon = step.Icon;
              return (
                <React.Fragment key={step.label}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: { xs: 1.5, sm: 2 },
                      py: 0.75,
                      borderRadius: 5,
                      bgcolor: alpha(step.color, 0.08),
                      color: step.color,
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                    <Typography
                      component="span"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: '0.85rem', sm: '1rem' },
                      }}
                    >
                      {step.label}
                    </Typography>
                  </Box>

                  {idx < STEPS.length - 1 && (
                    <Box
                      sx={{
                        fontSize: { xs: '1.2rem', sm: '1.6rem' },
                        color: 'primary.main',
                        fontWeight: 300,
                        lineHeight: 1,
                      }}
                    >
                      →
                    </Box>
                  )}
                </React.Fragment>
              );
            })}
          </Box>

          <Divider sx={{ my: 3, maxWidth: 400, mx: 'auto' }} />

          {/* Trust Badges */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: 1 }}
          >
            {TRUST_BADGES.map((label, i) => (
              <Chip
                key={label}
                icon={i === 0 ? <VerifiedIcon /> : undefined}
                label={label}
                size="small"
              />
            ))}
          </Stack>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, textAlign: 'center' }}
          >
            Join 10,000+ happy customers renting premium footwear
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
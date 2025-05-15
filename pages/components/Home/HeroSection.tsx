'use client';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Box
      sx={{
        pt: 16,
        pb: 4,
        color: 'white',
        textAlign: 'right',
        backgroundImage: "url('/assets/img/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
      }}
    >
      <Box
        sx={{
          maxWidth: '1380px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } }}
        >
          Style your home, your way
        </Typography>
        <Typography variant="h6" gutterBottom>
          Elevate your space with stylish, quality furniture made for everyday living.
        </Typography>
        <Button component={Link} href="/Shop" variant="contained" color="secondary" sx={{ mt: 2 }}>
          Shop Furniture
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;

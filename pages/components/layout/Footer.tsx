import { Box, Container, Typography, Link, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f4f4f4', mt: 8, py: 6, borderTop: '1px solid #ddd' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              BuzzyCart
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discover premium furniture crafted with comfort and design in mind. Shop exclusive deals today.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Shop
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="none" color="text.secondary">Living Room</Link>
              <Link href="#" underline="none" color="text.secondary">Bedroom</Link>
              <Link href="#" underline="none" color="text.secondary">Dining</Link>
              <Link href="#" underline="none" color="text.secondary">Office</Link>
            </Stack>
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Support
            </Typography>
            <Stack spacing={1}>
              <Link href="#" underline="none" color="text.secondary">FAQs</Link>
              <Link href="#" underline="none" color="text.secondary">Shipping & Returns</Link>
              <Link href="#" underline="none" color="text.secondary">Privacy Policy</Link>
              <Link href="#" underline="none" color="text.secondary">Terms</Link>
            </Stack>
          </Grid>

          {/* Contact & Social */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Stay Connected
            </Typography>
            <Typography variant="body2" color="text.secondary">
              support@buzzycart.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1-800-BUZZY-FURNI
            </Typography>
            <Stack direction="row" spacing={2} mt={2}>
              <Link href="#" color="inherit"><Facebook /></Link>
              <Link href="#" color="inherit"><Instagram /></Link>
              <Link href="#" color="inherit"><Twitter /></Link>
              <Link href="#" color="inherit"><YouTube /></Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ borderTop: '1px solid #ddd', my: 4 }} />

        {/* Payment & Copyright */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} BuzzyCart. All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={4}>
              <Image src="/assets/img/visa.png" alt="Visa" width={80} height={28} />
              <Image src="/assets/img/mastercard.png" alt="Mastercard" width={80} height={28} />
              <Image src="/assets/img/paypal.png" alt="PayPal" width={80} height={28} />
              <Image src="/assets/img/apple.png" alt="Apple Pay" width={80} height={28} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

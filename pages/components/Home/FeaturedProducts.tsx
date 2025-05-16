import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import { featuredProducts } from '@/utils/productData';

const FeaturedProducts = () => {
  return (
    <Box
      sx={{
        mx: 'auto',
        px: { xs: 2, sm: 3, md: 4 },
        maxWidth: {
          xs: '100%',
          sm: '95%',
          md: '90%',
          lg: '1480px',
        },
        mt: 8
      }}
    >
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={2} sx={{ padding: '12px' }}>
        {featuredProducts.map((product) => (
          <Box
            key={product.id}
            sx={{
              width: {
                xs: '100%',
                sm: '48%',
                md: '31%',
              },
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;

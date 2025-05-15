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
          xs: '100%', // full width on extra small screens
          sm: '95%', // 95% on small screens
          md: '90%', // 90% on medium screens
          lg: '1200px', // fixed width on large screens and up
        },
      }}
    >
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={2}>
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

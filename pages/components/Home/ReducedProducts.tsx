import { Box, Typography, Grid } from '@mui/material';
import ReducedCard from './ReducedCard';
import { reducedProducts } from '@/utils/productData';

const ReducedProducts = () => {
  return (
    <Box
      sx={{
        mx: 'auto',
        px: { xs: 2, sm: 3, md: 4 },
        maxWidth: {
          xs: '100%',
          sm: '95%',
          md: '90%',
          lg: '1400px',
        },
        mt: 8,
      }}
    >
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Limited-Time Deals
      </Typography>
      <Grid container spacing={4}>
        {reducedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ReducedCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReducedProducts;

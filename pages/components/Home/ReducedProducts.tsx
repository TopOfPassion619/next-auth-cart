import { Box, Typography } from '@mui/material';
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
      <div className="flex flex-wrap -mx-2 max-w-[1400px] mx-auto p-4">
        {reducedProducts.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/4 p-2 flex">
            <div className="w-full">
              <ReducedCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default ReducedProducts;

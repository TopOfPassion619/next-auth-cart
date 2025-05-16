'use client';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  CardMedia,
  Chip,
  Stack,
} from '@mui/material';
import { ReducedProduct } from '@/utils/productData';

interface ReducedProductCardProps {
  product: ReducedProduct;
}

const ReducedCard = ({ product }: ReducedProductCardProps) => {
  const {
    name,
    image,
    originalPrice,
    discountedPrice,
    discountPercentage,
    isLimitedTimeOffer,
    inStock,
  } = product;

  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 2,
        transition: 'box-shadow 0.3s ease',
        cursor: 'pointer',
        textAlign: 'center',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <Box sx={{ overflow: 'hidden', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
          sx={{
            width: '300px',
            height: '100',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
      </Box>

      <CardContent>
        <Typography variant="h6" fontWeight="medium" gutterBottom noWrap>
          {name}
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center" alignItems="baseline">
          <Typography color="text.secondary" sx={{ textDecoration: 'line-through' }}>
            ${originalPrice.toFixed(2)}
          </Typography>
          <Typography color="primary" fontWeight={600}>
            ${discountedPrice.toFixed(2)}
          </Typography>
        </Stack>

        {discountPercentage && (
          <Typography color="success.main" variant="body2" fontWeight={500}>
            Save {discountPercentage}%!
          </Typography>
        )}

        {isLimitedTimeOffer && (
          <Chip
            label="Limited Time Offer"
            color="warning"
            size="small"
            sx={{ mt: 1 }}
          />
        )}

        {!inStock && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            Out of Stock
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          disabled={!inStock}
          sx={{
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'white',
              boxShadow: 3,
            },
          }}
        >
          {inStock ? 'Buy Now' : 'Unavailable'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReducedCard;

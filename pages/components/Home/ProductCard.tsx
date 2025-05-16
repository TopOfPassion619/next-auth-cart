'use client';
import { Card, CardContent, Typography, CardActions, Button, Box, CardMedia } from '@mui/material';
import { Products } from '@/utils/productData';

interface ProductCardProps {
  product: Products;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      elevation={3}
      sx={{
        textAlign: 'center',
        borderRadius: 2,
        transition: 'box-shadow 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingTop: '66.66%',
          overflow: 'hidden',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
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
          {product.name}
        </Typography>
        <Typography color="text.secondary" fontWeight={500}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'white',
              boxShadow: 3,
            },
          }}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

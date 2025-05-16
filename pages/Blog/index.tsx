import { Container, Typography } from '@mui/material';
import Layout from '../components/layout/Layout';

const Blog = () => {
  return (
    <Layout>
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Blog Page
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This is the Blog page content.
        </Typography>
      </Container>
    </Layout>
  );
};

export default Blog;

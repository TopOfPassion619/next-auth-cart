import { Container, Typography } from '@mui/material';
import Layout from '../components/layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This is the Contact page content.
        </Typography>
      </Container>
    </Layout>
  );
};

export default Contact;

import Layout from './components/layout/Layout';
import HeroSection from './components/Home/HeroSection';
import FeaturedProducts from './components/Home/FeaturedProducts';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
    </Layout>
  );
};

export default HomePage;

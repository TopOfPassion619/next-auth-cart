import Layout from './components/layout/Layout';
import HeroSection from './components/Home/HeroSection';
import FeaturedProducts from './components/Home/FeaturedProducts';
import ReducedProducts from './components/Home/ReducedProducts';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <ReducedProducts />
    </Layout>
  );
};

export default HomePage;

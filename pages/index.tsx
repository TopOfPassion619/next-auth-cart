import Head from 'next/head';
import Layout from './components/layout/Layout';
import HeroSection from './components/Home/HeroSection';
import FeaturedProducts from './components/Home/FeaturedProducts';
import ReducedProducts from './components/Home/ReducedProducts';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>BuzzyCart | Premium Furniture Store</title>
        <meta
          name="description"
          content="Discover modern and stylish furniture at BuzzyCart. Quality sofas, chairs, tables & more. Shop now with exclusive discounts!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.buzzycart.com/" />

        <meta property="og:title" content="BuzzyCart | Premium Furniture Store" />
        <meta
          property="og:description"
          content="Discover quality furniture with limited-time deals and fast delivery!"
        />
        <meta property="og:url" content="https://www.buzzycart.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.buzzycart.com/assets/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BuzzyCart | Premium Furniture Store" />
        <meta
          name="twitter:description"
          content="Shop sofas, tables, chairs and more with amazing discounts."
        />
        <meta name="twitter:image" content="https://www.buzzycart.com/assets/og-image.jpg" />
      </Head>

      <Layout>
        <HeroSection />
        <FeaturedProducts />
        <ReducedProducts />
      </Layout>
    </>
  );
};

export default HomePage;

import Layout from "./components/layout/Layout";
import Link from 'next/link';

const HomePage = () => {
  return (
    <Layout>
      <div className="relative">
        {/* Hero Section */}
        <section className="pt-24 pb-4 text-white text-center rounded-tl-3xl rounded-tr-3xl" style={{ backgroundImage: "url('/assets/img/hero-bg.png')" }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to MyShop</h1>
          <p className="text-lg md:text-xl mb-6">Your one-stop shop for the latest products</p>
          <Link href="/Shop" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Shop Now
          </Link>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Example Product Card */}
            {[1,2,3].map((item) => (
              <div key={item} className="border rounded-lg shadow hover:shadow-lg transition p-4 text-center">
                <div className="h-48 bg-gray-100 mb-4 rounded-md flex items-center justify-center">Product Image</div>
                <h3 className="font-medium text-lg">Product Name {item}</h3>
                <p className="text-gray-500">$99.99</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy Now</button>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Example Product Card */}
            {[1,2,3].map((item) => (
              <div key={item} className="border rounded-lg shadow hover:shadow-lg transition p-4 text-center">
                <div className="h-48 bg-gray-100 mb-4 rounded-md flex items-center justify-center">Product Image</div>
                <h3 className="font-medium text-lg">Product Name {item}</h3>
                <p className="text-gray-500">$99.99</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Buy Now</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;

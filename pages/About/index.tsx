import Image from 'next/image';
import Layout from '../components/layout/Layout';
import { Button } from '@mui/material';

const About = () => {
  return (
    <Layout>
        <section className="w-full bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                About <span className="text-primary">BuzzyCart</span>
            </h1>
                <h3 className="text-gray-500 text-xl md:text-3xl py-4">Welcome to BuzzyCart</h3>
            <p className="text-lg text-gray-600 mb-6">
                Your destination for premium furniture that transforms houses into homes.
                We believe shopping for furniture should be exciting, engaging, and effortless.
            </p>
            <p className="text-md text-gray-500">
                From sleek modern designs to timeless classics, every piece we offer is curated to enhance your living spaces with style and comfort. 
                Our mission is simple: Deliver top-quality furniture that sparks joy and creates spaces you&apos;ll love.
            </p>
            </div>
            <div className="flex-1">
            <Image
                src="/assets/img/about-hero.png"
                alt="Modern Living Room Furniture"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full object-cover"
            />
            </div>
        </div>

        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                To inspire beautiful living by making high-quality furniture accessible and enjoyable for everyone.
                We envision homes filled with pieces that tell stories, reflect personalities, and stand the test of time.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                At BuzzyCart, we&apos;re committed to delivering exceptional furniture shopping experiences.
                With a seamless online store, curated collections, and a passion for design, we help you create spaces that feel uniquely yours.
                </p>
            </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-semibold text-center mb-10">Why Choose BuzzyCart?</h2>
            <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-lg text-center">
                <Image src="/assets/img/furnitures/furniture3.png" alt="Quality" width={164} height={104} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Carefully selected materials and craftsmanship that stand the test of time.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg text-center">
                <Image src="/assets/img/furnitures/furniture4.png" alt="Design" width={164} height={104} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Designs</h3>
                <p className="text-gray-600">A blend of style and functionality that elevates your living spaces.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg text-center">
                <Image src="/assets/img/furnitures/furniture2.png" alt="Support" width={164} height={104} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
                <p className="text-gray-600">We’re here for you — before, during, and after your purchase.</p>
            </div>
            </div>
        </div>

        <div className="bg-primary text-gray-500 py-12">
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg mb-6">
                Discover furniture that fits your style and makes your home come alive. Start your journey with BuzzyCart today.
            </p>
            <Button variant='outlined' size='medium' color='primary'>
                Shop Now
            </Button>
            </div>
        </div>
        </section>
    </Layout>
  );
};

export default About;


import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CardShowcase from '@/components/CardShowcase';
import FeaturedCards from '@/components/FeaturedCards';
import Testimonials from '@/components/Testimonials';
import OrderTracking from '@/components/OrderTracking';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCards />
        <CardShowcase />
        <Registration />
        <Testimonials />
        <OrderTracking />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

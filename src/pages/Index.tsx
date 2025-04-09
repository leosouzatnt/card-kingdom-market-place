
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCards from '@/components/FeaturedCards';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCards />
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

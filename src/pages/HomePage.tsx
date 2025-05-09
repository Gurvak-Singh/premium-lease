import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import PropertyCategories from '../components/PropertyCategories';
import FeaturedProperties from '../components/FeaturedProperties';
import StudentPrograms from '../components/StudentPrograms';
import CommercialProperty from '../components/CommercialProperty';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  useEffect(() => {
    document.title = 'PremiumLease | Find Your Perfect Space';
  }, []);

  return (
    <div>
      <Hero />
      <PropertyCategories />
      <FeaturedProperties />
      <StudentPrograms />
      <CommercialProperty />
      <Testimonials />
    </div>
  );
};

export default HomePage;
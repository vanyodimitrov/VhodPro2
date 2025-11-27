import React from 'react';
import { Hero } from './Hero';
import { Services } from './Services';
import { WhyUs } from './WhyUs';
import { Pricing } from './Pricing';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
};
import React from 'react';
import { Hero } from '../sections/Hero';
import { Diagnosis } from '../sections/Diagnosis';
import { SystemArchitecture } from '../sections/SystemArchitecture';
import { Proof } from '../sections/Proof';
import { Testimonials } from '../sections/Testimonials';
import { Quantification } from '../sections/Quantification';
import { Comparison } from '../sections/Comparison';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
import { StickyCTA } from '../layout/StickyCTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Diagnosis />
      <SystemArchitecture />
      <Proof />
      <Testimonials />
      <Quantification />
      <Comparison />
      <Pricing />
      <FAQ />
      <StickyCTA />
    </>
  );
};
import React from 'react';
import { Hero } from '../sections/Hero';
import { Diagnosis } from '../sections/Diagnosis';
import { SystemArchitecture } from '../sections/SystemArchitecture';
import { Proof } from '../sections/Proof';
import { Quantification } from '../sections/Quantification';
import { Pricing } from '../sections/Pricing';
import { StickyCTA } from '../layout/StickyCTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Diagnosis />
      <SystemArchitecture />
      <Proof />
      <Quantification />
      <Pricing />
      <StickyCTA />
    </>
  );
};
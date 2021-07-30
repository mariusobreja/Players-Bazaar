import React from 'react';
import { FeaturedPlayers, Hero, Services, Contact } from '../components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedPlayers />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;

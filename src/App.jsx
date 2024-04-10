import React from 'react';
import HeroSectionHome from './components/HeroSectionhome';
import FeaturedProperties from './components/FeaturedProps';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import {ToastContainer } from 'react-toastify';

 export default function App() {
  return (
    <>
      <HeroSectionHome />
      <FeaturedProperties />
      <Reviews />
      <FAQ />
      <ToastContainer />

    </>
  );
}
;

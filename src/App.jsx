import React from 'react';
import HeroSectionHome from './components/HeroSectionhome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FeaturedProperties from './components/FeaturedProps';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';

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

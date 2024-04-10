import React from 'react';
import HeroServices from '../components/HeroServices';
import PropertyValue from '../components/PropertyValue';
import PropertyManagement from '../components/PropertyManagement';
import Investmens from '../components/Investmens';
import {ToastContainer } from 'react-toastify';

export default function ServicesPage() {
  return (
    <>
      <HeroServices />
      <PropertyValue />
      <PropertyManagement />
      <Investmens />
      <ToastContainer />
    </>
  );
}

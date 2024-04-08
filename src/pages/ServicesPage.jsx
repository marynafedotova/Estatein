import React, { Suspense } from 'react';
import HeroServices from '../components/HeroServices';

const LazyInvestments = React.lazy(() => import("../components/Investmens"));
const LazyPropertyManagement = React.lazy(() => import("../components/PropertyManagement"));
const LazyPropertyValue = React.lazy(() => import("../components/PropertyValue"));

export default function ServicesPage() {
  return (
    <>
      <HeroServices />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPropertyValue />
        <LazyPropertyManagement />
        <LazyInvestments />
      </Suspense>
    </>
  );
}

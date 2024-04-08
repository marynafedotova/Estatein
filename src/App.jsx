import React, { Suspense } from 'react';
import HeroSectionHome from './components/HeroSectionhome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LazyFeaturedProperties = React.lazy(() => import('./components/FeaturedProps'));
const LazyReviews = React.lazy(() => import('./components/Reviews'));
const LazyFAQ = React.lazy(() => import('./components/FAQ'));

 export default function App() {
  return (
    <>
      <HeroSectionHome />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFeaturedProperties />
        <LazyReviews />
        <LazyFAQ />
      </Suspense>
      <ToastContainer />
    </>
  );
}
;

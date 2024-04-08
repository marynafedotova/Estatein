import React, { Suspense } from 'react';
import Journey from '../components/Journey.jsx'

const LazyValues = React.lazy(() => import('../components/Values'));
const LazyAchievements = React.lazy(() => import('../components/Achiviements.jsx'));
const LazyNavigating = React.lazy(() => import('../components/Navigating'));
const LazyTeam = React.lazy(() => import('../components/Team'));
const LazyValuedClients = React.lazy(() => import('../components/ValuedClients'));

export default function AboutUsPage() {
  return (<>
     <Journey />
      <Suspense fallback={<div>Loading...</div>}>
      <LazyValues />
      <LazyAchievements />
      <LazyNavigating />
      <LazyTeam />
      <LazyValuedClients />
    </Suspense>
</>
  );
}

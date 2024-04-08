import React, { Suspense } from 'react';
import HeroSectionContacts from '../components/HeroSectionContacts';

const LazyContactsForm = React.lazy(() => import("../components/ContactsForm"));
const LazyLocation = React.lazy(() => import("../components/Location"));
const LazyGalleryContactsPage = React.lazy(() => import("../components/GallaryContactsPage.jsx"));

export default function ContactsPage() {
  return (<>
    <HeroSectionContacts />
    <Suspense fallback={<div>Loading...</div>}>
      <LazyContactsForm />
      <LazyLocation />
      <LazyGalleryContactsPage />
    </Suspense>
  </>
  );
}

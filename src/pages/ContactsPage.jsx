import React from 'react';
import HeroSectionContacts from '../components/HeroSectionContacts';
import Location from '../components/Location';
import GallaryContactsPage from '../components/GallaryContactsPage.jsx';
import ContactsForm from '../components/ContactsForm.jsx';

export default function ContactsPage() {
  return (<>
    <HeroSectionContacts />
    <ContactsForm />
    <Location />
    <GallaryContactsPage />
  </>
  );
}

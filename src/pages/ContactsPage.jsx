import React from 'react';
import HeroSectionContacts from '../components/HeroSectionContacts';
import ContactForm from '../components/FormContactPage.jsx';
import Location from '../components/Location';
import GallaryContactsPage from '../components/GallaryContactsPage.jsx';

export default function ContactsPage() {
  return (<>
    <HeroSectionContacts />
    <ContactForm />
    <Location />
    <GallaryContactsPage />
  </>
  );
}

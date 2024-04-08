import React from 'react';
import { createRoot } from 'react-dom/client';
import {  createHashRouter} from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedProperties from './components/FeaturedProps.jsx';
import HeroSectionHome from './components/HeroSectionhome.jsx';
import Reviews from './components/Reviews.jsx';
import FAQ from './components/FAQ.jsx';
import Journey from './components/Journey.jsx';
import Values from './components/Values.jsx';
import Navigating from './components/Navigating.jsx';
import Team from './components/Team.jsx';
import ValuedClients from './components/ValuedClients.jsx';
import NotFound from './pages/NotFound.jsx';
import Location from './components/Location.jsx';
import ContactsForm from './components/ContactsForm.jsx';
import PropertyValue from './components/PropertyValue.jsx';
import PropertyManagement from './components/PropertyManagement.jsx';
import Investmens from './components/Investmens.jsx';
import { RouterProvider } from 'react-router-dom';


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: 'first-screen',
            element: <HeroSectionHome />,
          },
          {
            path: 'properties',
            element: <FeaturedProperties />,
          },
          {
            path: 'reviews',
            element: <Reviews />,
          },
          {
            path: 'questions',
            element: <FAQ />,
          },
        ],
      },
      {
        path: 'aboutus',
        element: <AboutUsPage />,
        children: [
          {
            path: 'journey',
            element: <Journey />,
          },
          {
            path: 'values',
            element: <Values />,
          },
          {
            path: 'navigating',
            element: <Navigating />,
          },
          {
            path: 'team',
            element: <Team />,
          },
          {
            path: 'valuedclients',
            element: <ValuedClients />,
          },
        ],
      },
      {
        path: 'services', 
        element: <ServicesPage />,
        children: [
          {
            path: 'propertyValue',
            element: <PropertyValue />,
          },
          {
            path: 'propertyManagement',
            element: <PropertyManagement />,
          },
          {
            path: 'investments',
            element: <Investmens />
          },
          {
            path: 'valuedclients',
            element: <ValuedClients />,
          },
        ],
      },
      {
        path: 'contacts', 
        element: <ContactsPage />,
        children: [
          {
            path: 'my-form',
            element: <ContactsForm />,
          },
          {
            path: 'location-form',
            element: <Location />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
);

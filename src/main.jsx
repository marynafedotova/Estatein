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
import NotFound from './pages/NotFound.jsx';
import { RouterProvider } from 'react-router-dom';


const router = createHashRouter([
  {
    path: '/',
    Component: Layout ,
    children: [
      {
        Component: HomePage,
        index: true
      },
      {
        path: 'aboutus',
        Component: AboutUsPage ,
      },
      {
        path: 'services', 
        Component: ServicesPage ,
      },
      {
        path: 'contacts', 
        Component: ContactsPage ,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>
);

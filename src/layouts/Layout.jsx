import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ScrollToAnchor from "../components/ScrollToAnchor";

export default function Layout() {
  return (
    <div className="page-content">
      <SiteHeader />
      <Outlet />
      <ScrollToAnchor />
      <SiteFooter />
      <ToastContainer />
    </div>
  );
}

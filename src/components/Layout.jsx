import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

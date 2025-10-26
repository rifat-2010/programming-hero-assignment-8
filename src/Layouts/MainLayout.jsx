import React from "react";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
      {/* alert's toaster tag there for access the toast feature all section */}
      <ToastContainer
        position="top-right"
        theme="light"
        autoClose={5000}
        hideProgressBar={false}
        
      />
    </div>
  );
};

export default MainLayout;

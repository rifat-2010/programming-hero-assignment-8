import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { useState } from "react";

const Navber = () => {
  const [border, setBorder] = useState("");
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           
           {/* Nav > Home - Section */}
          <NavLink
            to="/home"
           
            onClick={() => setBorder("home")}
            className={`font-bold flex items-center transition-all duration-200 border-b-2 ${
              border === "home"
                ? "border-b-[#9F62F2] text-[#632EE3]"
                : "border-transparent text-black/90"
            }`}
          >
            <FaHome className="text-lg mr-1" />
            Home
          </NavLink>
        
            {/* Nav > Apps - Section */}
          <NavLink
            to="/products"
   
            onClick={() => setBorder("products")}
            className={`font-bold flex items-center transition-all duration-200 border-b-2 ${
              border === "products"
                ? "border-b-[#9F62F2] text-[#632EE3]"
                : "border-transparent text-black/90"
            }`}
          >
             <MdOutlineProductionQuantityLimits className="text-lg mr-1" />
                Apps
          </NavLink>
              {/* Nav > Installation - Section */} 
             <NavLink
            to="/installation"
            onClick={() => setBorder("installation")}
            className={`font-bold flex items-center transition-all duration-200 border-b-2 ${
              border === "installation"
                ? "border-b-[#9F62F2] text-[#632EE3]"
                : "border-transparent text-black/90"
            }`}
          >
           
            <MdOutlineInstallDesktop className="text-lg mr-1" />
                Installation
          </NavLink>
          </ul>
        </div>
        <NavLink
            to="/home" 
            className="btn btn-ghost text-xl flex">
          <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
          <p
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-xl md:text-[25px]"
          >
            RIFAT.IO
          </p>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">
        
           {/* Nav > Home - Section */}
          <NavLink
            to="/home"
           
            onClick={() => setBorder("home")}
            className={`font-bold flex items-center transition-all duration-200 border-b-2 ${
              border === "home"
                ? "border-b-[#9F62F2] text-[#632EE3]"
                : "border-transparent text-black/90"
            }`}
          >
            <FaHome className="text-lg mr-1" />
            Home
          </NavLink>
        
            {/* Nav > Apps - Section */}
          <NavLink
            to="/products"
   
            onClick={() => setBorder("products")}
            className={`font-bold flex items-center transition-all duration-200 border-b-2 ${
              border === "products"
                ? "border-b-[#9F62F2] text-[#632EE3]"
                : "border-transparent text-black/90"
            }`}
          >
             <MdOutlineProductionQuantityLimits className="text-lg mr-1" />
                Apps
          </NavLink>
              {/* Nav > Installation - Section */} 
             <NavLink
            to="/installation"
            onClick={() => setBorder("installation")}
            className={`font-bold flex items-center transition-all duration-200 border-b-2 ${
              border === "installation"
                ? "border-b-[#9F62F2] text-[#632EE3]"
                : "border-transparent text-black/90"
            }`}
          >
           
            <MdOutlineInstallDesktop className="text-lg mr-1" />
                Installation
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/rifat-2010"
          className="w-[150px] h-12 flex justify-center items-center gap-2.5 py-3 px-4 rounded-[4px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-bold"
          target="_blank"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navber;
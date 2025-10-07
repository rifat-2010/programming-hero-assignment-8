import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Navber = () => {
    return (
    
    <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <NavLink to='/home' ><p class='text-black/90
 font-bold'>Home</p></NavLink>
      <NavLink to='/products'><p class='text-black/90
 font-bold'>Products</p></NavLink>
         <NavLink to='/Installation'><p class='text-black/90
 font-bold'>Installation</p></NavLink>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">
        <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-[25px]">RIFAT.IO</span>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 flex gap-5">
      <NavLink to='/home' ><p class='text-black/90
 font-bold'>Home</p></NavLink>
      <NavLink to='/products'><p class='text-black/90
 font-bold'>Products</p></NavLink>
         <NavLink to='/installation'><p class='text-black/90
 font-bold'>Installation</p></NavLink>
    </ul>
  </div>
  <div class="navbar-end">
     <button className='w-[150px] h-12 flex justify-center items-center gap-2.5 py-3 px-4 rounded-[4px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-bold' ><FaGithub />Contribute</button>
  </div>
</div>
    );
};

export default Navber;
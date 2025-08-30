import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/cuisinelogo.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  // Update active item based on current path
  useEffect(() => {
    const path = location.pathname;
    
    // Set active item based on current path
    if (path === "/") setActiveItem("home");
    else if (path === "/about") setActiveItem("about");
    else if (path === "/jobs") setActiveItem("jobs");
    else if (path === "/seekers") setActiveItem("seekers");
    else if (path === "/blogs") setActiveItem("blogs");
    else if (path.startsWith("/employers")) setActiveItem("employers");
    else if (path === "/contact") setActiveItem("contact");
    else if (path.startsWith("/location")) setActiveItem("location");
    else if (path === "/careers") setActiveItem("careers");
    else if (path === "/pricing") setActiveItem("pricing");
  }, [location]);

  // Check if a nav item is active
  const isActive = (itemName) => activeItem === itemName;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex">
        <img src={logo} alt="" className="w-12 h-12 rounded-full"/>
        <h3 className="text-[#211612] text-xl my-auto font-medium px-2">Cuisine Career's</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold text-gray-700 relative">
          <li className="relative">
            <Link 
              to="/" 
              className={`transition-colors duration-300 ${isActive("home") ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
            >
              HOME
            </Link>
            {isActive("home") && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 origin-left animate-scaleIn"></div>
            )}
          </li>
          
          <li className="relative">
            <Link 
              to="/about" 
              className={`transition-colors duration-300 ${isActive("about") ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
            >
              ABOUT
            </Link>
            {isActive("about") && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 origin-left animate-scaleIn"></div>
            )}
          </li>
          
          <li className="relative">
            <Link 
              to="/jobs" 
              className={`transition-colors duration-300 ${isActive("jobs") ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
            >
              VIEW JOBS
            </Link>
            {isActive("jobs") && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 origin-left animate-scaleIn"></div>
            )}
          </li>
          
          <li className="relative">
            <Link 
              to="/seekers" 
              className={`transition-colors duration-300 ${isActive("seekers") ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
            >
              JOB SEEKERS
            </Link>
            {isActive("seekers") && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 origin-left animate-scaleIn"></div>
            )}
          </li>
          
          <li className="relative">
            <Link 
              to="/blogs" 
              className={`transition-colors duration-300 ${isActive("blogs") ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
            >
              BLOGS
            </Link>
            {isActive("blogs") && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 origin-left animate-scaleIn"></div>
            )}
          </li>

          
          
          <li className="relative">
            <Link 
              to="/contact" 
              className={`transition-colors duration-300 ${isActive("contact") ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
            >
              CONTACT US
            </Link>
            {isActive("contact") && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 origin-left animate-scaleIn"></div>
            )}
          </li>

          {/* Location Dropdown */}
          

          <li className="relative">
            <Link 
              to="/careers" 
              className={`transition-colors duration-300 ${isActive("careers") ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}`}
            >
              CAREERS
            </Link>
            {isActive("careers") && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 origin-left animate-scaleIn"></div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-3">
          <Link 
            to="/" 
            className={`block py-2 transition-colors duration-300 ${isActive("home") ? "text-gray-900 font-bold border-l-4 border-gray-800 pl-2" : "text-gray-700"}`}
            onClick={() => setOpen(false)}
          >
            HOME
          </Link>
          
          <Link 
            to="/about" 
            className={`block py-2 transition-colors duration-300 ${isActive("about") ? "text-gray-900 font-bold border-l-4 border-gray-800 pl-2" : "text-gray-700"}`}
            onClick={() => setOpen(false)}
          >
            ABOUT
          </Link>
          
          <Link 
            to="/jobs" 
            className={`block py-2 transition-colors duration-300 ${isActive("jobs") ? "text-gray-900 font-bold border-l-4 border-gray-800 pl-2" : "text-gray-700"}`}
            onClick={() => setOpen(false)}
          >
            VIEW JOBS
          </Link>
          
          <Link 
            to="/seekers" 
            className={`block py-2 transition-colors duration-300 ${isActive("seekers") ? "text-gray-900 font-bold border-l-4 border-gray-800 pl-2" : "text-gray-700"}`}
            onClick={() => setOpen(false)}
          >
            JOB SEEKERS
          </Link>
          
          <Link 
            to="/blogs" 
            className={`block py-2 transition-colors duration-300 ${isActive("blogs") ? "text-gray-900 font-bold border-l-4 border-gray-800 pl-2" : "text-gray-700"}`}
            onClick={() => setOpen(false)}
          >
            BLOGS
          </Link>

          {/* Mobile Employers Dropdown */}
          

          
          
          <Link 
            to="/contact" 
            className={`block py-2 transition-colors duration-300 ${isActive("contact") ? "text-gray-900 font-bold border-l-4 border-gray-800 pl-2" : "text-gray-700"}`}
            onClick={() => setOpen(false)}
          >
            CONTACT US
          </Link>

       

          <Link 
            to="/careers" 
            className={`block py-2 transition-colors duration-300 ${isActive("careers") ? "text-gray-900 font-bold border-l-4 border-gray-800 pl-2" : "text-gray-700"}`}
            onClick={() => setOpen(false)}
          >
            CAREERS
          </Link>
        </div>
      )}

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes scaleIn {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out forwards;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;

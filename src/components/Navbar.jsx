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
        <img src={logo} alt="" className="w-12 h-12 rounded-full"/>

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

          {/* Employers Dropdown */}
          <li className="relative group cursor-pointer">
            <div className={`flex items-center gap-1 transition-colors duration-300 ${isActive("employers") ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}`}>
              EMPLOYERS <ChevronDown size={16} />
            </div>
            {isActive("employers") && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 origin-left animate-scaleIn"></div>
            )}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-44 z-10">
              <li><Link className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" to="/employers/welcome">WELCOME</Link></li>
              <li><Link className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" to="/employers/manage-jobs">WHY US</Link></li>
              <li><Link className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" to="/employers/resume-search">TESTIMONIALS</Link></li>
              <li><Link className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" to="/employers/company-profiles">POSTING</Link></li>
              <li><Link className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200" to="/employers/pricing">FAQS</Link></li>
             
            </ul>
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
          <div>
            <button
              onClick={() => setDropdown(dropdown === "employers" ? null : "employers")}
              className="w-full flex justify-between items-center py-2"
            >
              <span className={`${isActive("employers") ? "text-gray-900 font-bold" : "text-gray-700"}`}>EMPLOYERS</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${dropdown === "employers" ? "rotate-180" : ""}`} />
            </button>
            {dropdown === "employers" && (
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  to="/employers/post-job" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Post a Job
                </Link>
                <Link 
                  to="/employers/manage-jobs" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Manage Jobs
                </Link>
                <Link 
                  to="/employers/resume-search" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Resume Search
                </Link>
                <Link 
                  to="/employers/company-profiles" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Company Profiles
                </Link>
                <Link 
                  to="/employers/pricing" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Pricing Plans
                </Link>
                <Link 
                  to="/employers/support" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Employer Support
                </Link>
              </div>
            )}
          </div>

          
          
          <Link 
            to="/contact" 
            className={`block py-2 transition-colors duration-300 ${isActive("contact") ? "text-gray-900 font-bold border-l-4 border-gray-800 pl-2" : "text-gray-700"}`}
            onClick={() => setOpen(false)}
          >
            CONTACT US
          </Link>

          {/* Mobile Location Dropdown */}
          <div>
            <button
              onClick={() => setDropdown(dropdown === "location" ? null : "location")}
              className="w-full flex justify-between items-center py-2"
            >
              <span className={`${isActive("location") ? "text-gray-900 font-bold" : "text-gray-700"}`}>LOCATION</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${dropdown === "location" ? "rotate-180" : ""}`} />
            </button>
            {dropdown === "location" && (
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  to="/location/india" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  India
                </Link>
                <Link 
                  to="/location/usa" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  USA
                </Link>
                <Link 
                  to="/location/uk" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  UK
                </Link>
                <Link 
                  to="/location/canada" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Canada
                </Link>
                <Link 
                  to="/location/australia" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Australia
                </Link>
                <Link 
                  to="/location/europe" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Europe
                </Link>
                <Link 
                  to="/location/middle-east" 
                  className="block py-1 transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  Middle East
                </Link>
              </div>
            )}
          </div>

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
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cuisinelogo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#8d877b] text-[#211612] pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info - Adjusted to properly position the logo */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center md:items-start mb-6">
              <img 
                src={logo} 
                alt="Cuisine Careers Logo" 
                className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0"
              />
            </div>
            
            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Find Us Here
            </h4>

            <address className="not-italic leading-relaxed mb-4">
              <div>Calgary Indian Vegetarian Restaurant</div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Calgary%20Indian%20Vegetarian%20Restaurant%2C%201935%2032%20Ave%20NE%20%23107%2C%20Calgary%2C%20AB%20T2E%203RI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                title="Open in Google Maps"
              >
                1935 32 Ave NE #107, Calgary, AB T2E 3RI
              </a>
            </address>

            <p className="text-black mb-4">
              Connecting culinary professionals with the best opportunities in
              the food industry worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-black hover:underline font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black hover:underline font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-black hover:underline font-medium">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-black hover:underline font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:underline font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Job Seekers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Locations</h4>
            <ul className="space-y-2">
              {["India", "USA", "UK", "Canada", "Australia", "Europe", "Middle East"].map(
                (loc, i) => (
                  <li key={i}>
                    <Link to="/" className="text-black hover:underline font-medium">
                      {loc}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16739.277029323443!2d-114.03312419999999!3d51.072022499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCalgary%20Indian%20Vegetarian%20Restaurant%2C%201935%2032%20Ave%20NE%20%23107%2C%20Calgary%2C%20AB%20T2E%203RI!5e1!3m2!1sen!2sin!4v1755854266629!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Cuisine Careers. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-700 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-700 hover:underline">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-700 hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6">
          <p className="text-gray-700 text-sm flex items-center justify-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> by Cuisine Careers Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
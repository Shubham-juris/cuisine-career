import React from "react";
import browse from "../assets/browse.jpg";
import post from "../assets/opp.jpg";

const BrowsePostings = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
      {/* Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Card 1 */}
        <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img
            src={browse}
            alt="Browse Postings"
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold text-center">
              BROWSE THE POSTINGS
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img
            src={post}
            alt="Post Opportunity"
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold text-center">
              POST AN OPPORTUNITY
            </h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm">
        <p>Copyright © 2024 Cuisine Careers - All Rights Reserved.</p>
        <p className="mt-1">
          Contact us:{" "}
          <a
            href="mailto:cuisineCareers@Cuisine-careers.com"
            className="text-blue-600 underline"
          >
            cuisineCareers@Cuisine-careers.com
          </a>
        </p>

        {/* Footer Nav */}
        <div className="flex justify-center gap-6 mt-4 text-gray-700 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">HOME</a>
          <a href="#" className="hover:text-blue-600">ABOUT</a>
          <a href="#" className="hover:text-blue-600">VIEW JOBS</a>
          <a href="#" className="hover:text-blue-600">JOB SEEKERS</a>
          <a href="#" className="hover:text-blue-600">PRICE</a>
          <a href="#" className="hover:text-blue-600">CONTACT US</a>
        </div>
      </footer>
    </section>
  );
};

export default BrowsePostings;

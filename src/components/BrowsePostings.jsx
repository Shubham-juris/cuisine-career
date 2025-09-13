import React from "react";
import browse from "../assets/browse.jpg";
import post from "../assets/opp.jpg";

const BrowsePostings = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
      {/* Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"><i class="fa fa-deviantart" aria-hidden="true"></i>
        {/* Card 1 */}
        <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md">
          <img
            src={browse}
            alt="Browse Postings"
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold text-center">BROWSE THE POSTINGS</h3>
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
    </section>
  );
};

export default BrowsePostings;
    
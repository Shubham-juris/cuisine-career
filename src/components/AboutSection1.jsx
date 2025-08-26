import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 py-12">
        {/* Image */}
        <div className="flex-1">
          <img
            src="https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            With over <span className="font-bold">5,000 local food postings </span> 
            to date, Cuisine-careers has a proven track record of success in local food employment. 
            Whether you’re seeking opportunities in local food, food security, food nonprofits, 
            organic farming, urban agriculture, or sustainable agriculture – Cuisine-careers is your 
            gateway to meaningful work and impactful change in the food industry.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-900 uppercase">
          LET'S WORK TOGETHER TO NOURISH OUR COMMUNITIES <br />
          AND TRANSFORM THE FUTURE OF FOOD. <br />
          JOIN Cuisine-careers
        </h2>
      </div>
    </div>
  );
};

export default AboutSection;

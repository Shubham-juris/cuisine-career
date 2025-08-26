import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Find Your Perfect <span className="text-yellow-300">Cuisine Career</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Explore thousands of job opportunities in the culinary world.  
          From chefs to managers, your dream role is waiting.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="rounded-xl bg-[#8d877b] text-black px-6 py-3 text-sm font-semibold hover:bg-yellow-500">
            Get Started
          </button>
          <button className="rounded-xl border border-white px-6 py-3 text-sm font-semibold bg-[#8d877b] hover:bg-white hover:text-indigo-600">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

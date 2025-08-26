import React from "react";
import background from "../assets/bg.jpg"; // make sure bg.jpg exists in src/assets
import About from "./AboutPage";
import BrowsePostings from "../components/BrowsePostings";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[100vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`, // ✅ Correct usage
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
            WELCOME ABOARD FOOD ENTHUSIASTS! <br />
            LET&apos;S COOK UP SUCCESS TOGETHER
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Discover fulfilling opportunities in food, farms, nonprofits,
            education, and government careers.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#8d877b] text-white font-semibold text-lg rounded shadow-lg hover:bg-gray-800 transition">
            EXPLORE CAREERS
          </button>
        </div>
      </section>
      <About/>
      <BrowsePostings/>
    </div>
  );
};

export default Home;

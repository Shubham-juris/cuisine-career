import React from "react";
import background from "../assets/bg.jpg"; 
import aboutImg from "../assets/cuisinelogo.png";
import BrowsePostings from "../components/BrowsePostings";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[100vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${background})`,
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
      
      {/* Browse Postings Section */}
     
      
      {/* About Us Section */}
      <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
         WHO WE ARE ?
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About Fusion Foodies"
              className="w-full max-w-md  shadow-lg rounded-full"
            />
          </div>

          {/* Text */}
          <div className="text-gray-700 text-base md:text-lg leading-relaxed">
            <p className="mb-4">
              Welcome to <span className="font-semibold">Fusion Foodies</span>,
              your premier destination for culinary careers! At Fusion Foodies, we
              understand the passion and dedication that goes into creating
              extraordinary culinary experiences. That's why we're here to connect
              talented chefs and kitchen workers with their dream jobs in the
              dynamic world of food.
            </p>
            <p>
              With a deep appreciation for the art of cooking and a commitment to
              supporting the culinary community, Fusion Foodies is more than just
              a job-seeking website. We're a platform built by food enthusiasts,
              for food enthusiasts. Our mission is simple: to empower chefs and
              kitchen professionals to find meaningful employment opportunities
              that align with their skills, aspirations, and values.
            </p>
          </div>
        </div>

        {/* Why Post With Us */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold  mb-6">
            Why post with us?
          </h3>

          <ul className="text-gray-700 text-base md:text-lg space-y-3 max-w-3xl mx-auto text-left list-decimal pl-6">
            <li>
              <strong>Food-Centric:</strong> We specialize in sourcing top talent
              for local food businesses, nonprofits, and organic farms.
            </li>
            <li>
              <strong>Integrity:</strong> With years of dedication to the local
              food community, we're committed to your mission.
            </li>
            <li>
              <strong>Results:</strong> Our proven track record ensures superior
              hiring outcomes — guaranteed.
            </li>
            <li>
              <strong>Community Driven:</strong> Built by food lovers, for food
              lovers.
            </li>
            <li>
              <strong>Personalized Support:</strong> We guide you throughout the
              hiring process.
            </li>
          </ul>
        </div>
      </section>
     <BrowsePostings/>

    </div>
  );
};

export default Home;
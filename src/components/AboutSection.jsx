import React from "react";
import aboutImg from "../assets/about.jpg"; // replace with your image path

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        ABOUT US
      </h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Fusion Foodies"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="text-gray-700 text-base md:text-lg leading-relaxed">
          <p className="mb-4">
            Welcome to <span className="font-semibold">Fusion Foodies</span>,
            your premier destination for culinary careers! At Fusion Foodies, we
            understand the passion and dedication that goes into creating
            extraordinary culinary experiences. That’s why we’re here to connect
            talented chefs and kitchen workers with their dream jobs in the
            dynamic world of food.
          </p>
          <p>
            With a deep appreciation for the art of cooking and a commitment to
            supporting the culinary community, Fusion Foodies is more than just
            a job-seeking website. We’re a platform built by food enthusiasts,
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
            food community, we’re committed to your mission.
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
  );
};

export default AboutUs;

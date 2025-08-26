import React from "react";
import AboutSection from "../components/AboutSection1";
import hand from "../assets/hand.jpg";
import { useParams, Link, useNavigate } from "react-router-dom";


const AboutPage = () => {
  return (
    <div className="w-full flex flex-col">

      {/* ===== Hero Section ===== */}
     {/* ===== Hero Section ===== */}
<section
  className="relative h-[80vh] bg-cover bg-center bg-fixed flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-10 text-center text-white px-6">
    <h1 className="text-4xl md:text-6xl font-bold">
      About Cuisine Careers
    </h1>
    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
      Building careers in food, farming, nonprofits, education, and government
      sectors.
    </p>
  </div>
</section>

      {/* ===== Our Mission ===== */}
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="bg-gray-100 py-2 px-6 text-center">  
       <h2 className="text-2xl mb-6 text-center md:text-3xl lg:text-4xl font-bold tracking-wide text-gray-900 uppercase">
          OUR MISSION
        </h2>
        </div>
  <div className="flex flex-col md:flex-row items-center gap-10">
    
    {/* Right: Text */}
     <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
     
      <p className="mt-4 text-lg text-gray-600 leading-relaxed font-bold">
        Our mission is to connect passionate food enthusiasts with fulfilling career opportunities. 
        We aim to create a platform where employers and job seekers come together to build a stronger, 
        healthier, and more sustainable food community.
      </p>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        We believe that food is more than just nourishment — it is culture, tradition, and the foundation 
        of thriving communities. By bridging the gap between skilled professionals and organizations in 
        the food industry, we are fostering growth, innovation, and collaboration.
      </p>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Through our platform, we provide resources and opportunities for individuals who are dedicated to 
        food security, sustainable agriculture, culinary excellence, and food-based entrepreneurship. 
        Whether you are a student stepping into the industry, a seasoned professional seeking new challenges, 
        or an employer searching for the right talent, our mission is to support your journey.
      </p>
    
    </div>
     {/* Left: Image */}
    <div className="md:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
        alt="Mission"
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

      {/* ===== Our Team ===== */}
     
              <AboutSection/>
     

      {/* ===== Our Values ===== */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Our Values</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Integrity",
              desc: "We believe in honesty, transparency, and trust in all our interactions.",
              img: hand
            },
            {
              title: "Community",
              desc: "We foster a strong community by connecting people with shared passions.",
              img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
            },
            {
              title: "Innovation",
              desc: "We encourage new ideas and creativity to build a better tomorrow.",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            }
          ].map((value, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={value.img} alt={value.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-600 mt-2">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
  
      </section>

      {/* ===== Contact Section ===== */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you’re a job seeker, employer, or just curious about 
          our mission, feel free to reach out to us.
        </p>
        <div className="mt-6">
          <button 
           onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-[#8d877b] text-white rounded-lg shadow hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

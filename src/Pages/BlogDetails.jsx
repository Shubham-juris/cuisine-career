// BlogDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const blogDetails = {
  1: { 
    title: "Top 10 Kitchen Hacks Every Chef Should Know", 
    content: "Cooking can be made easier with these time-saving hacks. From organizing ingredients to using tools smartly, these hacks will save you hours in the kitchen and make your cooking experience smoother. Whether you're a professional chef or a home cook, you'll love these tips.", 
    img: "https://source.unsplash.com/1600x900/?kitchen,cooking"
  },
  2: { 
    title: "How to Manage a Busy Hotel Front Desk", 
    content: "Managing guests efficiently requires patience and tools. A busy front desk is the heart of a hotel, and handling it well creates unforgettable guest experiences. Learn how to manage bookings, handle complaints, and delight guests every time.", 
    img: "https://source.unsplash.com/1600x900/?hotel,lobby"
  },
  3: { 
    title: "Secrets to Perfect Baking Every Time", 
    content: "Baking is both science and art. From measuring ingredients correctly to understanding oven behavior, small details matter. Discover how professional bakers achieve perfect texture, flavor, and consistency in their baked goods.", 
    img: "https://source.unsplash.com/1600x900/?baking,bread"
  },
  4: { 
    title: "Housekeeping Best Practices in Luxury Hotels", 
    content: "Luxury hotels require spotless service. From maintaining hygiene to delivering a flawless guest experience, housekeeping plays a crucial role. These best practices ensure rooms are always fresh, elegant, and inviting.", 
    img: "https://source.unsplash.com/1600x900/?housekeeping,hotel"
  },
  5: { 
    title: "Indian Cuisine – A Journey Through Flavors", 
    content: "India’s culinary diversity is unmatched. Each region has unique flavors, spices, and traditions. Explore the journey of Indian cuisine that blends culture, tradition, and taste into every dish.", 
    img: "https://source.unsplash.com/1600x900/?indian,food"
  },
  6: { 
    title: "Improving Guest Experience in Restaurants", 
    content: "Small gestures create big impacts. From greeting guests warmly to ensuring prompt service, restaurants can greatly enhance customer loyalty. Discover ways to create unforgettable dining experiences.", 
    img: "https://source.unsplash.com/1600x900/?restaurant,dining"
  },
  7: { 
    title: "Why Mixology is an Art & Science", 
    content: "Mixology requires creativity, balance, and knowledge. From understanding flavor profiles to presentation, bartenders create an experience. Learn why mixology is both an art and a science.", 
    img: "https://source.unsplash.com/1600x900/?cocktail,bar"
  },
  8: { 
    title: "Top 5 Hotel Management Trends in 2025", 
    content: "Technology, AI, and personalization are shaping the future of hospitality. Discover the latest trends that hotels are adopting to stay competitive and delight modern travelers.", 
    img: "https://source.unsplash.com/1600x900/?hotel,management"
  },
  9: { 
    title: "Maintaining Hygiene Standards in Kitchens", 
    content: "Food safety starts with hygiene. From sanitization to proper waste management, kitchen hygiene ensures guest health and safety. Learn the must-follow practices for every kitchen.", 
    img: "https://source.unsplash.com/1600x900/?kitchen,hygiene"
  },
  10: { 
    title: "Bartending Skills That Impress Every Guest", 
    content: "Every great bartender knows secret tricks to create unforgettable drinks. From flair bartending to customer interaction, learn the skills that make bartenders shine.", 
    img: "https://source.unsplash.com/1600x900/?bartender,drinks"
  },
};

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogDetails[id];

  if (!blog) {
    return <h2 className="text-center text-red-500 mt-12">Blog not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-72 md:h-96 w-full bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url(${blog.img})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center px-4">
          {blog.title}
        </h1>
      </div>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link to="/blogs" className="flex items-center text-red-500 hover:text-red-600 mb-6">
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </Link>
        <div className="bg-white shadow-lg rounded-xl p-8">
          <img 
            src={blog.img} 
            alt={blog.title} 
            className="rounded-lg mb-6 w-full object-cover"
          />
          <p className="text-gray-700 leading-relaxed text-lg">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

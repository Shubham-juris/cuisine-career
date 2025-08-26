import React, { useState } from "react";
import { Link } from "react-router-dom";
import bank from "../assets/banking.jpg";
import { FaUtensils, FaHotel, FaConciergeBell, FaMountain, FaTree, FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

const blogs = [
  { 
    id: 1, 
    title: "Top 10 Kitchen Hacks Every Chef Should Know", 
    author: "Rahul Sharma", 
    date: "21 Aug 2025", 
    category: "Cooking", 
    icon: <FaUtensils />,
    excerpt: "Discover professional kitchen secrets that will transform your cooking efficiency and quality.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  { 
    id: 2, 
    title: "How to Manage a Busy Hotel Front Desk", 
    author: "Priya Singh", 
    date: "18 Aug 2025", 
    category: "Hospitality", 
    icon: <FaHotel />,
    excerpt: "Essential tips for handling peak check-in times while maintaining excellent guest service.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  { 
    id: 3, 
    title: "Secrets to Perfect Baking Every Time", 
    author: "Anjali Verma", 
    date: "15 Aug 2025", 
    category: "Cooking", 
    icon: <FaUtensils />,
    excerpt: "Learn the precise techniques that professional bakers use to create perfect pastries consistently.",
    readTime: "6 min read",
    image: bank
  },
  { 
    id: 4, 
    title: "Housekeeping Best Practices in Luxury Hotels", 
    author: "Karan Gupta", 
    date: "12 Aug 2025", 
    category: "Hotel", 
    icon: <FaConciergeBell />,
    excerpt: "The meticulous standards and procedures that define five-star housekeeping services.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  { 
    id: 5, 
    title: "Indian Cuisine – A Journey Through Flavors", 
    author: "Rohit Yadav", 
    date: "10 Aug 2025", 
    category: "Cooking", 
    icon: <FaUtensils />,
    excerpt: "Explore the diverse regional cuisines of India and the unique spice blends that define them.",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80"
  },
  { 
    id: 6, 
    title: "Improving Guest Experience in Restaurants", 
    author: "Sneha Kapoor", 
    date: "7 Aug 2025", 
    category: "Hospitality", 
    icon: <FaHotel />,
    excerpt: "Strategies to create memorable dining experiences that keep guests coming back.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  { 
    id: 7, 
    title: "Why Mixology is an Art & Science", 
    author: "Meena Nair", 
    date: "5 Aug 2025", 
    category: "Cooking", 
    icon: <FaUtensils />,
    excerpt: "The careful balance of flavors, techniques, and presentation that defines craft cocktail creation.",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80"
  },
  { 
    id: 8, 
    title: "Top 5 Hotel Management Trends in 2025", 
    author: "Nisha Patel", 
    date: "2 Aug 2025", 
    category: "Hotel", 
    icon: <FaHotel />,
    excerpt: "The emerging technologies and guest preferences shaping the future of hotel management.",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
  },
  { 
    id: 9, 
    title: "Maintaining Hygiene Standards in Kitchens", 
    author: "Deepak Kumar", 
    date: "30 Jul 2025", 
    category: "Cooking", 
    icon: <FaUtensils />,
    excerpt: "Critical protocols for ensuring food safety and cleanliness in professional kitchen environments.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  { 
    id: 10, 
    title: "Bartending Skills That Impress Every Guest", 
    author: "Komal Joshi", 
    date: "25 Jul 2025", 
    category: "Hospitality", 
    icon: <FaConciergeBell />,
    excerpt: "Master the art of flair, conversation, and precision that defines world-class bartending.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
];

const BlogCard = ({ id, title, author, date, category, icon, excerpt, readTime, image }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
    <div className="relative overflow-hidden h-48">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
        <span className="mr-2">{icon}</span>
        {category}
      </div>
    </div>
    
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-500 transition-colors">{title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
      
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <div className="flex items-center mr-4">
          <FaUser className="mr-1 text-red-400" />
          <span>{author}</span>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="mr-1 text-red-400" />
          <span>{date}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{readTime}</span>
        <Link
          to={`/blog/${id}`}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center"
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Cooking", "Hospitality", "Hotel"];
  
  const filteredBlogs = activeCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Industry Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Latest updates, stories, and tips from the world of hospitality and cooking.
            </p>
          </div>
          
          {/* Category filters */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-3 text-sm font-medium rounded-md mx-1 ${
                    activeCategory === category
                      ? "bg-[#8d877b] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
     
    </div>
  );
};

export default Blog;
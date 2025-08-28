import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  FaUtensils, 
  FaHotel, 
  FaConciergeBell, 
  FaCalendarAlt, 
  FaUser, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

// Sample blog data (in a real app, this would come from an API)
const blogData = {
  1: {
    id: 1,
    title: "Top 10 Kitchen Hacks Every Chef Should Know",
    author: "Rahul Sharma",
    date: "21 Aug 2025",
    category: "Cooking",
    icon: <FaUtensils />,
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: [
      {
        type: "paragraph",
        text: "Welcome to our comprehensive guide on kitchen hacks that will transform your culinary experience. Whether you're a professional chef or a home cook, these tips will save you time, reduce waste, and elevate your cooking game."
      },
      {
        type: "heading",
        text: "1. The Perfect Vegetable Chopping Technique"
      },
      {
        type: "paragraph",
        text: "Chopping vegetables can be time-consuming, but with the right technique, you can significantly speed up the process. First, ensure your knife is sharp—a dull knife is more dangerous than a sharp one as it requires more force and can slip easily."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Vegetable chopping techniques",
        caption: "Proper knife skills can save you significant time in the kitchen"
      },
      {
        type: "paragraph",
        text: "For onions, cut off the ends, slice in half from root to tip, peel, then make horizontal cuts followed by vertical cuts before dicing. This method creates uniformly sized pieces that cook evenly."
      },
      {
        type: "heading",
        text: "2. Herb Preservation Methods"
      },
      {
        type: "paragraph",
        text: "Fresh herbs can wilt quickly, but with proper storage, you can extend their life significantly. For soft herbs like cilantro, parsley, and basil, treat them like flowers: trim the stems and place them in a jar with water, then cover loosely with a plastic bag before refrigerating."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Herb preservation",
        caption: "Proper herb storage can extend their freshness by up to two weeks"
      }
    ]
  },
  2: {
    id: 2,
    title: "How to Manage a Busy Hotel Front Desk",
    author: "Priya Singh",
    date: "18 Aug 2025",
    category: "Hospitality",
    icon: <FaHotel />,
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: [
      {
        type: "paragraph",
        text: "Managing a busy hotel front desk requires a combination of organizational skills, customer service excellence, and the ability to remain calm under pressure. In this comprehensive guide, we'll explore strategies that top hotels use to ensure smooth operations even during peak times."
      },
      {
        type: "heading",
        text: "1. Streamlining Check-In Procedures"
      },
      {
        type: "paragraph",
        text: "The check-in process sets the tone for a guest's entire stay. Implementing efficient procedures can significantly reduce wait times and improve the guest experience. Consider offering pre-check-in options through mobile apps or online portals where guests can provide their information and preferences before arrival."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        alt: "Hotel front desk",
        caption: "A well-organized front desk is essential for efficient guest service"
      }
    ]
  },
  3: {
    id: 3,
    title: "Secrets to Perfect Baking Every Time",
    author: "Anjali Verma",
    date: "15 Aug 2025",
    category: "Cooking",
    icon: <FaUtensils />,
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1605522561234-6e5c8c895d06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: [
      {
        type: "paragraph",
        text: "Baking is both a science and an art. While creativity plays a role, precision is key to consistent results. In this guide, we'll uncover the secrets that professional bakers use to achieve perfect results every time."
      },
      {
        type: "heading",
        text: "1. The Importance of Ingredient Temperature"
      },
      {
        type: "paragraph",
        text: "Many baking recipes specify that ingredients like eggs, butter, and milk should be at room temperature. This isn't arbitrary—it's crucial for proper emulsification and incorporation of air. Cold ingredients don't blend as well, leading to dense, uneven baked goods."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        alt: "Baking ingredients",
        caption: "Properly measured and temperature-controlled ingredients are key to baking success"
      }
    ]
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData[id];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Content items per page
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    // Simulate fetching related blogs
    const related = Object.values(blogData)
      .filter(b => b.id !== blog.id && b.category === blog.category)
      .slice(0, 3);
    setRelatedBlogs(related);
  }, [id, blog]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="bg-[#8d877b] text-white px-6 py-3 rounded-lg font-medium">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Calculate total pages
  const totalPages = Math.ceil(blog.content.length / itemsPerPage);
  
  // Get current page content
  const currentContent = blog.content.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-[#8d877b] hover:text-[#211612] transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blogs
          </Link>
        </div>
      </header>

      {/* Blog Hero */}
      <div className="relative h-96 bg-gray-800">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <div className="inline-flex items-center bg-[#8d877b] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              <span className="mr-2">{blog.icon}</span>
              {blog.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm md:text-base">
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            {currentContent.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {item.text}
                  </p>
                );
              } else if (item.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                    {item.text}
                  </h2>
                );
              } else if (item.type === "image") {
                return (
                  <figure key={index} className="my-8">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-64 md:h-96 object-cover rounded-lg"
                    />
                    <figcaption className="text-center text-gray-600 italic mt-2">
                      {item.caption}
                    </figcaption>
                  </figure>
                );
              }
              return null;
            })}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-[#8d877b] hover:bg-gray-100"
                  }`}
                >
                  <FaArrowLeft className="mr-2" />
                  Previous
                </button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentPage === page
                          ? "bg-[#8d877b] text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-[#8d877b] hover:bg-gray-100"
                  }`}
                >
                  Next
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            )}

            {/* Social Sharing */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <FaFacebook size={20} />
                </button>
                <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                  <FaTwitter size={20} />
                </button>
                <button className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors">
                  <FaLinkedin size={20} />
                </button>
                <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                  <FaPinterest size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                {blog.author.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{blog.author}</h3>
                <p className="text-gray-600">Professional Chef & Food Blogger</p>
              </div>
            </div>
            <p className="text-gray-700">
              {blog.author} is a seasoned professional with over 10 years of experience in the culinary industry. 
              Their expertise spans various cuisines and cooking techniques, and they're passionate about sharing 
              knowledge with aspiring chefs and food enthusiasts.
            </p>
          </div>

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedBlogs.map(relatedBlog => (
                  <div key={relatedBlog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span className="mr-2">{relatedBlog.icon}</span>
                        {relatedBlog.category}
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{relatedBlog.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{relatedBlog.readTime}</p>
                      <Link
                        to={`/blog/${relatedBlog.id}`}
                        className="text-[#8d877b] hover:text-[#211612] font-medium text-sm flex items-center"
                      >
                        Read More
                        <FaArrowRight className="ml-1" size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter Subscription */}
          <div className="bg-[#8d877b] rounded-lg shadow-md p-6 md:p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Blogs</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss out on the latest industry insights, 
              cooking tips, and hospitality trends.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-[#211612] text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
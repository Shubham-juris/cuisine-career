// components/Employers/Posting.jsx
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Animation component
const AnimatedContainer = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animated form field component
const AnimatedFormField = ({ children, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  );
};

const Posting = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    jobType: "Full-time",
    experience: "Mid-level",
    salary: "",
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Handle form submission
    alert("Job posted successfully!");
    setIsSubmitting(false);
  };

  // Add scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Animated Header */}
      <AnimatedContainer className="text-center mb-12" delay={100}>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
          Post a Job
        </h1>
        <p className="text-xl text-gray-600 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          Reach thousands of qualified culinary professionals looking for their next opportunity
        </p>
      </AnimatedContainer>

      {/* Animated Form */}
      <AnimatedContainer delay={200}>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <AnimatedFormField index={0}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8d877b] focus:border-transparent transition-all duration-300 hover:border-[#8d877b]"
                  required
                  placeholder="e.g. Sous Chef, Line Cook, Pastry Chef"
                />
              </div>
            </AnimatedFormField>

            <AnimatedFormField index={1}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8d877b] focus:border-transparent transition-all duration-300 hover:border-[#8d877b]"
                  required
                />
              </div>
            </AnimatedFormField>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <AnimatedFormField index={2}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8d877b] focus:border-transparent transition-all duration-300 hover:border-[#8d877b]"
                  required
                  placeholder="City, State"
                />
              </div>
            </AnimatedFormField>

            <AnimatedFormField index={3}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Type *</label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8d877b] focus:border-transparent transition-all duration-300 hover:border-[#8d877b] cursor-pointer"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </AnimatedFormField>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <AnimatedFormField index={4}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8d877b] focus:border-transparent transition-all duration-300 hover:border-[#8d877b] cursor-pointer"
                >
                  <option value="Entry-level">Entry-level</option>
                  <option value="Mid-level">Mid-level</option>
                  <option value="Senior">Senior</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
            </AnimatedFormField>

            <AnimatedFormField index={5}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8d877b] focus:border-transparent transition-all duration-300 hover:border-[#8d877b]"
                  placeholder="e.g. $45,000 - $60,000 annually"
                />
              </div>
            </AnimatedFormField>
          </div>

          <AnimatedFormField index={6}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#8d877b] focus:border-transparent transition-all duration-300 hover:border-[#8d877b] resize-vertical"
                required
                placeholder="Describe the role, responsibilities, and requirements..."
              ></textarea>
            </div>
          </AnimatedFormField>

          <AnimatedFormField index={7}>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-800">
                Your job posting will be active for 30 days
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#8d877b] text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#6d675b]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Posting...
                  </span>
                ) : (
                  'Post Job'
                )}
              </button>
            </div>
          </AnimatedFormField>
        </form>
      </AnimatedContainer>

      {/* Animated Tips Section */}
      <AnimatedContainer className="bg-gray-50 p-6 rounded-lg mt-8 transition-all duration-500 hover:shadow-md" delay={800}>
        <h2 className="text-xl font-semibold mb-4 transition-colors duration-300 hover:text-[#8d877b]">
          Tips for a Successful Job Post
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {[
            "Be specific about required skills and experience",
            "Include information about your restaurant's cuisine and atmosphere",
            "Highlight unique benefits or perks",
            "Mention schedule expectations clearly",
            "Include salary range to attract more qualified candidates"
          ].map((tip, index) => (
            <li 
              key={index} 
              className="transition-all duration-300 hover:text-gray-800 hover:pl-2 hover:font-medium"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {tip}
            </li>
          ))}
        </ul>
      </AnimatedContainer>

      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          textarea {
            resize: vertical;
            min-height: 120px;
          }
        `}
      </style>
    </div>
  );
};

export default Posting;
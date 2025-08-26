// components/Employers/WhyUs.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Search, FileText, CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Animation component for staggered children
const AnimatedContainer = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
};

// Animated feature item with staggered delay
const AnimatedFeatureItem = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-md flex transition-all duration-1000 transform ${
        inView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: <Users size={32} className="text-3xl text-[#8d877b]" />,
      title: "Industry-Specific Platform",
      description: "We focus exclusively on the food and hospitality industry, so you get candidates who are passionate about culinary arts."
    },
    {
      icon: <Search size={32} className="text-3xl text-[#8d877b]" />,
      title: "Advanced Filtering",
      description: "Find candidates with specific skills like pastry arts, grill mastery, or international cuisine expertise."
    },
    {
      icon: <FileText size={32} className="text-3xl text-[#8d877b]" />,
      title: "Streamlined Process",
      description: "Our platform makes it easy to manage job postings, applications, and interviews in one place."
    },
    {
      icon: <CheckCircle size={32} className="text-3xl text-[#8d877b]" />,
      title: "Verified Professionals",
      description: "We verify credentials and work history so you can hire with confidence."
    }
  ];

  // Add scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Animated Header */}
      <AnimatedContainer className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
          Why Choose Cuisine Careers?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '200ms' }}>
          Specialized recruitment solutions for the food and hospitality industry
        </p>
      </AnimatedContainer>

      {/* Animated Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <AnimatedFeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>

      {/* Animated Success Metrics */}
      <AnimatedContainer className="bg-gray-100 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-[#211612] text-center mb-8 animate-pulse">
          OUR SUCCESS METRICS
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { value: "92%", label: "Fill Rate Success", bg: "bg-[#211612]", text: "text-[#8d877b]" },
            { value: "48h", label: "Average Time to Hire", bg: "bg-transparent", text: "text-[#8d877b]", border: true },
            { value: "5,000+", label: "Active Culinary Professionals", bg: "bg-transparent", text: "text-[#8d877b]" },
            { value: "98%", label: "Client Satisfaction Rate", bg: "bg-transparent", text: "text-[#8d877b]", hoverInvert: true }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`text-4xl font-bold ${item.bg} rounded-full ${item.text} mb-6 p-4 transition-all duration-500 group-hover:shadow-xl ${
                item.border ? 'border-2 border-transparent group-hover:border-[#211612] group-hover:bg-[#f8f7f5]' : ''
              } ${item.hoverInvert ? 'group-hover:bg-[#8d877b] group-hover:text-[#211612]' : 'group-hover:bg-[#211612] group-hover:text-[#e8e5db]'}`}>
                {item.value}
              </div>
              <p className="text-gray-600 transition-all duration-500 group-hover:text-[#211612] group-hover:font-semibold transform group-hover:scale-105">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedContainer>

      {/* Animated CTA Buttons */}
      <AnimatedContainer className="text-center">
        <Link
          to="/employers/pricing"
          className="inline-block bg-[#8d877b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6d675b] transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg mr-4"
        >
          View Pricing
        </Link>
        <Link
          to="/contact"
          className="inline-block border border-[#8d877b] text-[#211612] px-8 py-3 rounded-lg font-semibold hover:bg-[#8d877b] hover:text-white transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Contact Us
        </Link>
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
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          .animate-pulse {
            animation: pulse 2s infinite;
          }
          .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}
      </style>
    </div>
  );
};

export default WhyUs;
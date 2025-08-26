// components/Employers/Testimonials.jsx
import React from "react";
import { Link } from "react-router-dom"; // Add this import
import { Star } from "lucide-react";
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

// Animated testimonial card
const AnimatedTestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-md transition-all duration-1000 transform hover:shadow-xl hover:-translate-y-1 ${
        inView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-semibold mr-4 transition-all duration-500 hover:scale-110">
          {testimonial.avatar}
        </div>
        <div>
          <h3 className="font-semibold transition-colors duration-300 hover:text-[#8d877b]">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial.content}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-current transition-transform duration-300 hover:scale-125" />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      position: "Executive Chef, Bella Vista",
      content: "Cuisine Careers helped me find three exceptional line cooks in under a week when we were opening our new restaurant. The quality of candidates was far superior to other platforms.",
      avatar: "MR"
    },
    {
      name: "Sarah Johnson",
      position: "HR Director, Grand Hotel",
      content: "We've hired over 20 culinary staff through Cuisine Careers. The specialized filters make it easy to find candidates with exactly the skills we need.",
      avatar: "SJ"
    },
    {
      name: "David Kim",
      position: "Owner, Fusion Bistro",
      content: "As a small restaurant owner, I appreciate the affordable pricing. I found a talented sous chef who has been with us for over two years now.",
      avatar: "DK"
    },
    {
      name: "Lisa Chen",
      position: "Corporate Chef, Fresh Fork Group",
      content: "The verification process gives me confidence in the candidates' credentials. We've significantly reduced our hiring mistakes since switching to Cuisine Careers.",
      avatar: "LC"
    }
  ];

  // Add scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Animated Header */}
      <AnimatedContainer className="text-center mb-12" delay={100}>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
          What Employers Say
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '300ms' }}>
          Hear from restaurants, hotels, and food service businesses that have found success with our platform
        </p>
      </AnimatedContainer>

      {/* Animated Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <AnimatedTestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>

      {/* Animated Success Metrics */}
      <AnimatedContainer className="bg-blue-50 rounded-xl p-8 mb-16" delay={400}>
        <h2 className="text-2xl font-bold text-center mb-6 animate-pulse">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { value: "85%", label: "of employers report higher retention rates with hires from our platform" },
            { value: "3.5x", label: "more qualified applicants compared to general job boards" },
            { value: "24/7", label: "dedicated support for employers throughout the hiring process" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl font-bold text-[#8d877b] mb-6 p-4 transition-all duration-500 group-hover:bg-[#211612] group-hover:text-[#e8e5db] group-hover:shadow-lg group-hover:-translate-y-1">
                {item.value}
              </div>
              <p className="text-gray-700 transition-all duration-500 group-hover:text-[#211612] group-hover:font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedContainer>

      {/* Animated CTA Button */}
      <AnimatedContainer className="text-center" delay={600}>
        <Link
          to="/employers/welcome"
          className="inline-block bg-[#8d877b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6d675b] transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg animate-bounce-slow"
        >
          Join These Success Stories
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
          @keyframes bounce-slow {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s infinite;
          }
          .transition-all {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
          .bg-blue-50 {
            background-color: rgba(239, 246, 255, 0.8);
            backdrop-filter: blur(10px);
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
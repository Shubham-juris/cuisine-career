// components/Employers/EmployersWelcome.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, CheckCircle, DollarSign } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Animation component for staggered children
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

// Animated feature card component
const AnimatedFeatureCard = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-md transition-all duration-1000 transform hover:shadow-xl hover:-translate-y-2 ${
        inView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-[#8d877b]">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Animated step component
const AnimatedStep = ({ step, title, desc, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-1000 transform hover:-translate-y-2 ${
        inView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 250}ms` }}
    >
      <div className="w-14 h-14 text-3xl bg-[#8d877b] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 transition-all duration-500 hover:scale-110 hover:bg-[#211612]">
        {step}
      </div>
      <h3 className="font-semibold mb-2 transition-colors duration-300 hover:text-[#8d877b]">
        {title}
      </h3>
      <p className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-800">
        {desc}
      </p>
    </div>
  );
};

const EmployersWelcome = () => {
  // Add scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const features = [
    {
      icon: <Users className="text-3xl text-[#8d877b]" size={24} />,
      title: "Access Qualified Chefs",
      description: "Connect with skilled culinary professionals specifically looking for opportunities in the food industry."
    },
    {
      icon: <CheckCircle className="text-3xl text-[#8d877b]" size={24} />,
      title: "Streamlined Hiring",
      description: "Our platform makes it easy to post jobs, review applications, and schedule interviews."
    },
    {
      icon: <DollarSign className="text-3xl text-[#8d877b]" size={24} />,
      title: "Cost Effective",
      description: "Affordable pricing plans designed for restaurants and food businesses of all sizes."
    }
  ];

  const steps = [
    { step: "1", title: "Create Account", desc: "Register your business and verify your details" },
    { step: "2", title: "Post Job", desc: "Create a compelling job listing for your open position" },
    { step: "3", title: "Review Candidates", desc: "Screen applicants and view their profiles" },
    { step: "4", title: "Hire Talent", desc: "Connect with and hire the best culinary professionals" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Animated Header */}
      <AnimatedContainer className="text-center mb-12" delay={100}>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
          Welcome Employers
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '300ms' }}>
          Find the perfect culinary talent for your restaurant, hotel, or food service business
        </p>
      </AnimatedContainer>

      {/* Animated Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <AnimatedFeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>

      {/* Animated How It Works Section */}
      <AnimatedContainer className="bg-blue-50 rounded-xl p-8 mb-16" delay={400}>
        <h2 className="text-2xl font-bold text-center mb-6 animate-pulse">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <AnimatedStep
              key={step.step}
              step={step.step}
              title={step.title}
              desc={step.desc}
              index={index}
            />
          ))}
        </div>
      </AnimatedContainer>

      {/* Animated CTA Button */}
      <AnimatedContainer className="text-center" delay={600}>
        <Link
          to="/employers/pricing"
          className="inline-block bg-[#8d877b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6d675b] transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg animate-bounce-slow"
        >
          Get Started Today
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

export default EmployersWelcome;
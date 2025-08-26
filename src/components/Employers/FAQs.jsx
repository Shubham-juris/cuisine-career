// components/Employers/FAQs.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does it cost to post a job?",
      answer: "We offer several pricing plans to meet different needs. Our basic plan starts at $99 per job posting for 30 days. We also have subscription plans for businesses with frequent hiring needs."
    },
    {
      question: "How long does a job posting remain active?",
      answer: "All job postings remain active for 30 days. You can renew your posting at a discounted rate if needed."
    },
    {
      question: "Can I edit my job posting after it's live?",
      answer: "Yes, you can edit your job posting at any time through your employer dashboard. Changes are typically reflected within minutes."
    },
    {
      question: "How do I review applications?",
      answer: "You'll receive applications through your employer dashboard where you can review candidate profiles, resumes, and contact information. You can also message candidates directly through our platform."
    },
    {
      question: "What types of culinary jobs can I post?",
      answer: "You can post any position related to the food and hospitality industry, including chefs, cooks, bakers, pastry artists, kitchen managers, food stylists, and more."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes, we offer a 30-day guarantee on all job postings. If you don't find a suitable candidate within 30 days, we'll extend your posting for an additional 30 days at no cost."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#211612]  mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about posting jobs and finding culinary talent
        </p>
      </div>

      <div className="space-y-4 mb-16">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <ChevronDown 
                size={20} 
                className={`transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6">Our team is here to help you find the perfect culinary talent for your business</p>
        <Link
          to="/contact"
          className="px-3 py-2 text-xl bg-[#8d877b] text-[#211612] hover:text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default FAQs;
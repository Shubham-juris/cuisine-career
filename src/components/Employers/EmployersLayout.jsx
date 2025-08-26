// components/Employers/EmployersLayout.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployersWelcome from "./EmployersWelcome";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import Posting from "./Posting";
import FAQs from "./FAQs";

const EmployersLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Routes>
        <Route path="welcome" element={<EmployersWelcome />} />
        <Route path="manage-jobs" element={<WhyUs />} />
        <Route path="resume-search" element={<Testimonials />} />
        <Route path="company-profiles" element={<Posting />} />
        <Route path="pricing" element={<FAQs />} />
      </Routes>
    </div>
  );
};

export default EmployersLayout;
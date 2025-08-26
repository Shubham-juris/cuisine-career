// JobsPage.jsx
import React, { useState } from "react";
import { FaUtensils, FaConciergeBell, FaGlassCheers, FaBroom, FaUserTie, FaSoap } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const jobs = [
  { id: 1, title: "Sous Chef", wage: "$26–$28/hour", icon: <FaUtensils />, desc: "Assist the head chef with food preparation and supervise the kitchen team." },
  { id: 2, title: "Chef Tournant", wage: "$24–$26/hour", icon: <FaUtensils />, desc: "Flexible chef role covering multiple stations in the kitchen." },
  { id: 3, title: "Line Cook", wage: "$23–$25/hour", icon: <FaUtensils />, desc: "Prepare meals efficiently, maintain quality and consistency." },
  { id: 4, title: "Hotel Receptionist", wage: "$21–$23/hour", icon: <FaConciergeBell />, desc: "Welcome guests, handle check-ins/outs, and assist with reservations." },
  { id: 5, title: "Housekeeping Attendant", wage: "$19–$21/hour", icon: <FaBroom />, desc: "Ensure guest rooms and hotel areas are clean and well-maintained." },
  { id: 6, title: "Bartender", wage: "$22–$24/hour", icon: <FaGlassCheers />, desc: "Prepare and serve drinks while providing excellent guest service." },
    { id: 1, title: "Sous Chef", wage: "$26–$28/hour", icon: <FaUtensils />, desc: "Assist the head chef with food preparation and supervise the kitchen team." },
  { id: 2, title: "Chef Tournant", wage: "$24–$26/hour", icon: <FaUtensils />, desc: "Flexible chef role covering multiple stations in the kitchen." },
  { id: 3, title: "Line Cook", wage: "$23–$25/hour", icon: <FaUtensils />, desc: "Prepare meals efficiently, maintain quality and consistency." },
  { id: 4, title: "Hotel Receptionist", wage: "$21–$23/hour", icon: <FaConciergeBell />, desc: "Welcome guests, handle check-ins/outs, and assist with reservations." },
  { id: 5, title: "Housekeeping Attendant", wage: "$19–$21/hour", icon: <FaBroom />, desc: "Ensure guest rooms and hotel areas are clean and well-maintained." },
  { id: 6, title: "Bartender", wage: "$22–$24/hour", icon: <FaGlassCheers />, desc: "Prepare and serve drinks while providing excellent guest service." },
];

// JobCard Component
const JobCard = ({ id, title, wage, desc, icon, openForm }) => {
  return (
    <div
      id={`job-${id}`}
      className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 flex flex-col items-start gap-4 transform hover:-translate-y-2"
    >
      <div className="text-3xl p-2 rounded-full bg-[#8d877b] text-[#211612]">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{desc}</p>
      <p className="font-medium text-gray-900">Wage: {wage}</p>
      <button
        className="mt-auto px-4 py-2 bg-[#8d877b] text-white rounded-lg hover:bg-gray-700 transition"
        onClick={() => openForm(id, title)}
      >
        Apply Now
      </button>
    </div>
  );
};

// JobsPage Component
const Jobs = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const openForm = (id, title) => {
    setSelectedJob({ id, title });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", resume: null });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send `formData` + `selectedJob` to backend API

    closeForm();

    Swal.fire({
      title: "Application Submitted!",
      text: `You have successfully applied for ${selectedJob.title}.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Current Job Openings</h1>
        <p className="mt-4 text-gray-600">
          Join our hotel & culinary team to build a stronger, sustainable food and hospitality community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} openForm={openForm} />
        ))}
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeForm}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Apply for {selectedJob?.title}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="border rounded-lg p-2 w-full"
              />
              <button
                type="submit"
                className="bg-[#8d877b] text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default Jobs;

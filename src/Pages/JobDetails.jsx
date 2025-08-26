import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaMoneyBillWave, FaUserTie, FaFileUpload } from "react-icons/fa";

// Dummy jobs data (in real case, fetch from API/backend)
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "We are looking for a skilled React developer.",
    wage: "$25/hr",
    location: "Remote",
    responsibilities: [
      "Build UI with React",
      "Ensure responsiveness",
      "Collaborate with backend team",
    ],
  },
  {
    id: 2,
    title: "Backend Engineer",
    desc: "Join our backend team working with Node.js.",
    wage: "$30/hr",
    location: "New York",
    responsibilities: [
      "Develop REST APIs",
      "Work with databases",
      "Maintain server-side logic",
    ],
  },
];

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Candidate Data:", formData);
    alert("Application submitted successfully!");
  };

  if (!job) {
    return <h2 className="text-center text-red-500 mt-12">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Job Info */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaUserTie className="text-red-500" /> {job.title}
          </h1>
          <p className="text-gray-600 mb-6">{job.desc}</p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaMoneyBillWave className="text-green-500" /> <strong>Wage:</strong> {job.wage}
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" /> <strong>Location:</strong> {job.location}
            </li>
          </ul>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Responsibilities:</h2>
            <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Candidate Application Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply for this Job</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
            />
            <div className="flex items-center border rounded-lg px-4 py-2">
              <FaFileUpload className="text-gray-500 mr-3" />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <textarea
              name="message"
              placeholder="Cover Letter / Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#8d877b] text-white py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

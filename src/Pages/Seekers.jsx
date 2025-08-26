// JobSeekers.jsx
import React from "react";
import {
  FaUserTie,
  FaUtensils,
  FaConciergeBell,
  FaGlassCheers,
  FaBroom,
} from "react-icons/fa";
import AboutSection from "../components/AboutSection1";

const jobSeekers = [
  { id: 1, name: "Rahul Sharma", role: "Sous Chef", skills: "Continental, Italian, Kitchen Management", exp: "4 Years", contact: "rahulchef@mail.com | +91 9876543210", icon: <FaUtensils /> },
  { id: 2, name: "Anjali Verma", role: "Chef Tournant", skills: "Bakery, Multi-Cuisine", exp: "3 Years", contact: "anjaliv@mail.com | +91 9988776655", icon: <FaUtensils /> },
  { id: 3, name: "Vikas Mehta", role: "Line Cook", skills: "Grilling, Sauces, Indian Cuisine", exp: "2 Years", contact: "vikasmehta@mail.com | +91 9001122334", icon: <FaUtensils /> },
  { id: 4, name: "Priya Singh", role: "Hotel Receptionist", skills: "Front Desk, Customer Service, Billing", exp: "5 Years", contact: "priyasingh@mail.com | +91 9098765432", icon: <FaConciergeBell /> },
  { id: 5, name: "Karan Gupta", role: "Housekeeping Attendant", skills: "Room Service, Cleaning, Laundry", exp: "2.5 Years", contact: "karangupta@mail.com | +91 9123456780", icon: <FaBroom /> },
  { id: 6, name: "Meena Nair", role: "Bartender", skills: "Mixology, Cocktails, Guest Service", exp: "3.5 Years", contact: "meenanair@mail.com | +91 9988001122", icon: <FaGlassCheers /> },
  { id: 7, name: "Rohit Yadav", role: "Sous Chef", skills: "Indian, Mughlai, Food Styling", exp: "6 Years", contact: "rohityadav@mail.com | +91 9321456780", icon: <FaUtensils /> },
  { id: 8, name: "Sneha Kapoor", role: "Chef Tournant", skills: "Italian, French, Team Supervision", exp: "4.5 Years", contact: "snehak@mail.com | +91 9765432109", icon: <FaUtensils /> },
  { id: 9, name: "Deepak Kumar", role: "Line Cook", skills: "Fast Food, Continental, Garnishing", exp: "2 Years", contact: "deepakk@mail.com | +91 9345678210", icon: <FaUtensils /> },
  { id: 10, name: "Nisha Patel", role: "Hotel Receptionist", skills: "Guest Relations, Telephone Handling", exp: "3 Years", contact: "nishap@mail.com | +91 9456123780", icon: <FaConciergeBell /> },
  { id: 11, name: "Arjun Reddy", role: "Housekeeping Attendant", skills: "Floor Cleaning, Bed Making, Hospitality", exp: "1.5 Years", contact: "arjunreddy@mail.com | +91 9654783210", icon: <FaBroom /> },
  { id: 12, name: "Komal Joshi", role: "Bartender", skills: "Mocktails, Wine Knowledge, Bar Handling", exp: "2 Years", contact: "komalj@mail.com | +91 9765214300", icon: <FaGlassCheers /> },
];

const SeekerCard = ({ id, name, role, skills, exp, contact, icon }) => {
  return (
    
    <div
      id={`seeker-${id}`}
      className="bg-white mx-2 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 flex flex-col items-start gap-3 transform hover:-translate-y-2"
    >
      <div className="text-3xl p-2 rounded-full bg-[#8d877b] text-[#211612]">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Role Applied: <span className="font-medium text-gray-800">{role}</span></p>
      <p className="text-gray-600">Skills: {skills}</p>
      <p className="text-gray-600">Experience: {exp}</p>
      <p className="text-gray-600">Contact: {contact}</p>
    </div>
  );
};

const JobSeekers = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Job Seekers</h1>
        <p className="mt-4 text-gray-600">
          Explore talented candidates who have applied for different roles in our hotel & culinary team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobSeekers.map((seeker) => (
          <SeekerCard key={seeker.id} {...seeker} />
        ))}
      </div>
      <AboutSection/>
    </div>
  );
};

export default JobSeekers;

import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="rounded-2xl bg-white shadow p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-sm text-gray-500">{job.location}</p>
      <p className="mt-2 text-gray-700">{job.description}</p>
      <button className="mt-4 w-full rounded-xl bg-[#8d877b] px-4 py-2 text-sm text-white  transition">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;

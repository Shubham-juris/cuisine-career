import React from "react";
import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "Head Chef",
    location: "Delhi",
    description: "Lead kitchen operations and manage a team of chefs."
  },
  {
    id: 2,
    title: "Waiter",
    location: "Mumbai",
    description: "Serve customers and ensure top dining experience."
  },
  {
    id: 3,
    title: "Restaurant Manager",
    location: "Bangalore",
    description: "Oversee daily operations and staff management."
  },
];

const JobGrid = () => {
  return (
    <section id="explore" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Jobs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobGrid;

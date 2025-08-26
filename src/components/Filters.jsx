import React from "react";

const Filters = () => {
  return (
    <section className="bg-white py-8 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="flex-1 rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select className="rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Location</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
        <select className="rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Role</option>
          <option>Chef</option>
          <option>Waiter</option>
          <option>Manager</option>
        </select>
        <button className="rounded-xl  px-6 py-3 bg-[#8d877b] text-sm font-semibold text-white ">
          Search
        </button>
      </div>
    </section>
  );
};

export default Filters;

import React from "react";

const roles = [
  { id: 1, title: "Chef", description: "Create culinary masterpieces in top kitchens." },
  { id: 2, title: "Waiter", description: "Deliver great service and enhance guest experience." },
  { id: 3, title: "Bartender", description: "Mix cocktails and craft unique drinks." },
  { id: 4, title: "Manager", description: "Lead operations and ensure smooth business flow." },
  { id: 5, title: "Host/Hostess", description: "Welcome guests with hospitality and style." },
  { id: 6, title: "Cleaner", description: "Maintain hygiene and cleanliness in the workplace." },
];

const RolesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Explore Popular Roles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-gray-600">{role.description}</p>
              <button className="mt-4 inline-block rounded-xl bg-[#8d877b] text-white px-4 py-2 text-sm">
                View Jobs
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;

import React from "react";

const roles = [
  { id: 1, title: "Chef", emoji: "👨‍🍳" },
  { id: 2, title: "Waiter", emoji: "🧑‍🍽️" },
  { id: 3, title: "Manager", emoji: "📋" },
  { id: 4, title: "Bartender", emoji: "🍹" },
];

const Roles = () => {
  return (
    <section id="roles" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Popular Roles</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div
              key={role.id}
              className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 shadow hover:shadow-lg transition"
            >
              <span className="text-4xl">{role.emoji}</span>
              <p className="text-lg font-semibold">{role.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;

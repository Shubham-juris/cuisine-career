import React from "react";

const categories = [
  { id: 1, title: "Hotels", image: "https://source.unsplash.com/400x300/?hotel" },
  { id: 2, title: "Restaurants", image: "https://source.unsplash.com/400x300/?restaurant" },
  { id: 3, title: "Cafes", image: "https://source.unsplash.com/400x300/?cafe" },
  { id: 4, title: "Bars", image: "https://source.unsplash.com/400x300/?bar" },
];

const ExploreSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;

import React from "react";

const CTA = () => {
  return (
    <section className="bg-indigo-600 text-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Start Your Culinary Journey?
        </h2>
        <p className="mt-4 opacity-90">
          Join thousands of professionals finding their dream jobs in the food industry.
        </p>
        <button className="mt-6 rounded-xl bg-[#8d877b] text-black px-6 py-3 text-sm font-semibold hover:bg-yellow-500">
          Sign Up Today
        </button>
      </div>
    </section>
  );
};

export default CTA;

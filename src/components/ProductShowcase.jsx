// src/components/ProductShowcase.jsx
import React from "react";

const products = [
  {
    id: 1,
    title: "Anime Tee",
    img: "https://images.unsplash.com/photo-1606813907291-f83b3dd9c1c7?w=800",
  },
  {
    id: 2,
    title: "Car Hoodie",
    img: "https://images.unsplash.com/photo-1584270354949-1f61a50fa9b0?w=800",
  },
  {
    id: 3,
    title: "Quote Mug",
    img: "https://images.unsplash.com/photo-1512499617640-c2f999018b72?w=800",
  },
  {
    id: 4,
    title: "Handcrafted Keychain",
    img: "https://images.unsplash.com/photo-1628692946314-18a6a67f6ef3?w=800",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-20 px-10 text-center">
      {/* Section Heading */}
      <h3 className="text-4xl font-bold mb-6 text-white tracking-wide">
        FEATURED COLLECTION
      </h3>

      {/* Explore Button (Moved Up) */}
      <button className="mb-12 bg-black border border-[#00FF66] text-[#00FF66] font-semibold px-10 py-3 rounded-full hover:scale-110 transition transform hover:shadow-[0_0_25px_#00FF66]">
        Explore Now
      </button>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="card bg-gray-900 p-4 rounded-2xl shadow-lg hover:shadow-[0_0_20px_#00FF66] transition-transform hover:scale-105"
          >
            <img
              src={p.img}
              alt={p.title}
              className="rounded-xl w-full h-56 object-cover"
            />
            <h4 className="text-xl font-semibold mt-4 text-center text-[#00FF66]">
              {p.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

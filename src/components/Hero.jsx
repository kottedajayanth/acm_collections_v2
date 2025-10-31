import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mt-24 px-6">
      {/* Tagline */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        Wear What Drives You —
        <span className="text-[#00ff66]"> Anime </span>•
        <span className="text-[#00ff66]"> Cars </span>•
        <span className="text-[#00ff66]"> Quotes </span>•
        <span className="text-[#00ff66]"> Uniqueness </span>
      </h2>

      {/* Description */}
      <p className="mt-6 text-gray-300 max-w-2xl text-lg">
        Discover premium clothing and handcrafted gifts that reflect your
        passions. Each design is created with{" "}
        <span className="text-[#00ff66] font-semibold">quality</span> and{" "}
        <span className="text-[#00ff66] font-semibold">uniqueness</span> in
        mind.
      </p>
    </section>
  );
}

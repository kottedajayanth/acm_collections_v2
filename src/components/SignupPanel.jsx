// src/components/SignupPanel.jsx
import React from "react";

export default function SignupPanel({ onBack }) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-[#00ff66] mb-6 text-center">
        Create Your Account
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#00ff66] focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#00ff66] focus:outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#00ff66] focus:outline-none"
      />
      <button className="w-full bg-[#00ff66] text-black py-3 rounded-lg font-semibold hover:scale-105 transition">
        Sign Up
      </button>

      <p className="text-gray-400 mt-6 text-center text-sm">
        Already have an account?{" "}
        <span
          onClick={onBack}
          className="text-[#00ff66] cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </div>
  );
}

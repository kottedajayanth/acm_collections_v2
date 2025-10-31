import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black border-b border-gray-800">
      <h1 className="text-2xl font-bold text-[#00FF66] tracking-wide">
        ACM COLLECTIONS
      </h1>
      <ul className="flex gap-8 text-lg">
        <li><Link to="/" className="hover:text-[#00FF66] transition">Home</Link></li>
        <li><Link to="/shop" className="hover:text-[#00FF66] transition">Shop</Link></li>
        <li><Link to="/about" className="hover:text-[#00FF66] transition">About</Link></li>
        <li><Link to="/contact" className="hover:text-[#00FF66] transition">Contact</Link></li>
        <li><button className="border border-[#00FF66] px-4 py-1 rounded-full hover:bg-[#00FF66] hover:text-black transition">Login</button></li>
      </ul>
    </nav>
  );
}

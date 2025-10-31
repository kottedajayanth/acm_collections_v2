import React, { useState, useRef } from "react";
import ProductShowcase from "./components/ProductShowcase";
import LoginPanel from "./components/LoginPanel";

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Refs for smooth scrolling
  const homeRef = useRef(null);
  const shopRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleOpenLogin = () => {
    setIsSignUp(false);
    setIsLoginOpen(true);
  };

  const handleOpenSignUp = () => {
    setIsSignUp(true);
    setIsLoginOpen(true);
  };

  // Smooth scroll handler
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-[#00ff66] cursor-pointer" onClick={() => scrollToSection(homeRef)}>
          ACM COLLECTIONS
        </h1>
        <ul className="flex gap-8 text-lg">
          <li
            className="hover:text-[#00ff66] transition cursor-pointer"
            onClick={() => scrollToSection(homeRef)}
          >
            Home
          </li>
          <li
            className="hover:text-[#00ff66] transition cursor-pointer"
            onClick={() => scrollToSection(shopRef)}
          >
            Shop
          </li>
          <li
            className="hover:text-[#00ff66] transition cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </li>
          <li
            className="hover:text-[#00ff66] transition cursor-pointer"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </li>
          <li
            className="hover:text-[#00ff66] transition cursor-pointer"
            onClick={handleOpenLogin}
          >
            Login
          </li>
        </ul>
      </nav>

      {/* Home Section */}
      <section ref={homeRef} className="flex flex-col items-center text-center mt-24">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#00ff66] tracking-wide">
          QUALITY • UNIQUENESS • STYLE
        </h2>
        <p className="mt-6 text-gray-300 max-w-2xl">
          Explore our exclusive collection of clothing and handcrafted gifts
          inspired by{" "}
          <span className="text-[#00ff66]">Anime</span>,{" "}
          <span className="text-[#00ff66]">Cars</span>, and{" "}
          <span className="text-[#00ff66]">Quotes</span>.
        </p>
      </section>

      {/* Shop Section */}
      <div ref={shopRef}>
        <ProductShowcase />
      </div>

      {/* About Section */}
      <section ref={aboutRef} className="mt-20 text-center px-6">
        <h3 className="text-3xl font-bold text-[#00ff66] mb-4">About Us</h3>
        <p className="text-gray-400 max-w-3xl mx-auto">
          ACM Collections is more than just a clothing store — it’s a lifestyle brand
          built on passion for anime, cars, and creativity. Every piece is crafted
          with quality and individuality in mind.
        </p>
      </section>

      {/* Contact Section */}
      <footer
        ref={contactRef}
        className="mt-20 py-10 text-center border-t border-gray-700 text-gray-400"
      >
        <h3 className="text-xl font-semibold text-[#00ff66] mb-2">Contact Us</h3>
        <p>Email: support@acmcollections.com</p>
        <p>Instagram: @acmcollections</p>
        <p className="mt-4">© 2025 ACM Collections. All rights reserved.</p>
      </footer>

      {/* Login/Signup Panel */}
      <LoginPanel
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        isSignUp={isSignUp}
        switchToSignUp={handleOpenSignUp}
        switchToLogin={handleOpenLogin}
      />
    </div>
  );
}

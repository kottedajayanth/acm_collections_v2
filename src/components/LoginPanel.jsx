// src/components/LoginPanel.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignupPanel from "./SignupPanel";

export default function LoginPanel({ isOpen, onClose }) {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-black text-white shadow-lg border-l border-[#00ff66] p-8 z-50"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-[#00ff66] text-2xl font-bold"
          >
            ×
          </button>

          {/* Conditional Rendering */}
          {showSignup ? (
            <SignupPanel onBack={() => setShowSignup(false)} />
          ) : (
            <div className="mt-10">
              <h2 className="text-3xl font-bold text-[#00ff66] mb-6 text-center">
                Welcome Back
              </h2>
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
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-700"></div>
                <span className="px-2 text-gray-400 text-sm">or continue with</span>
                <div className="flex-grow h-px bg-gray-700"></div>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-3 border border-[#00ff66] py-2 rounded-lg hover:bg-[#00ff66]/10 transition">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />
                  Continue with Google
                </button>

                <button className="flex items-center justify-center gap-3 border border-[#00ff66] py-2 rounded-lg hover:bg-[#00ff66]/10 transition">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-5 h-5" />
                  Continue with Facebook
                </button>
              </div>

              {/* Signup Redirect */}
              <p className="text-gray-400 mt-6 text-center text-sm">
                New user?{" "}
                <span
                  onClick={() => setShowSignup(true)}
                  className="text-[#00ff66] cursor-pointer hover:underline"
                >
                  Create Account
                </span>
              </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

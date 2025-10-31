import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <h2 className="text-4xl font-bold text-[#00ff66] mb-10">Login</h2>
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-lg"
      >
        <label className="block mb-4">
          <span className="text-gray-300">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mt-2 p-3 rounded bg-black border border-gray-700 focus:border-[#00ff66] outline-none"
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-300">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-2 p-3 rounded bg-black border border-gray-700 focus:border-[#00ff66] outline-none"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-[#00ff66] text-black py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

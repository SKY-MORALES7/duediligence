"use client";

import { useState } from "react";


export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully!", formData);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* 🔹 The Ken Burns Background Layer */}
      <div
        className="absolute inset-0 z-0 animate-kenburns bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/audio-headset-used-by-call-center-agents-help-clients-telecommunication-with-technology-empty-customer-service-workstation-with-headphones-computers-modern-gadgets_482257-40834.jpg?ga=GA1.1.2139969280.1761641929&semt=ais_incoming&w=740&q=80')",
        }}
      />
      <div className="relative z-10 m-5 flex items-center justify-center  px-4 min-h-screen backdrop-blur-sm">
        <div className="max-w-xl rounded-2xl bg-zinc-200 p-8 mt-6 shadow-lg ">

          <div className="text-center m-3 mt-3">
            <h1 className="font-bold text-xl"> Login To Your Account </h1>
          </div>
          <div className=" mb-5 h-auto">
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <label className="text-gray-700">email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                required
                placeholder="mrmande@gmail.com"
                className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-gray-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                onChange={handleChange}
              />

              <label className="text-gray-700">password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-gray-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 "
                onChange={handleChange}
              />
              <button
                type="submit"
                className="my-4 py-3 w-full rounded-xl border-gray-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 border bg-slate-400  hover:bg-slate-900 hover:text-white transition-all delay-100"
              >
                Login
              </button>
            </form>
          </div>

          <div className="flex justify-around mt-2">
            <p className="text-medium ">Don't Have an Account?</p>
            <a
              href="/register"
              className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-slate-900 after:transition-all after:duration-300 after:delay-300 hover:after:w-full"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

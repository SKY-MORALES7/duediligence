"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sent:", formData);
    alert("Thanks for the message!");
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      
      {/* 🔹 The Ken Burns Background Layer */}
      <div 
        className="absolute inset-0 z-0 animate-kenburns bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://img.freepik.com/free-photo/audio-headset-used-by-call-center-agents-help-clients-telecommunication-with-technology-empty-customer-service-workstation-with-headphones-computers-modern-gadgets_482257-40834.jpg?ga=GA1.1.2139969280.1761641929&semt=ais_incoming&w=740&q=80')" 
        }}
      />

    <div className="relative z-10 flex min-h-screen items-center justify-center  p-6  backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-xl bg-zinc-100 p-8 shadow-sm border border-gray-200">
        
        <h1 className="mb-2 text-2xl font-bold text-gray-900">Contact Us</h1>
        <p className="mb-6 text-gray-500">Reach out to us and we'll get back to you.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              placeholder="Mr Mande"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              placeholder="mrmande@gmail.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-slate-600 py-3 font-semibold text-white transition hover:bg-slate-900"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
    </main>
  );
}
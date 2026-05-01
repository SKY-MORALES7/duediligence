'use client'

import {useState} from 'react'


export default function Register(){

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email:'',
        password: '',
        confirmpassword: ''
    })

    const [showPassword, setShowPassword] = useState(false)


    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if passwords match
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return; // Stop the function here
  }


        // backend stuff
  console.log("Form Data:", formData)
  console.log("Form submitted successfully!", formData)      
    }
    return(
          <main className="relative min-h-screen w-full overflow-hidden">
      
      {/* 🔹 The Ken Burns Background Layer */}
      <div 
        className="absolute inset-0 z-0 animate-kenburns bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://img.freepik.com/free-photo/audio-headset-used-by-call-center-agents-help-clients-telecommunication-with-technology-empty-customer-service-workstation-with-headphones-computers-modern-gadgets_482257-40834.jpg?ga=GA1.1.2139969280.1761641929&semt=ais_incoming&w=740&q=80')" 
        }}
      />
      <div className="relative z-10 backdrop-blur-sm flex min-h-screen items-center justify-center  px-4">
      <div className="w-full max-w-xl rounded-2xl bg-zinc-100 p-8 shadow-lg  my-4">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-sm text-gray-500">Please fill in your details to get started</p>
        </div>
       <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            {/* First Name */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-gray-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                placeholder="Mande"
                onChange={handleChange}
              />
            </div>
            {/* Last Name */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-gray-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                placeholder="Asemakaha"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-gray-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
              placeholder="mrmande@gmail.com"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className = "relative">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-gray-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500  pr-12"
              placeholder="••••••••"
              onChange={handleChange}
            />
            <button 
            type = "button"
            onClick = {() => setShowPassword(!showPassword)}
            className = 'absolute right-3 top-[60%] -translate-y-1/2  '
            >
            {showPassword ? "HIDE" : "SHOW"}
              </button>
          </div>

          <div>
  <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
  <input
    type="password"
    name="confirmpassword" 
    required
    className="mt-1 w-full rounded-lg border border-gray-600 px-4 py-2 text-gray-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
    placeholder="••••••••"
    onChange={handleChange}
  />
</div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-slate-600 py-3 font-semibold text-white transition hover:bg-slate-900 active:bg-blue-800"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-slate-900 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-slate-600 after:duration-300 after:transition-all after:delay-300 hover:after:w-full">
            Log in
          </a>
        </p>
      </div>
    </div>
    </main>
  );
}

 
'use client'
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ShieldCheck, GraduationCap, ClipboardList, BarChart3, UserCog, BookOpen } from 'lucide-react';

const services = [
  {
    title: "Student Portal",
    description: "Access your academic journey in one place. View schedules, track attendance, and stay on top of deadlines.",
    icon: <GraduationCap className="w-10 h-10 text-cyan-400" />,
    features: ["Digital Gradebook", "Assignment Submissions", "Attendance Tracking"]
  },
  {
    title: "Teacher Suite",
    description: "Streamline classroom management. Create exams, input scores, view number of students in a class, and generate student performance reports instantly.",
    icon: <ClipboardList className="w-10 h-10 text-pink-500" />,
    features: ["Exam Creation", "Bulk Score Entry", "Parent Communication", "Student/Class Capacity"]
  },
  {
    title: "Admin Control",
    description: "Full oversight of the institution. Manage registrations, audit records, and maintain system security.",
    icon: <UserCog className="w-10 h-10 text-yellow-400" />,
    features: ["User Management", "System Audits", "Resource Allocation"]
  },
  {
    title: "Exam & Assessment",
    description: "Robust testing environment with automated grading and instant feedback loops for students.",
    icon: <BookOpen className="w-10 h-10 text-purple-400" />,
    features: ["Timed Assessments", "Auto-grading", "Question Banks"]
  },
  {
    title: "Analytics & Insights",
    description: "Visualize progress with detailed charts. Identify learning gaps and celebrate academic growth.",
    icon: <BarChart3 className="w-10 h-10 text-emerald-400" />,
    features: ["Performance Trends", "Class Averages", "Growth Metrics"]
  },
  {
    title: "Secure Records",
    description: "Encrypted storage for all academic transcripts and personal data, ensuring 100% compliance.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    features: ["Data Encryption", "Cloud Backups", "Privacy Control"]
  }
];

export default function IridescentBubblesPage() {
  const container = useRef(null);

  useGSAP(() => {
    const bubbles = gsap.utils.toArray(".soap-bubble");

    bubbles.forEach((bubble) => {
      // 1. Initial Random placement
      gsap.set(bubble, {
        x: gsap.utils.random(0, window.innerWidth - 100),
        y: gsap.utils.random(0, window.innerHeight - 100),
      });

      // 2. The "Laundry Bubble" Float
      gsap.to(bubble, {
        x: `+=${gsap.utils.random(-200, 200)}`,
        y: `+=${gsap.utils.random(-300, 300)}`,
        rotation: 360,
        duration: gsap.utils.random(10, 20),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. The "Wobble"
      gsap.to(bubble, {
        scaleX: 1.1,
        scaleY: 0.9,
        duration: gsap.utils.random(2, 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // Card Animation
    gsap.fromTo(".service-card", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.3 }
    );
  }, { scope: container });

  return (
    /* FIXED: Added the ref here */
    <div ref={container} className="bg-slate-950 min-h-screen text-white py-20 px-6 relative overflow-hidden">
      
      {/* FIXED: Added the actual Bubble HTML elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="soap-bubble absolute w-32 h-32 rounded-full border border-white/20 bg-gradient-to-br from-cyan-400/20 via-transparent to-pink-500/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] backdrop-blur-[2px]">
           <div className="absolute top-4 left-6 w-4 h-2 bg-white/40 rounded-full blur-[1px] -rotate-45" />
        </div>
        <div className="soap-bubble absolute w-48 h-48 rounded-full border border-white/20 bg-gradient-to-tr from-purple-500/20 via-transparent to-teal-400/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] backdrop-blur-[2px]">
           <div className="absolute top-6 left-10 w-6 h-3 bg-white/30 rounded-full blur-[2px] -rotate-45" />
        </div>
        <div className="soap-bubble absolute w-24 h-24 rounded-full border border-white/20 bg-gradient-to-bl from-yellow-400/20 via-transparent to-blue-500/20 shadow-[inset_0_0_15px_rgba(255,255,255,0.4)] backdrop-blur-[1px]">
           <div className="absolute top-3 left-4 w-3 h-1.5 bg-white/50 rounded-full blur-[1px] -rotate-45" />
        </div>
        <div className="soap-bubble absolute w-40 h-40 rounded-full border border-white/10 bg-gradient-to-br from-red-400/10 to-blue-400/10 shadow-[inset_0_0_25px_rgba(255,255,255,0.2)]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-5 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent pb-2">
            Our Services Include
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive management system designed to empower educators...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              /* FIXED: Added 'service-card' and 'opacity-0' */
              className="service-card opacity-0 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group backdrop-blur-sm"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-100">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
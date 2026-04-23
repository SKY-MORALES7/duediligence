import React from 'react';
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

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-5 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent pb-2">
            Our Services Include
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive management system designed to empower educators, 
            support students, and simplify administration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group"
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
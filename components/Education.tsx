import React from 'react';

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Nehru Institute of Information Technology and Management",
      location: "Coimbatore | Anna University",
      duration: "2024 - 2026",
      status: "Currently Pursuing"
    },
    {
      degree: "Bachelor of Commerce with Computer Applications (B.Com CA)", 
      institution: "Your UG College Name",
      location: "Coimbatore | Bharathiar University",
      duration: "2021 - 2024",
      status: "Completed"
    },
    {
      degree: "HLSC", 
      institution: "GSR Matriculation Higher Secondary School",
      location: "Coimbatore | State Board",
      duration: "2021 - 2024",
      status: "Completed"
    },
    {
      degree: "SSLC", 
      institution: "Thambu HR SEC School",
      location: "Coimbatore | State Board",
      duration: "2021 - 2024",
      status: "Completed"
    }

  ];

  return (
    <section id="education" className="py-20 px-10">
      <h1 className="text-5xl font-bold mb-16">Education</h1>
      <div className="grid gap-8">
        {education.map((edu, index) => (
          <div key={index} className="glass p-10 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-cyan-400">{edu.degree}</h2>
                <p className="text-xl text-gray-200 mt-2">{edu.institution}</p>
                <p className="text-gray-400 italic mt-1">{edu.location}</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <span className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-full font-mono text-sm">
                  {edu.duration}
                </span>
                <p className="text-xs mt-4 text-gray-500 font-bold uppercase tracking-widest">
                  {edu.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
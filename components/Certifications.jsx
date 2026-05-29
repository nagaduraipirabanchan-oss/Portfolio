import React from 'react';

export default function Certifications() {
  const certs = [
    {
      title: "Web Development",
      provider: "Code Alpha",
      skills: ["Html", "CSS", "JavaScript", "React JS", "Node JS", "Mongo DB"]
    },
    {
      title: "React JS",
      provider: "NoviTech R&D Limited",
      skills: ["UI Development", "State Management", "React Router"]
    },
    {
      title: "Enterprise Design Thinking",
      provider: "IBM",
      skills: ["Problem Solving", "Collaboration", "Teamwork", "Design Thinking"]
    }
    
  ];

  return (
    <section id="certifications" className="py-20 px-10">
      <h1 className="text-5xl font-bold mb-16">Certifications</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {certs.map((cert, index) => (
          <div key={index} className="glass p-8 rounded-3xl border border-white/5 hover:bg-white/5 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
            <p className="text-cyan-400 font-medium">{cert.provider}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {cert.skills.map((skill, i) => (
                <span key={i} className="text-[10px] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
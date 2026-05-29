"use client";

import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "CosmicPulse AI",
      subtitle: "Intelligent Signal Detection & 3D Visualization",
      description: "CosmicPulse AI is an advanced intelligent radio signal monitoring and visualization system designed to detect, analyze, and display radio frequency signals in real time.",
      techStack: ["Python", "Signal Processing", "SDR Modules", "Machine Learning"],
      image: "https://img.sanishtech.com/u/75f139ecf8692c7869565f6e007655d9.png",
      liveLink: "https://cosmicpulse-ai-jhu9f3wfo54hwzdksqwurj.streamlit.app/",
      caseStudy: {
        projectDescription: "CosmicPulse AI is an advanced intelligent radio signal monitoring and visualization system designed to detect, analyze, and display radio frequency signals in real time.",
        objectives: ["Detect radio signals in real time", "Monitor frequency variations accurately"],
        features: ["Real-time radio signal detection", "Frequency spectrum analysis", "Signal strength monitoring", "Noise filtering and enhancement"],
        technologies: ["Python", "Signal Processing Libraries", "Machine Learning Algorithms", "SDR Modules"],
        workingProcess: ["Radio signals are collected from SDR devices.", "The system processes incoming frequency data.", "Noise filtering algorithms remove unwanted disturbances."],
        applications: ["Communication monitoring", "Wireless network analysis", "Defense communication systems"],
        challenges: ["Handling massive radio signal datasets", "Removing noise from RF signals"],
        solutions: ["Optimized signal filtering techniques", "Efficient real-time visualization methods"],
        conclusion: "CosmicPulse AI provides an efficient and intelligent platform for radio signal detection and monitoring.",
      },
    },

    // 🔥 PROJECT 2
    {
      title: "AI Image Generator",
      subtitle: "Text-to-Image Generation Using Generative AI",
      description: "AI Image Generator is a web-based application developed using Python that converts user text prompts into high-quality images using generative AI.",
      techStack: ["Python", "Flask", "Generative AI", "Machine Learning"],
      image: "https://img.sanishtech.com/u/d02d209507b977b6e9cfb54c6e6443aa.png",
      liveLink: "https://text-to-image-genaration.onrender.com",
      caseStudy: {
        projectDescription: "AI Image Generator is a web-based application developed using Python that converts user text prompts into high-quality images using intelligent image generation techniques.",
        objectives: ["Convert text prompts into visual images", "Generate high-quality AI-based images"],
        features: ["Text prompt based image generation", "Real-time image creation", "User-friendly web interface"],
        technologies: ["Python", "Flask / Django", "HTML, CSS, JavaScript", "Generative AI"],
        workingProcess: ["The user enters a text prompt in the web application.", "The system processes the natural language input.", "AI image generation models analyze the prompt."],
        applications: ["Digital art creation", "Creative media generation", "Content design"],
        challenges: ["Understanding user prompts accurately", "Generating realistic high-quality images"],
        solutions: ["Optimized image generation pipeline", "Efficient backend processing techniques"],
        conclusion: "The AI Image Generator web application provides an intelligent platform for converting text descriptions into visual content.",
      },
    },
  ];

  return (
    <section id="projects" className="py-32 bg-transparent text-white w-full">
      <div className="text-left mb-16 w-full px-4 md:px-10">
        <h1 className="text-5xl font-bold text-cyan-400 ml-0">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 shadow-2xl"
          >
            <div className="w-full aspect-video overflow-hidden bg-black/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow items-start text-left">
              <h2 className="text-3xl font-bold text-cyan-400">
                {project.title}
              </h2>

              <p className="text-sm italic text-gray-400 mt-1">
                {project.subtitle}
              </p>

              <p className="mt-5 text-gray-300 leading-relaxed text-base line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-extrabold rounded-full transition-all duration-300 shadow-lg text-sm"
                >
                  View Case Study
                </button>

                {/* Live Demo Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-extrabold rounded-full transition-all duration-300 text-sm"
                >
                  Live Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-5">
          <div className="relative bg-[#0a0a0a]/90 border border-white/10 rounded-[2rem] p-10 max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-3xl text-gray-500 hover:text-white transition-colors"
            >
              ✕
            </button>

            <h2 className="text-4xl font-bold text-cyan-400">
              {selectedProject.title}
            </h2>

            <p className="mt-2 text-gray-400 italic mb-8">
              {selectedProject.subtitle}
            </p>

            <div className="space-y-10">
              <section>
                <h3 className="text-2xl font-bold border-l-4 border-cyan-500 pl-4">
                  Project Overview
                </h3>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  {selectedProject.caseStudy.projectDescription}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold border-l-4 border-cyan-500 pl-4">
                  Main Features
                </h3>

                <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
                  {selectedProject.caseStudy.features.map(
                    (f: string, i: number) => (
                      <li key={i}>{f}</li>
                    )
                  )}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold border-l-4 border-cyan-500 pl-4">
                  Working Process
                </h3>

                <ul className="list-decimal ml-6 mt-4 space-y-2 text-gray-300">
                  {selectedProject.caseStudy.workingProcess.map(
                    (w: string, i: number) => (
                      <li key={i}>{w}</li>
                    )
                  )}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold border-l-4 border-cyan-500 pl-4">
                  Technical Challenges
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mt-4 text-gray-300">
                  <div>
                    <h4 className="font-bold text-red-400 mb-2">
                      Challenges:
                    </h4>

                    <ul className="list-disc ml-5 space-y-1">
                      {selectedProject.caseStudy.challenges.map(
                        (c: string, i: number) => (
                          <li key={i}>{c}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-green-400 mb-2">
                      Solutions:
                    </h4>

                    <ul className="list-disc ml-5 space-y-1">
                      {selectedProject.caseStudy.solutions.map(
                        (s: string, i: number) => (
                          <li key={i}>{s}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold border-l-4 border-cyan-400 pl-4">
                  Conclusion
                </h3>

                <p className="mt-4 text-gray-300 italic">
                  {selectedProject.caseStudy.conclusion}
                </p>
              </section>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-12 px-10 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/10 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

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
      image: "data:image/jpeg;base64,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",
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
      image: "https://mp3tourl.com/images/1781274075133-14134ce3-2ca8-4546-9c2c-7d6fda1a1e8c.jpg",
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
    {
      title: "Adventure Tourism",
      subtitle: "Responsive Travel Website with Modern UI",
      description: "Adventure Tourism is a modern and responsive travel website designed to help users explore adventure destinations and activities through an engaging and user-friendly interface.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "data:image/jpeg;base64,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",
    caseStudy: {
       projectDescription:"Adventure Tourism is a modern and responsive travel website designed to help users explore adventure destinations and activities through an engaging and user-friendly interface. The project focuses on responsive design, interactive layouts, smooth navigation, and creating an attractive travel experience using modern web development technologies.",
       objectives: ["Provide an engaging tourism platform","Create a responsive and modern travel website","Improve user experience with attractive UI design",],
       features: ["Responsive website design","Interactive travel destination sections","Smooth navigation experience","Modern and attractive UI layout","Mobile-friendly interface",],
       technologies: ["HTML","CSS","JavaScript",],
       workingProcess: ["Designed the website structure and layout.", "Developed responsive frontend components.","Implemented interactive UI sections and animations.","Optimized the website for mobile and desktop devices.",],
       applications: ["Travel and tourism platforms", "Adventure destination showcase", "Tourism information websites",],
       challenges: ["Maintaining responsive layouts across devices","Creating smooth and attractive UI sections","Optimizing website performance",],
       solutions: ["Used responsive web design techniques","Implemented optimized frontend layouts","Improved UI structure for better user experience",],
       conclusion:"The Adventure Tourism project provided practical experience in frontend development, responsive web design, and UI enhancement while building a modern and user-friendly travel platform.",},
    }
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

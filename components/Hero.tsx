"use client";

import NetworkBackground from "./NetworkBackground";

export default function HomeLayout() {
  return (
    <div className="relative min-h-screen text-white">
      <NetworkBackground />

      {/* HERO SECTION - Navbar removed */}
      <div className="relative h-screen flex flex-col justify-center items-center text-center px-10">
        <div className="relative z-20 max-w-4xl">
          {/* Main Title */}
          <h1 className="text-8xl font-black gradient-text tracking-tight uppercase">
            PIRABANCHAN N
          </h1>

          {/* Qualification Details */}
          <p className="text-3xl mt-6 text-purple-300 font-medium max-w-3xl mx-auto">
           Full Stack Developer | Web Development
          </p>

          {/* About Section */}
          <div className="max-w-8xl mx-auto glass px-14 py-10 rounded-[2rem] border border-white/10 text-gray-200 text-xl leading-relaxed font-normal shadow-2xl duration-400 mt-10 justify-center text-justify">
           I am a developer who loves building things that actually work and look great. For me, 
          coding isn't just about lines of logic, it's about creating smooth, user-friendly experiences
          from scratch. Whether it's designing a clean frontend or handling complex backend data, I enjoy the challenge of turning a simple idea into a fully functional digital reality. My goal is to keep learning, keep building, and always deliver quality work that makes a difference.
          </div>

          {/* Download Button moved here since Navbar is removed */}
          
        </div>
      </div>
    </div>
  );
}
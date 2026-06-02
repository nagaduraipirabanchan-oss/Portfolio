export default function Internship() {
  return (
    <section id="internship" className="py-20 px-10">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold gradient-text mb-10 text-center">
        Internship Experience
      </h2>
      
      {/* Internship Card (Width and Inner Padding Increased) */}
      <div className="max-w-8xl mx-auto glass px-14 py-10 rounded-3xl border border-white/14 hover:border-cyan-500/50 transition-all duration-400">
        
        {/* Card Header: Title and Badge Area */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 mb-6">
          <div>
            <h3 className="text-3xl font-bold text-white tracking-wide">
              Web Development Intern
            </h3>
            <p className="text-cyan-400 text-lg font-semibold mt-1">
              XPAND COMPANY, <span className="text-gray-400 font-normal">Periyancikenpalayam</span>
            </p>
          </div>
          
          {/* Broad Duration Badge */}
          <span className="bg-cyan-500/10 text-cyan-400 px-6 py-2 rounded-full text-xs font-bold border border-cyan-500/20 uppercase tracking-wider whitespace-nowrap self-start md:self-auto">
            Three Months
          </span>
        </div>
        
        {/* Description Text */}
        <p className="text-14-gray-300 leading-relaxed text-base text-justify">
          Built responsive and user-friendly websites with modern and attractive design layouts. Worked on creating interactive web pages, improving mobile responsiveness, and developing clean frontend interfaces using HTML, CSS, JavaScript, and modern web technologies. Participated in web application development projects and gained practical experience in frontend design, website optimization, and UI enhancement.<br/><br/>

Focused on creating smooth user experiences with clean code structure, reusable components, and performance optimization techniques. Interested in developing scalable and visually appealing applications while continuously learning new technologies and improving problem-solving and development skills through real-time projects and hands-on practice.
        </p>
      </div>
    </section>
  );
}
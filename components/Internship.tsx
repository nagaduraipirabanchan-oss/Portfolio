export default function Internship() {
  return (
    <section id="internship" className="py-20 px-10">
      <h2 className="text-4xl font-bold gradient-text mb-10 text-center">Internship Experience</h2>
      
      {/* Internship Card */}
      <div className="max-w-4xl mx-auto glass p-8 rounded-[2rem] border border-white/10 hover:border-cyan-500/50 transition-all">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Frontend Developer Intern</h3>
            <p className="text-cyan-400 text-lg font-semibold">PT Intelligent Machines, Saravanampatti</p>
          </div>
          <span className="bg-cyan-500/10 text-cyan-400 px-4 py-1 rounded-full text-sm font-bold border border-cyan-500/20">
            One Month
          </span>
        </div>
        
        <p className="text-gray-300 leading-relaxed">
          Developed responsive web pages using HTML, CSS, Bootstrap, and JavaScript with interactive features and form validation. 
          Worked closely with the team to build clean and user-friendly frontend interfaces, ensuring all tasks were completed on time.
        </p>
      </div>
    </section>
  );
}
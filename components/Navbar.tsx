export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-5 flex justify-between items-center glass">
      <h1 className="text-2xl font-bold gradient-text">PIRABANCHAN N</h1>
      <div className="flex items-center gap-10">
        <div className="flex gap-8 text-sm font-medium uppercase tracking-wide">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#tools" className="hover:text-cyan-400 transition">Tools</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#internship" className="hover:text-cyan-400 transition">Internship</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
        <a 
          href="/resume.pdf" 
          download="Pirabanchan_Resume.pdf"
          className="px-5 py-2.5 bg-white text-black font-extrabold text-xs rounded-full hover:bg-cyan-400 transition-all shadow-lg"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </nav>
  );
}
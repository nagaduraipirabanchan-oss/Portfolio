export default function About() {
  return (
    <section id="about" className="py-32 px-10">

      <h1 className="text-5xl font-bold mb-16">
        Professional Summary
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="glass p-10 rounded-3xl">
          

          <h2 className="text-3xl mt-5">
            About Me
          </h2>

          <p className="mt-4 text-gray-300">
            I am an MCA student and an aspiring Full-Stack Developer with a deep interest in AI and Software Engineering. I bridge the gap between complex backend logic and intuitive frontend experiences. My goal is to build scalable, production-ready applications that solve real-world problems through clean code and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="glass p-8 rounded-2xl">
            <h1 className="text-4xl gradient-text">
              2+
            </h1>
            <p>Projects</p>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h1 className="text-4xl gradient-text">
              3+
            </h1>
            <p>Certification</p>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <h1 className="text-4xl gradient-text">
              BCOM (CA) | MCA
            </h1>
            <p>Graduate</p>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h1 className="text-4xl gradient-text">
              Full Stack / Web Development
            </h1>
            <p>Software Engineer</p>
          </div>

        </div>

      </div>
    </section>
  );
}
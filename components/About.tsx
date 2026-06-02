export default function About() {
  return (
    <section id="about" className="py-32 px-10">

      <h1 className="text-6xl font-bold mb-16">
        Professional Summary
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="glass p-10 rounded-3xl">
          

          <h2 className="text-3xl mt-5">
            About Me
          </h2>

          <p className="mt-4 text-14-gray-300">
           Passionate and self-motivated MCA graduate with strong knowledge in Full Stack Development and Web Development. Skilled in building responsive, modern, and user-friendly web applications using current web technologies. Interested in creating clean UI designs, developing scalable applications, and improving user experience through efficient coding practices.<br/><br/>

Possess a strong interest in frontend and backend development along with continuous learning in modern technologies and industry trends. Eager to enhance technical skills, solve real-world problems, and gain practical industry experience by working in a professional and growth-oriented environment. A quick learner with good communication, teamwork, and problem-solving abilities, looking for an opportunity to contribute to innovative projects and grow as a software developer.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="glass p-8 rounded-2xl">
            <h1 className="text-4xl gradient-text">
              3+
            </h1>
            <p>Projects</p>
          </div>

          <div className="glass p-8 rounded-2xl">
            <h1 className="text-4xl gradient-text">
              5+
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
              Full Stack | Web Development
            </h1>
           
          </div>

        </div>

      </div>
    </section>
  );
}
import { 
  FaReact, 
  FaHtml5, 
  FaCss3,  
  FaNodeJs 
} from "react-icons/fa";

import { 
  SiExpress, 
  SiMongodb, 
  SiJavascript,
  SiBootstrap,
  SiGithub 
} from "react-icons/si";

export default function Tools() {

  const tools = [
    {
      name: "HTML",
      icon: <FaHtml5 size={50} />
    },
    {
      name: "CSS",
      icon: <FaCss3 size={50} />
    },
    {
      name: "BOOTSTRAP",
      icon: <SiBootstrap size={50} />
    },
    {
      name: "JAVA SCRIPT",
      icon: <SiJavascript size={50} />
    },
    {
      name: "REACT",
      icon: <FaReact size={50} />
    },
    {
      name: "NODE JS",
      icon: <FaNodeJs size={50} />
    },
    {
      name: "EXPRESS JS",
      icon: <SiExpress size={50} />
    },
    {
      name: "MONGO DB",
      icon: <SiMongodb size={50} />
    },
    
    
    {
      name: "GITHUB",
      icon: <SiGithub size={50} />
    },
  ];

  return (
    <section id="tools" className="py-32 px-10">
      <h1 className="text-5xl font-bold mb-16">
        Tools & Technologies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="glass p-10 rounded-3xl flex flex-col items-center justify-center hover:scale-105 duration-300 border border-white/10"
          >
            <div className="text-blue-400"> {/* Icons-ku light color contrast nalla irukum */}
              {tool.icon}
            </div>

            <h2 className="mt-5 text-xl font-semibold text-center">
              {tool.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
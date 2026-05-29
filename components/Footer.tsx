import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-800 px-10 flex justify-between items-center">

      <p className="text-gray-400">
        © 2026 PIRABANCHAN N.
      </p>

      <div className="flex gap-6 text-2xl">
        {/* GitHub Link */}
        <a 
          href="https://github.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaGithub />
        </a>

        {/* LinkedIn Link */}
        <a 
          href="https://www.linkedin.com/in/pirabancha-n-00039a351" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>

    </footer>
  );
}
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Tools from "../components/Tools";
import Projects from "@/components/Projects";
import Internship from "@/components/Internship";
import Certifications from "@/components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Certificate } from "crypto";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Tools />
      <Projects />
      <Internship />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
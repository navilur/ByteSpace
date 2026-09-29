import About from "../components/home/About";
import Creator from "../components/home/Creator";
import Hero from "../components/home/Hero";
import LearningPaths from "../components/home/LearningPaths";
import Partner from "../components/home/Partner";
import Skills from "../components/home/Skills";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partner />
      <Skills />
      <LearningPaths />
      <About />
      <Creator />
      <Testimonials />
    </div>
  );
}

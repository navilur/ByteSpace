import About from "../components/home/About";
import Hero from "../components/home/Hero";
import LearningPaths from "../components/home/LearningPaths";
import Partner from "../components/home/Partner";
import Skills from "../components/home/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partner />
      <Skills />
      <LearningPaths />
      <About />
    </div>
  );
}

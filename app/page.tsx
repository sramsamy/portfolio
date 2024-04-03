import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import '../public/css/styles.css';
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col px-4 items-center mt-12">
      <Intro />
      <About />
      <Projects />
      <Skills />
    </main>
  )
}


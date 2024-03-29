import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
// import '../public/css/styles.css';

export default function Home() {
  return (
    <main className="flex flex-col px-4 items-center mt-12">
      <Intro />
      <About />
    </main>
  )
}

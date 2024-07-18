import Intro from "./components/organisms/Intro";
import Experiences from "./components/organisms/Experiences";
import Contact from "./components/organisms/Contact";
import Projects from "./components/organisms/Projects";

export default function Home() {
  return (
    <main style={{ margin: '0 auto' }}>
      <Intro />
      <Projects />
      <Experiences />
      <Contact />
    </main>
  );
}

import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
function App() {
  let styles = { color: "red" };
  return (
    <>
      <section className="mainsection" id="mainsection">
        <Nav />
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </section>
    </>
  );
}

export default App;

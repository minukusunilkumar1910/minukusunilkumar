import { useEffect, useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace with actual check if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2s loading effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="mainsection" id="mainsection">
          <Nav />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </section>
      )}
    </>
  );
}

export default App;

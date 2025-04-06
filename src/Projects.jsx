import "./Projects.css";
import proj1 from "./assets/wonderlust.jpg";
import proj2 from "./assets/20623.jpg";
function Projects() {
  let details = {
    project1: {
      heading: `"WONDERLUST" A Business Travel Magazine`,
      categories: ["REACT", "Express", "Tailwind", "MongoDB"],
    },
    project2: {
      heading: `"WEATHER" in Different States using its API's`,
      categories: ["REACT", "MaterialUI", "vite", "API's"],
    },
  };

  function Card({ details, img, project }) {
    return (
      <div className="cardpro">
        <div className="main-content">
          <div className="header">
            <img src={img} className="projectsimg" alt="" />
          </div>
          <p className="heading">{details}</p>
          <div className="categories">
            <span>{project[0]}</span>
            <span>{project[1]}</span>
            <span>{project[2]}</span>
            <span>{project[3]}</span>
          </div>
        </div>
        <div className="footername">@minuku_sunilkumar</div>
      </div>
    );
  }

  return (
    <section id="projectsection">
      <h1 className="pop">Projects</h1>

      <div className="projectspage">
        <Card
          details={details.project1.heading}
          img={proj1}
          project={details.project1.categories}
        />
        <Card
          details={details.project2.heading}
          img={proj2}
          project={details.project2.categories}
        />
        
      </div>
    </section>
  );
}

export default Projects;

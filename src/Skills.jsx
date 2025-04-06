import "./Skills.css";
import "./Style.css";
import frontend from "./icons/science.png";
import backend from "./icons/coding.png";
import tools from "./icons/settings.png";

function Skills() {
  let details = 
  {
    card1: {
      heading: "Frontend",
      lists: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "APIs",
        "Bootstrap",
        "MaterialUI",
        "TailwindCSS",
      ],
    },
    card2:
     {
      heading: "Backend",
      lists: [
        "Express",
        "NodeJS",
        "JAVA",
        "MongoDB",
        "MySQL",
        "CRUD Ops",
        "Mongoose",
        "TailwindCSS",
      ],
    },
    card3: 
    {
      heading: "Tools",
      lists: [
        "GitHub",
        "VSCode",
        "Cursor",
        "Commandl",
        "Postman",
        "IntelliJ",
        "Hoppscotch",
        "Webpack",
      ],
    },
  };
  function SkillCard({ details, img, list }) {
    return (
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <img className="frontend" src={img} alt="img" />
          </div>
          <div className="content">
            <p className="heading">{details}</p>

            <ul>
              <li>{list[0]}</li>
              <li>{list[1]}</li>
              <li>{list[2]}</li>
              <li>{list[3]}</li>
              <li>{list[4]}</li>
              <li>{list[5]}</li>
              <li>{list[6]}</li>
              <li>{list[7]}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="skillsection">
      <div className="skillpage">
        {/* <div className="skill "> */}
        <h1 className="pop">Skills</h1>
        {/* <div className="loader"></div> */}
        {/* </div> */}
        <h4>A showcase of my expertise and capabilities</h4>
        <div className="skillcards">
          <SkillCard
            details={details.card1.heading}
            img={frontend}
            list={details.card1.lists}
          />
          <SkillCard
            details={details.card2.heading}
            img={backend}
            list={details.card2.lists}
          />
          <SkillCard
            details={details.card3.heading}
            img={tools}
            list={details.card3.lists}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;

import "./About.css";
import sky from "./assets/s3.jpg";
function About() {
  
  let myname = "Sunilkumar Minuku"
  
  let aboutimg = {
    width: "25rem",
    height: "29rem",
    marginTop: "6rem",
    borderRadius: "2rem",
  };
  let styles = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <section id="Aboutsection">
      <div className="about">
        <div className="aboutimg" style={aboutimg}>
          <img className="myimg" src={sky} style={styles} alt="" />
        </div>
        <div className="aboutcontent">
          <h1 className="pop">About Me:</h1>
          <p>
          Hello! I'm {<span>{myname}</span>} , a passionate FullStack Developer,Devops Engg from the Sri Venkateswara College of Engineering of Tirupati.I specialize in creating dynamic, high-performance web and mobile applications that enhance user experience and drive business success.
          </p>
          <br />
          <p>
            With robust experience at prestigious organizations and
            transformative projects at Opensource Contributions, I have honed my
            skills across diverse programming languages and technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;

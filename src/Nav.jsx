import sky from "./assets/menu.png";
import { useState } from "react";
import "./Nav.css";
function Nav() {
  let [isClose, setClose] = useState(false);
  let ham = { display: isClose ? "" : "none" };

  let toggle = () => {
    setClose(!isClose);

  };

  return (
    <nav>
      <div className="navbar">
        <div className="name">
          <a href="#mainsection">
            <h1 className="Btn">
              SUNILKUMAR MINUKU
            </h1>
          </a>
        </div>

        {/* <!-- desktop --> */}
        <div className="sociallinks">
          <ul>
            <li>
              <a href="#Aboutsection">About Me</a>              
            </li>
            <li>
              <a href="#skillsection">Skills</a>
            </li>
            <li>
              <a href="#projectsection">Projects</a>
            </li>
            <li>
              <a href="#contactsection">Contact Me</a>
            </li>
          </ul>
        </div>

        {/* <!-- desktop --> */}
        {/* <!--mobile --> */}
        <div >
          <div className="closedbar" onClick={toggle}>
            <img src={sky} className="ham" alt="ham" />
          </div>
       
        </div>

        {/* <!--mobile --> */}
      </div>
      <div className="sidebar" style={ham}>
        <div className="custom-radio-group">
          <a href="#Aboutsection" className="custom-radio-container" onClick={toggle}>
            About
          </a>
          <a href="#projectsection" onClick={toggle}className="custom-radio-container">
            Projects
          </a>
          <a href="#skillsection"  onClick={toggle}className="custom-radio-container">
            Skills
          </a>
          <a href="#contactsection"  onClick={toggle}className="custom-radio-container">
            Contact Me
          </a>
        </div>
      </div>
      {/* <!--sidebar  --> */}

    </nav>
  );
}

export default Nav;
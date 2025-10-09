import "./Hero.css";
import "./Style.css";

function Hero() {
  let span1="MERN Stackdev"
  let span2="Devops Engg"
  let span3="JAVA (DSA)"

  let scrolling = [
    " MINUKU SUNILKUMAR SVCE CSM MINUKU SUNILKUMAR SVCE CSM MINUKU SUNILKUMAR SVCE CSM MINUKU SUNILKUMAR SVCE CSM MINUKU SUNILKUMAR SVCE CSM MINUKU SUNILKUMAR SVCE CSM ",
  ];
  return (
    <div className="mainpage ">

      <div className="details">

      <div className="myname hii" data-text="Awesome">
    <span className="actual-text">&nbsp;Hi There , I'm Sunilkumar&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Hi There , I'm Sunilkumar&nbsp;</span>
    </div>

    
        <h1 className="mynameshow pop">Hi There , I'm Sunilkumar</h1>

        {/* <!-- text move --> */}
        <div className="cont">
          <div className="wrapper">
            {/* <!-- <div className="static-txt">I'm a</div> --> */}
            <ul className="dynamic-txts">
              <li>
                <span>{span1}</span>
              </li>
              <li>
                <span>{span2}</span>
              </li> 
              <li>
                <span>{span3}</span>
              </li>
            </ul>
          </div>
        </div>
        <a className="fancy" href="#Aboutsection">
          <span className="top-key"></span>
          <span className="textabout">Learn More about me</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>

      <div className="Myimage">
        <div className="left">
          <h1 className="scroll">{scrolling}</h1>
        </div>
        <div className="right">
          <h1 className="scroll">
            {scrolling}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;

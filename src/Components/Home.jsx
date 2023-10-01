const resumeLink =
  "https://docs.google.com/document/d/18hhwmayxRnl5XQaWqrdcxdyA8_e69vkly2G1f3He8b8/edit?usp=sharing";

const myImg = require("./Assets/homeimg.jpg");
function Home() {
  return (
    <>
      <div className="container">
        <div className="homecontainer">
          <div className="homeleft">
            <div className="homehead">
              <div className="hi">
                Hi, I'm <br />
              </div>
              <div className="text">
                {/* Web <br /> Designer <br /> */}
                Full-Stack <br /> web developer <br />
              </div>
              <br />
              <b>Frontend : </b> Nextjs, Reactjs, Reduxjs, MaterialUI,
              TailwindCSS.
              <br />
              <br />
              <b>Backend : </b>Golang, Docker, Nodejs, Typescript, SQL,
              Postgres, GoFiber, GORM.
              <div className="downloaddiv" download>
                <a href={resumeLink} className="downloadanchor">
                  <p className="downloadtxt">Download Resume</p>
                </a>
              </div>
            </div>
          </div>
          <div className="homeright">
            <img src={myImg} alt="homeimg" className="homeimg" />

            <div className="homesocial">
              <a
                href="https://www.linkedin.com/in/shivamgourin/"
                className="sociallinks"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/SHIVAM-GOUR"
                className="sociallinks"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com/hi_shivamgour"
                className="sociallinks"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/hi.shivamgour/"
                className="sociallinks"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

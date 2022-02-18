const resumeimg = require("./Assets/resume-shivam-gour.jpg");
const resumepdf = require("./Assets/Resume-shivam-gour.pdf");

function Resume() {
  return (
    <div className="container">
      <div className="resumediv">
      <img src={resumeimg} alt="resume" className="resumeimg" />
      </div>
      <div className="downloaddiv" download>
        <a href={resumepdf} className="downloadanchor">
          <p className="downloadtxt">Download Resume</p>
        </a>
      </div>

    </div>
  )
}

export default Resume
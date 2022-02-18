import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="leftnav">
          <div className="logodiv">
            <Link to="/home" className="logolink">
              <h2 className="logo">ShivamGour.</h2>
            </Link>
          </div>
        </div>

        <div className="rightnav">
          <input type="checkbox" id="active" />
          <label htmlFor="active" class="menu-btn">
            <span></span>
          </label>
          <label htmlFor="active" className="close"></label>
          <div className="wrapper">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
              {/* <li>
                <a href="/skills">Skills</a>
              </li> */}
              {/* <li>
                <a href="/works">Works</a>
              </li> */}
            </ul>
          </div>

          {/* <Link className="navlinks" to="/home">
            Home
          </Link>
          <Link className="navlinks" to="/about">
            About
          </Link>
          <Link className='navlinks' to='/skills'>Skills</Link>
          <Link className="navlinks" to="/work">
            Work
          </Link>
          <Link className='navlinks' to='/resume'>Resume</Link> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

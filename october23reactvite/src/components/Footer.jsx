import { Link } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Excel in your chosen field</h1>
          <p>Every day is a chance to Learn</p>
        </div>

        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Front End basic tools</h4>
          <Link to="/javascript">JavaScript</Link>
          <Link to="/html">HTML</Link>
          <Link to="/css">CSS</Link>
          <Link to="/cheatsheet">Cheat Sheet</Link>
        </div>

        <div>
          <h4>Other`s</h4>
          <Link to="/bootstrap">Bootstrap</Link>
          <Link to="/reactjs">ReactJS</Link>
          <Link to="/fontAwesome">Font Awesome</Link>
          <Link to="/sass">Sass</Link>
        </div>

        <div>
          <h4>PC hardware</h4>
          <Link to="/pcAssembly">PC Assembly</Link>
          <Link to="/pcTroubleShoot">PC Trouble shooting</Link>
          <Link to="/contact">Contact us</Link>
        </div>

        <div>
          <h4>Legalities</h4>
          <Link to="/termsofservice">Terms of Service</Link>
          <Link to="/privacyPolicy">Privacy Policy</Link>
          <Link to="/license">License</Link>
          <a href="/">Creator</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

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
          <h4>Front-End Framework</h4>
          <Link to="/bootstrap">Bootstrap</Link>
          <Link to="/reactjs">ReactJS</Link>
          <a href="/">Font Awesome</a>
          <a href="/">The Icons</a>
        </div>

        <div>
          <h4>PC hardware</h4>
          <a href="/">Support</a>
          <a href="/">Trouble shooting</a>
          <a href="/">Contact us</a>
          <a href="/">Joey boy 🤣 </a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
          <a href="/">Creator</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Roam</h1>
          <p>Choose your favourite destination</p>
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
          <h4>Front End Tools</h4>
          <Link to="/javascript">JavaScript</Link>
          <Link to="/html">HTML</Link>
          <a href="/">CSS</a>
          <a href="/">Cheat Sheet</a>
        </div>

        <div>
          <h4>Project</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>

        <div>
          <h4>Project</h4>
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

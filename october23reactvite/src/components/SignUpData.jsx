import { useState } from "react";
import "../components/SignUpStyles.css";

function SignUpData() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="container">
      <div className="backgroundImage">
        <div className="content">
          <div className="container-left"></div>
          <div className="container-right">
            <form action="">
              <input type="text" placeholder="name :" />
              <input type="text" placeholder="Surname:" />
              <input type="text" placeholder="Create password :" />
              <input type="text" placeholder="confirm password :" />
              <br />
              <input type="checkbox" id="accept" />
              <label htmlFor="" id="labelOne">
                I accept all terms and conditions
              </label>
              <button className="btn">Register Now</button>
              <br />
              <label htmlFor="" className="labelTwo">
                Already have an account?
                <a href="" id="toggle" onClick={() => setToggle(!toggle)}>
                  Login now.
                  <span className="toolTip">Click to Login</span>
                </a>
              </label>
            </form>
          </div>
        </div>
      </div>
      {/*-----------------------modal--------------------*/}

      {toggle && (
        <div className="popup" id="popup-1">
          <div className="overlay"></div>
          <div className="content">
            <div className="close-btn" onClick={() => setToggle(!toggle)}>
              &times;
            </div>
            <h4 style={{ color: "blue", fontSize: "20px" }}>Please Login</h4>
            <form action="">
              <input
                type="text"
                id="inputOne"
                placeholder="Email or phone number:"
              />
              <br />
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "blue",
                }}
              >
                Forgot password
              </a>
              <hr />
              <button className="btn btnCreate">Create New Account</button>
            </form>
          </div>
        </div>
      )}
      {/*-------------reserve for container two--------------- */}
    </div>
  );
}

export default SignUpData;

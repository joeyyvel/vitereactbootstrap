import React from "react";
import "../footerPages/Reactjs.css";
const Reactjs = () => {
  return (
    <>
      <div className="container">
        <div
          className="head p-3 text-center"
          style={{ backgroundColor: "#008080" }}
        >
          <h1>Getting started with React</h1>
        </div>
        <div>
          <p>
            In this article we will say hello to React. We`ll discover a little
            bit of detail about its background and use cases, set up a basic
            React toolchain on our local computer, and create and play with a
            simple starter app — learning a bit about how React works in the
            process.{" "}
          </p>
        </div>
        <div className="main-container">
          <div className="container-one">
            <div>
              <h6>Prerequisites:</h6>
            </div>
            <div>
              <p>
                Familiarity with the core HTML, CSS, and JavaScript languages,
                knowledge of the terminal/command line.
              </p>
              <p>
                React uses an HTML-in-JavaScript syntax called JSX (JavaScript
                and XML). Familiarity with both HTML and JavaScript will help
                you to learn JSX, and better identify whether bugs in your
                application are related to JavaScript or to the more specific
                domain of React.
              </p>
            </div>
          </div>
          <br />
          <div className="container-two">
            <div>
              <h6>objective:</h6>
            </div>
            <div>
              <p>
                To set up a local React development environment, create a start
                app, and understand the basics of how it works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reactjs;

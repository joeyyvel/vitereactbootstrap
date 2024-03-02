import React from "react";
import "../footerPages/Javascript.css";

const Javascript = () => {
  return (
    <>
      <div className="container p5">
        <div>
          {" "}
          <h1>40 popular JavaScript Methods You Must Know</h1>{" "}
        </div>

        <div>
          <p>
            JavaScript is a programming language used to create web pages and
            mobile apps. If you have been studying Javascript for so long and
            still it looks scary to you, probably you haven`t learnt these
            methods yet. This article is for all javascript developers at any
            level. If you are looking for a specific method, feel free to jump
            and skip others. If you are familiar with javascript, I recommend
            you to read ES6 The modern Javascript to explore more about JS.
          </p>
          <div>
            <p id="paraOne">
              1. <span style={{ fontWeight: "bold" }}>Array</span>{" "}
            </p>
            <p id="paraOne">
              2. <span style={{ fontWeight: "bold" }}>String</span>{" "}
            </p>
            <p id="paraOne">
              3. <span style={{ fontWeight: "bold" }}>Objects</span>{" "}
            </p>
            <p id="paraOne">
              4. <span style={{ fontWeight: "bold" }}>Numbers</span>{" "}
            </p>
            <p id="paraOne">
              5. <span style={{ fontWeight: "bold" }}>Numbers</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Javascript;

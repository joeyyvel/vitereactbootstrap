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
          <div>
            <h6 className="explore text-success">
              If you are already familiar with the definition of the above
              topics, feel free to explore their methods only.
            </h6>
          </div>
          <div>
            <h1>Array</h1>
            <p>
              You may know that a variable can store only a value at a time, for
              example var student = "jack", this is totally fine and we may use
              it many times while building a project, however, sometimes it is
              required to collect many values in a single variable like a list
              of students names, this is where we can use the Array concept.
              Array is a single variable that store a list of values and each
              element is specified by a single index.
            </p>
            <p>Array methods</p>
            <p style={{ fontSize: "22px", fontWeight: "bolder" }}>. pop()</p>
            <p>The pop() method removes the last element of an array.</p>
          </div>
          <div className="pop bg-dark text-warning p-3 rounded-4">
            <p> var students = [ 'Jack', 'James', 'Robert', 'John']</p>
            <p> console.log(students);</p>
            <p> students.pop();</p>
            <p> console.log(students)</p>
          </div>
          <div className="popAns bg-dark text-warning p-3 rounded-4 mt-3">
            <p>Output:</p>
            <p>['Jack', 'James', 'Robert', 'John']</p>
            <p>['Jack', 'James', 'Robert']</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Javascript;

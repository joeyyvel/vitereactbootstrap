import React from "react";
import "./GoingBackPage.css";
import { Link } from "react-router-dom";
const GoingBackPage = () => {
  return (
    <>
      <div>
        <button className="fixedBtn">
          <Link to="/">Back to home page</Link>{" "}
        </button>
      </div>
    </>
  );
};

export default GoingBackPage;

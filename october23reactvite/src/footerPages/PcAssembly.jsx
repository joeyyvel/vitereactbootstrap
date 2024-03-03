import React from "react";
import pcPicture from "../images/computer.jpg.webp";

const PcAssembly = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>PC Assembly</h1>
          <h5>Turn your components into a rig you can be proud of.</h5>
        </div>
        <div>
          <img src={pcPicture} alt="PC picture" />
        </div>
      </div>
    </>
  );
};

export default PcAssembly;

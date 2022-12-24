import React from "react";
import ProjectSlider from "../components/ProjectSlider";
import "../style/style.css";

const Work = () => {
  return (
    <div
      style={{ minWidth: "650px", height: "400px" }}
      className="common-bg flex flex-col justify-center items-center "
    >
      <h2 className="">Project</h2>
      <div style={{ width: "600px" }} className="w-full p-4">
        <ProjectSlider></ProjectSlider>
      </div>
    </div>
  );
};

export default Work;

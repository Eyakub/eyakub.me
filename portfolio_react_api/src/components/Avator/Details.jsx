import React from "react";
import Preference from "../section/Preference";
import Experience from "../section/Experience";
import Education from "../section/Education";
import Project from "../section/Project";

const DetailSection = () => {
  return (
    <div>
      <Preference />
      <Experience />
      <Education />
      <Project />
    </div>
  );
};

export default DetailSection;

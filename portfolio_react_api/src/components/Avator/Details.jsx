import React from "react";
import Preference from "../section/Preference";
import Experience from "../section/Experience";
import Education from "../section/Education";
import Project from "../section/Project";

const DetailSection = ({
  hobbies,
  currently_working,
  besides,
  experiences,
  educations,
  projects,
}) => {
  return (
    <div>
      <Preference
        hobbies={hobbies}
        currently_working={currently_working}
        besides={besides}
      />
      <Experience experiences={experiences} />
      <Education educations={educations} />
      <Project projects={projects} />
    </div>
  );
};

export default DetailSection;

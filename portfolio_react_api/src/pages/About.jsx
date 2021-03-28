import React from "react";
import ProfileSection from "../components/Avator/Profile";
import DetailSection from "../components/Avator/Details";

const About = ({ info }) => {
  const currently_working = info.skills.filter(
    (current_skil) => current_skil.is_working
  );
  const besides = info.skills.filter((beside) => beside.is_besides);

  return (
    <div className="lg:grid lg:grid-cols-12 lg:mx-48 md:flex md:flex-wrap sm:flex sm:flex-wrap">
      <div className="lg:col-span-4 md:mb-12 sm:mb-10 mb_mobile">
        <ProfileSection />
      </div>
      <div className="lg:col-span-8">
        <DetailSection
          hobbies={info.hobbies}
          currently_working={currently_working}
          besides={besides}
          experiences={info.user_experiences}
          educations={info.educations}
          projects={info.projects}
        />
      </div>
    </div>
  );
};

export default About;

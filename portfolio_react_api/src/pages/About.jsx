import React from "react";
import ProfileSection from "../components/Avator/Profile";
import DetailSection from "../components/Avator/Details";

const About = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:mx-48 md:flex md:flex-wrap sm:flex sm:flex-wrap">
      <div className="lg:col-span-4 md:mb-12 sm:mb-10">
        <ProfileSection />
      </div>
      <div className="lg:col-span-8">
        <DetailSection />
      </div>
    </div>
  );
};

export default About;

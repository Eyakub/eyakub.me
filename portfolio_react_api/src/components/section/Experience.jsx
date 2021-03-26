import React from "react";
import Tag from "../tags/TagBoard";

const Experience = ({ experiences }) => {
  return (
    <section className="mb-12">
      <h1 className="font-bold font-sans text-2xl uppercase text-blue-500">
        Experience
      </h1>
      {experiences.map((experience) => (
        <article className="mb-5">
          <header>
            <h1 className="font-bold text-1xl mb-0 mt-1">
              {experience.designation}
            </h1>
            <span className="inline-block text-xs mr-2">
              <a
                className="no-underline text-blue-400 hover:underline hover:text-green-800"
                href={`${experience.organization_url}`}
              >
                {experience.organization_name}
              </a>
            </span>
            <span className="company_address text-xs text-gray-400">
              <address className="inline">{experience.address} - </address>
              <time>
                {experience.started_time} to {experience.end_time}
              </time>
            </span>
            <p className="text-xs">{experience.short_description}</p>
            <Tag />
          </header>
        </article>
      ))}
    </section>
  );
};

export default Experience;

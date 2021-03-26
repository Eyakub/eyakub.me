import React from "react";
import Tag from "../tags/TagBoard";

const Education = ({ educations }) => {
  return (
    <section className="mb-12">
      <h1 className="font-bold font-sans text-2xl uppercase text-blue-500">
        Eucation
      </h1>
      {educations.map((education) => (
        <article className="mb-5">
          <header>
            <h1 className="font-bold text-1xl mb-0 mt-1">
              {education.course_name}
            </h1>
            <span className="inline-block text-xs mr-2">
              <a
                className="no-underline text-blue-400 hover:underline hover:text-green-800"
                href={`${education.institution_url}`}
              >
                {education.institution_name}
              </a>
            </span>
            <span className="company_address text-xs text-gray-400">
              <address className="inline">{education.address} - </address>
              <time>
                {education.started_time} to {education.end_time}
              </time>
            </span>
            {/* <p className="text-xs">{education.institution_info}</p> */}
          </header>
        </article>
      ))}
    </section>
  );
};

export default Education;

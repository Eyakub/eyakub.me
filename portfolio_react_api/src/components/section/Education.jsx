import React from "react";

const Education = ({ educations }) => {
  const getDate = (date) => {
    return date.split(" ")[0];
  };
  return (
    <section className="mb-12">
      <h1 className="font-bold font-section-title text-2xl uppercase text-blue-500">
        Eucation
      </h1>
      {educations.map((education, index) => (
        <article className="mb-5" key={index}>
          <header>
            <h1 className="font-bold text-1xl mb-0 mt-1">
              {education.course_name}
            </h1>
            <span className="inline-block text-xs mr-2 font-section-paragraph">
              <a
                className="no-underline text-blue-400 hover:underline hover:text-green-800"
                href={`${education.institution_url}`}
              >
                {education.institution_name}
              </a>
            </span>
            <span className="company_address text-xs text-gray-400 font-section-paragraph">
              <address className="inline">{education.address} - </address>
              <time>
                ({getDate(education.started_time)} to{" "}
                {getDate(education.end_time)})
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

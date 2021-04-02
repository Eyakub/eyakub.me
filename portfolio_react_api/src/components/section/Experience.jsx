import React from "react";
import Tag from "../tags/TagBoard";

const Experience = ({ experiences }) => {
  const getDate = (date) => {
    return date ? date.split(" ")[0] : "";
  };
  return (
    <section className="mb-12">
      <h1 className="font-bold font-section-title text-2xl uppercase text-blue-500">
        Experience
      </h1>
      {experiences.map((experience, index) => (
        <article className="mb-5" key={index}>
          <header>
            <h1 className="font-bold font-sans text-1xl mb-0 mt-1">
              {experience.designation}
            </h1>
            <span className="inline-block text-xs mr-2 font-section-paragraph">
              <a
                className="no-underline text-blue-400 hover:underline hover:text-green-800"
                href={`${experience.organization_url}`}
              >
                {experience.organization_name}
              </a>
            </span>
            <span className="company_address text-xs text-gray-400 font-section-paragraph">
              <address className="inline">{experience.address} - </address>
              <time>
                ({getDate(experience.started_time)} to{" "}
                {experience.current_job
                  ? "Present"
                  : getDate(experience.end_time)})
              </time>
            </span>
            <p className="text-xs font-section-paragraph">{experience.short_description}</p>
            {experience.working_stack.map((stk, s_index) => (
              <Tag
                key={s_index}
                name={stk.name}
                hover_bg_class="hover:bg-indigo-200"
                text_color="text-emerald-900"
                bg_color="bg-indigo-100"
              />
            ))}
          </header>
        </article>
      ))}
    </section>
  );
};

export default Experience;

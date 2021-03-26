import React from "react";
import Tag from "../tags/TagBoard";

const Project = ({ projects }) => {
  const stacks = projects.map((project) => {
    return project.backend + project.frontend;
  });
  // console.log(stacks);
  return (
    <section>
      <h1 className="font-bold font-sans text-2xl uppercase text-blue-500">
        Projects
      </h1>
      <div className="flex flex-wrap justify-between">
        {projects.map((project, p_index) => (
          <article className="mt-2 w-full xl:w-1/2 2xl:w-1/2" key={p_index}>
            <h1 className="font-bold text-1xl mb-0 mt-1">
              <a href={`${project.source_url}`}>{project.name}</a>
            </h1>
            <p className="text-xs">{project.short_description}</p>
            {stacks.map((stack, index) => (
              <Tag
                key={index}
                name={stack}
                hover_bg_class="hover:bg-indigo-200"
                text_color="text-emerald-900"
                bg_color="bg-indigo-100"
              />
            ))}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;

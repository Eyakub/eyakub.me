import React from "react";
import Tag from "../tags/TagBoard";

const Experience = () => {
  return (
    <section className="mb-12">
      <h1 className="font-bold font-sans text-2xl uppercase text-blue-500">
        Experience
      </h1>
      <article className="mb-5">
        <header>
          <h1 className="font-bold text-1xl mb-0 mt-1">Software Engineer</h1>
          <span className="inline-block text-xs mr-2">
            <a
              className="no-underline text-blue-400 hover:underline hover:text-green-800"
              href="https://aadi.com.bd"
            >
              Aadi BD Ltd
            </a>
          </span>
          <span className="company_address text-xs text-gray-400">
            <address className="inline">Niketan, Block-B, House-18 - </address>
            <time>Jun 14, 2020 to Present</time>
          </span>
          <p className="text-xs">
            Bangladesh’s first ever cross-border marketplace. Aadi focuses on
            promoting Bangladesh and its strength in various industries at a
            global level.
          </p>
          <Tag />
        </header>
      </article>
      <article className="mb-5">
        <header>
          <h1 className="font-bold text-1xl mb-0 mt-1">Software Engineer</h1>
          <span className="inline-block text-xs mr-2">
            <a
              className="no-underline text-blue-400 hover:underline hover:text-green-800"
              href="https://aadi.com.bd"
            >
              Aadi BD Ltd
            </a>
          </span>
          <span className="company_address text-xs text-gray-400">
            <address className="inline">Niketan, Block-B, House-18 - </address>
            <time>Jun 14, 2020 to Present</time>
          </span>
          <p className="text-xs">
            Bangladesh’s first ever cross-border marketplace. Aadi focuses on
            promoting Bangladesh and its strength in various industries at a
            global level.
          </p>
          <Tag />
        </header>
      </article>
    </section>
  );
};

export default Experience;

import React from "react";
import Tag from "../tags/TagBoard";

const Education = () => {
  return (
    <section className="mb-12">
      <h1 className="font-bold font-sans text-2xl uppercase text-blue-500">
        Eucation
      </h1>
      <article className="mb-5">
        <header>
          <h1 className="font-bold text-1xl mb-0 mt-1">
            BSc in Computer Science & Engineering
          </h1>
          <span className="inline-block text-xs mr-2">
            <a
              className="no-underline text-blue-400 hover:underline hover:text-green-800"
              href="https://aadi.com.bd"
            >
              Daffodil International University
            </a>
          </span>
          <span className="company_address text-xs text-gray-400">
            <address className="inline">Dhaka, Bangladesh - </address>
            <time>2015 to 2018</time>
          </span>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            laudantium laborum quam hic temporibus, eius iure ducimus?
            Perferendis dolores repudiandae porro voluptas quidem tempora optio
            similique, harum quia, aliquid laborum.
          </p>
        </header>
      </article>
    </section>
  );
};

export default Education;

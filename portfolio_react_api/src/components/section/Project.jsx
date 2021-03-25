import React from "react";
import Tag from "../tags/TagBoard";

const Project = () => {
  return (
    <section>
      <h1 className="font-bold font-sans text-2xl uppercase text-blue-500">
        Projects
      </h1>
      <div className="flex flex-wrap">
        <article className="mt-2">
          <h1 className="font-bold text-1xl mb-0 mt-1">
            <a href="https://eyakub.me">Home Rent API</a>
          </h1>
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dolorum voluptatem harum eaque magni labore iste distinctio, alias
            dignissimos ut accusantium fugit incidunt cum atque rerum nostrum
            non, voluptas velit!
          </p>
          <Tag />
        </article>
        <article className="mt-2">
          <h1 className="font-bold text-1xl mb-0 mt-1">
            <a href="https://eyakub.me">Home Rent API</a>
          </h1>
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dolorum voluptatem harum eaque magni labore iste distinctio, alias
            dignissimos ut accusantium fugit incidunt cum atque rerum nostrum
            non, voluptas velit!
          </p>
          <Tag />
        </article>
        <article className="mt-2">
          <h1 className="font-bold text-1xl mb-0 mt-1">
            <a href="https://eyakub.me">Home Rent API</a>
          </h1>
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dolorum voluptatem harum eaque magni labore iste distinctio, alias
            dignissimos ut accusantium fugit incidunt cum atque rerum nostrum
            non, voluptas velit!
          </p>
          <Tag />
        </article>
        <article className="mt-2">
          <h1 className="font-bold text-1xl mb-0 mt-1">
            <a href="https://eyakub.me">Home Rent API</a>
          </h1>
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dolorum voluptatem harum eaque magni labore iste distinctio, alias
            dignissimos ut accusantium fugit incidunt cum atque rerum nostrum
            non, voluptas velit!
          </p>
          <Tag />
        </article>
      </div>
    </section>
  );
};

export default Project;

import React from "react";
import Tag from "../tags/TagBoard";

const Preference = ({ hobbies, currently_working, besides }) => {
  return (
    <section className="mb-16">
      <p className="italic text-xs">
        With a Bachelor's degree in Computer Science & Engineering and have some
        hands-on experience using a few stacks to create and implement software
        applications also <b>Two</b> years of professional experience in 
        <b>Python(Django).</b>
      </p>
      <div className="preference_border_line">
        <span className="text-xs text-gray-800 mt-4 mb-2">My Hobbies</span>
        <div>
          {hobbies.map((hobby) => (
            <Tag
              key={hobby.name}
              name={hobby.name}
              hover_bg_class="hover:bg-green-500"
              text_color="text-emerald-900"
              bg_color="bg-green-300"
            />
          ))}
        </div>
      </div>

      <div className="preference_border_line">
        <span className="text-xs text-gray-800 mt-4 mb-2">Working with</span>
        <div>
          {currently_working.map((current) => (
            <Tag
              key={current.name}
              name={current.name}
              hover_bg_class="hover:bg-indigo-200"
              text_color="text-emerald-900"
              bg_color="bg-indigo-100"
            />
          ))}
        </div>
      </div>

      <div className="preference_border_line">
        <span className="text-xs text-gray-800 mt-4 mb-2">Besides</span>
        <div>
          {besides.map((current) => (
            <Tag
              key={current.name}
              name={current.name}
              hover_bg_class="hover:bg-indigo-200"
              text_color="text-emerald-900"
              bg_color="bg-indigo-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preference;

import React from "react";
import Tag from "../tags/TagBoard";

const Preference = ({ hobbies, currently_working, besides }) => {
  const handleBesides = (beside, b_index) => {
    if(beside.is_show === true) {
      return (
        <Tag
          key={b_index}
          name={beside.name}
          hover_bg_class="hover:bg-indigo-200"
          text_color="text-emerald-900"
          bg_color="bg-indigo-100"
        />
      )
    }
  }
  return (
    <section className="mb-16">
      <p className="italic text-xs font-section-paragraph">
        With a Bachelor's degree in Computer Science & Engineering and have some
        hands-on experience using a few stacks to create and implement software
        applications also <b>Three</b> years of professional experience in 
        <b>Python(Django).</b>
      </p>
      <div className="preference_border_line">
        <span className="text-xs text-gray-800 mt-4 mb-2 font-section-paragraph">My Hobbies</span>
        <div>
          {hobbies.map((hobby, h_index) => (
            <Tag
              key={h_index}
              name={hobby.name}
              hover_bg_class="hover:bg-green-500"
              text_color="text-emerald-900"
              bg_color="bg-green-300"
            />
          ))}
        </div>
      </div>

      <div className="preference_border_line">
        <span className="text-xs text-gray-800 mt-4 mb-2 font-section-paragraph">Working with</span>
        <div>
          {currently_working.map((current, c_index) => (
            <Tag
              key={c_index}
              name={current.name}
              hover_bg_class="hover:bg-indigo-200"
              text_color="text-emerald-900"
              bg_color="bg-indigo-100"
            />
          ))}
        </div>
      </div>

      <div className="preference_border_line">
        <span className="text-xs text-gray-800 mt-4 mb-2 font-section-paragraph">Besides</span>
        <div>
          {besides.map((beside, b_index) => (
            handleBesides(beside, b_index)
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preference;

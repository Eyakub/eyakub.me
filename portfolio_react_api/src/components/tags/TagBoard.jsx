import React from "react";

const Tag = ({ name, hover_bg_class, text_color, bg_color }) => {
  return (
    <div className="inline-block">
      <span
        className={`text-xs font-section-paragraph ${hover_bg_class} ${text_color} ${bg_color} rounded p-0.5 mr-2 mt-2`}
      >
        {name}
      </span>
    </div>
  );
};

export default Tag;

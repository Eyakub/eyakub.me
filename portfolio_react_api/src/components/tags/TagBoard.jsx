import React from "react";

const Tag = ({ hover_bg_class, text_color, bg_color }) => {
  return (
    <div>
      <span className="inline-block text-xs hover:bg-indigo-200 text-emerald-900 bg-indigo-100 rounded p-1 mr-2 mt-2">
        Python
      </span>
      <span className="inline-block text-xs hover:bg-indigo-200 text-emerald-900 bg-indigo-100 rounded p-1 mr-2 mt-2">
        Django
      </span>
      <span className="inline-block text-xs hover:bg-indigo-200 text-emerald-900 bg-indigo-100 rounded p-1 mr-2 mt-2">
        REST API
      </span>
      <span className="inline-block text-xs hover:bg-indigo-200 text-emerald-900 bg-indigo-100 rounded p-1 mr-2 mt-2">
        ReactJS
      </span>
      <span className="inline-block text-xs hover:bg-indigo-200 text-emerald-900 bg-indigo-100 rounded p-1 mr-2 mt-2">
        JavaScript
      </span>
      <span className="inline-block text-xs hover:bg-indigo-200 text-emerald-900 bg-indigo-100 rounded p-1 mr-2 mt-2">
        jQuery
      </span>
    </div>
  );
};

export default Tag;

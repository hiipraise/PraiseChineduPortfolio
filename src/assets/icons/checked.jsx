import React from "react";

const Checked = () => {
  return (
    <svg
      className="absolute w-4 h-4 hidden peer-checked:block pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default Checked;

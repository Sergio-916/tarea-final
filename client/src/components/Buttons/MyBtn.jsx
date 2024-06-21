import React from "react";

function MyBtn({ className, children, ...props }) {
  return (
    <button
      className={`text-sm flex items-center justify-center outline-none h-10 bg-title-color hover:scale-105 text-white font-bold py-2 px-4 rounded-xl active:bg-gray-500 active:shadow-inner ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default MyBtn;

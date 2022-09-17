import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-teal-500 text-white text-center border-2 rounded-lg shadow-lg border-white hover:font-bold hover:scale-110 py-1 w-32 "
    >
      {props.name}
    </button>
  );
};

export default Button;

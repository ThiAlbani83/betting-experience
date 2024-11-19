import React from "react";

const Button = ({ text, children }) => {
  return (
    <button
      className={`${children} bg-primary-medium text-white px-[32px] py-[12px] rounded-full shadow-lg font-roboto text-base active:scale-95 duration-300 hover:bg-primary-dark`}
    >
      {text}
    </button>
  );
};

export default Button;

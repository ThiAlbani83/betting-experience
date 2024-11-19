import React, { useState } from "react";

const SwitchToggle = () => {
  const [isOptionOne, setIsOptionOne] = useState(true);

  const toggleSwitch = () => {
    setIsOptionOne(!isOptionOne);
  };

  return (
    <div className="flex items-center">
      <div
        onClick={toggleSwitch}
        className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isOptionOne ? "bg-[#E6E6E6]/50" : "bg-primary-medium"
        }`}
      >
        <div
          className={`bg-[#E6E6E6] w-6 h-6 rounded-full shadow-md transform ${
            isOptionOne ? "translate-x-0" : "translate-x-6"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SwitchToggle;

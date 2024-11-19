import React from "react";

const ContentCard = ({ title, description }) => {
  return (
    <div className="font-poppins text-primary-dark bg-gradient-to-r from-[#1F01B9]/[15%] to-[#1F01B9]/[4%] bg-opacity-50 rounded-lg p-6 backdrop-blur-sm px-10 max-w-[850px]">
      <ul className="list-disc">
        <li>
          <h3 className="font-bold lg:text-[20px] lg:leading-[28px]">{title} <span className="font-normal">{description}</span></h3>
        </li>
      </ul>
    </div>
  );
};

export default ContentCard;

import React from "react";

const TiersCards = ({ image, title, description }) => {
  return (
    <div className="bg-[#3055DC80] flex flex-col items-center justify-center gap-10 px-10 py-9 rounded-md shadow-lg">
      <img src={image} alt={title}/>
      <div className="text-[#55B1E7] flex flex-col gap-6">
        <h3 className="text-3xl text-center">{title}</h3>
        <p className="text-center text-lg max-w-[300px] text-[#E6E6E6]">{description}</p>
      </div>
    </div>
  );
};

export default TiersCards;

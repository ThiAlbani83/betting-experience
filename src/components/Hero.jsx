import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="flex flex-col 2xl:pl-0 flex-1 md:flex-row gap-10 md:gap-0 md:justify-self-end max-w-[1560px] ml-auto">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;

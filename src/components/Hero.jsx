import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="flex flex-col 2xl:pl-0 flex-1 md:flex-row gap-10 md:gap-0 md:justify-self-end max-w-[1560px] ml-auto"
      id="#"
    >
      <HeroLeft />
      <HeroRight />
    </motion.div>
  );
};

export default Hero;

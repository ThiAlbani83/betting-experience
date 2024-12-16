import React from "react";
import { motion } from "framer-motion";
import weebet from "../assets/weebet.png";
import primepag from "../assets/primepag.png";
import regulabet from "../assets/regulabet.svg";
import paag from "../assets/paag.png";

const Sponsors = () => {
  return (
    <motion.div
      id="patrocine"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="flex flex-col gap-20"
    >
      <div className="flex flex-col gap-10 px-6">
        <h1 className="uppercase text-black font-poppins font-extrabold text-2xl md:text-4xl lg:text-5xl text-center">
          Nossos Patrocinadores
        </h1>
      </div>
      <div className="flex flex-wrap gap-10 md:gap-20 items-center justify-center max-w-[1280px] w-full mx-auto">
        <div className="w-48">
          <img src={regulabet} alt="regulabet" className="py-8" />
        </div>
        <div className="w-48">
          <img src={primepag} alt="primepag" className="py-8" />
        </div>
        <div className="w-48">
          <img src={weebet} alt="weebet" />
        </div>
        <div className="w-48">
          <img src={paag} alt="paag" className="py-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default Sponsors;

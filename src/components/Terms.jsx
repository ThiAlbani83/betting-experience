import { useState, useEffect } from "react";
import { termsData } from "../data/data";
import { motion } from "framer-motion";

const Terms = ({ sectionIds }) => {
  useEffect(() => {}, [sectionIds]);

  return (
    <div className="h-[calc(100vh-140px)] px-4 md:px-10 xl:px-20 pb-96">
      <div className="sticky top-0 z-30 w-full py-6 text-4xl text-center bg-background">
        <h1 className="">Termos e Condições</h1>
      </div>
      <div className="flex flex-col items-center gap-10 pb-96">
        {termsData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }} // Initial opacity 0 whileInView=
            whileInView={{ opacity: 1 }} // Animate to opacity 1 when in view transition=
            transition={{ duration: 3 }} // Slow fade-in over 1.5 seconds viewport=
            viewport={{ once: true }}
            key={index}
            id={sectionIds[index]}
            className="relative flex flex-col gap-4 mt-5 text-justify text-gray-500 font-inter"
          >
            <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
              {item.title}
            </h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Terms;

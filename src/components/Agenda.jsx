import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ScheduleAccordion from "./ScheduleAccordion";
import ScheduleDayOne from "./ScheduleDayOne";
import ScheduleDayTwo from "./ScheduleDayTwo";

const Agenda = () => {
  const [isSelected, setIsSelected] = useState(true);

  const handleOpenDay = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div id="agenda" className="w-full">
      <div className="py-12 w-full max-w-[1500px] mx-auto flex flex-col flex-wrap gap-10 px-10 md:px-20">
        <div className="mb-10">
          <h1 className="text-2xl font-extrabold font-poppins md:text-4xl lg:text-5xl text-primary-dark">
            Agenda
          </h1>
        </div>
        <div className="flex items-center gap-4 text-xl font-semibold font-poppins md:text-2xl lg:text-3xl">
          <button disabled={isSelected} onClick={handleOpenDay} className={`${isSelected && "bg-primary-medium duration-700 text-white"} px-3 py-1 rounded-lg cursor-pointer disabled:${!isSelected}`}>Dia 1</button>
          <div className="w-1 h-[30px] bg-black" />
          <button disabled={!isSelected} onClick={handleOpenDay} className={`${!isSelected && "bg-primary-medium duration-700 text-white"} px-3 py-1 rounded-lg cursor-pointer disabled:${!isSelected}`}>Dia 2</button>
        </div>
        <div className="flex flex-col gap-10">
          {isSelected ? <ScheduleDayOne /> : <ScheduleDayTwo />}
        </div>
      </div>
    </div>
  );
};

export default Agenda;

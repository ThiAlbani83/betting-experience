import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowDownRightSquareFill } from "react-icons/bs";

const ScheduleAccordion = ({
  hour,
  guest,
  title,
  description,
  participants,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ul className="flex flex-col gap-2 text-gray-800 font-roboto">
        <div className="flex flex-col gap-2">
          <li className="flex items-center gap-6 text-lg font-semibold md:text-xl text-primary-dark">
            {hour}: {title}
            <span
              onClick={handleOpenAccordion}
              className={`font-medium text-black cursor-pointer ${
                !participants && !description ? "hidden" : ""
              }`}
            >
              <BsArrowDownRightSquareFill className="text-primary-dark" />
            </span>
          </li>
          {guest && (
            <li className="text-base font-bold text-gray-800 md:text-lg">
              Convidado: {guest}
            </li>
          )}
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }} // Moved transition to top level
              className="flex flex-col gap-4"
            >
              {participants && (
                <li className="flex flex-col gap-2 mt-2 text-base font-semibold text-gray-800 md:text-lg">
                  Participantes:
                  <ul className="flex flex-col gap-2 text-base text-gray-600 md:text-lg">
                    {participants.map((participant) => (
                      <li key={participant}>{participant}</li>
                    ))}
                  </ul>
                </li>
              )}
              {description && (
                <li className="text-justify w-full max-w-[950px]">
                  {description}
                </li>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </>
  );
};

export default ScheduleAccordion;

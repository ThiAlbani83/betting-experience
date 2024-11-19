import { useState } from "react";
import logo from "../assets/betting-experience-logo.png";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="sticky top-0 z-50 w-full shadow-lg bg-background"
    >
      <div className="mx-auto md:px-20 px-10 xl:px-0 py-[26px] home flex items-center justify-between max-w-[1200px] ">
        <Link to="#" smooth={true} duration={800}>
          <img
            src={logo}
            alt="betting-experience-logo"
            className="w-[170px] active:scale-95 duration-300"
          />
        </Link>
        <div className="items-center hidden gap-20 lg:flex">
          <menu>
            <ul className="flex gap-20 text-base font-roboto">
              <Link to="#" smooth={true} duration={800}>
                <li className="duration-300 hover:text-primary-dark active:scale-95">
                  Home
                </li>
              </Link>
              <Link to="patrocine" smooth={true} duration={800}>
                <li className="duration-300 hover:text-primary-dark active:scale-95">
                  Seja Patrocinador
                </li>
              </Link>
            </ul>
          </menu>
          <Button text={"Garantir Ingresso"} />
        </div>
        <div className="block lg:hidden">
          <HiOutlineMenu
            onClick={handleClick}
            className={`${
              isOpen ? "text-black" : "text-primary-medium"
            } text-4xl z-50  active:scale-95 duration-300 cursor-pointer`}
          />
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: window.innerWidth < 1024 ? 0 : 400 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.75, stiffness: 100 }}
            className="absolute top-0 left-0 w-full h-screen bg-primary-light -z-10 scroll-hidden"
          >
            <ul className="flex flex-col items-center justify-center w-full h-screen gap-10 text-xl font-roboto">
              <Link to="#" smooth={true} duration={800}>
                <li className="duration-300 hover:text-primary-dark active:scale-95">
                  Home
                </li>
              </Link>
              <Link to="#patrocine" smooth={true} duration={800}>
                <li className="duration-300 hover:text-primary-dark active:scale-95">
                  Seja Patrocinador
                </li>
              </Link>
              <Button text={"Garantir Ingresso"} />
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;

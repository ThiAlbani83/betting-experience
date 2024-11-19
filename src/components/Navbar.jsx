import { useState } from "react";
import logo from "../assets/betting-experience-logo.png";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-background sticky top-0 shadow-lg z-50">
      <div className="mx-auto md:px-20 px-10 xl:px-0 py-[26px] home flex items-center justify-between max-w-[1200px] ">
        <a href="#home">
          <img
            src={logo}
            alt="betting-experience-logo"
            className="w-[170px] active:scale-95 duration-300"
          />
        </a>
        <div className="lg:flex items-center gap-20 hidden">
          <menu>
            <ul className="font-roboto text-base flex gap-20">
              <a href="#home">
                <li className="hover:text-primary-dark active:scale-95 duration-300">
                  Home
                </li>
              </a>
              <a href="#sponsors">
                <li className="hover:text-primary-dark active:scale-95 duration-300">
                  Seja Patrocinador
                </li>
              </a>
            </ul>
          </menu>
          <Button text={"Garantir Ingresso"} />
        </div>
        <div className="lg:hidden block">
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
            <ul className="w-full h-screen items-center justify-center flex flex-col gap-10 font-roboto text-xl">
              <a href="#home">
                <li className="hover:text-primary-dark active:scale-95 duration-300">
                  Home
                </li>
              </a>
              <a href="#sponsors">
                <li className="hover:text-primary-dark active:scale-95 duration-300">
                  Seja Patrocinador
                </li>
              </a>
              <Button text={"Garantir Ingresso"} />
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import logo from "../assets/betting-experience-logo.png";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Link as LinkRedirect, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isTermsRoute = location.pathname === "/terms-and-conditions";

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const handleMenuClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };
    return (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-[60] w-full shadow-lg bg-background relative"
      >
      <div className="mx-auto md:px-20 px-10 xl:px-0 py-[26px] home flex items-center justify-between max-w-[1200px] ">
        <LinkRedirect to="/" className="relative z-50 cursor-pointer">
          <img
            src={logo}
            alt="betting-experience-logo"
            className="w-[170px] active:scale-95 duration-300"
          />
        </LinkRedirect>
        <div className="items-center hidden gap-20 lg:flex">
          <menu>
            <ul className="flex gap-20 text-base font-roboto">
              <LinkRedirect to="/" className="cursor-pointer">
                <li className="duration-300 hover:text-primary-dark active:scale-95">
                  Home
                </li>
              </LinkRedirect>
              <Link
                to="patrocine"
                smooth={true}
                duration={800}
                className={`cursor-pointer ${
                  isTermsRoute ? "hidden" : "block"
                }`}
              >
                <li className="duration-300 hover:text-primary-dark active:scale-95">
                  Seja Patrocinador
                </li>
              </Link>
              <Link
                to="agenda"
                smooth={true}
                duration={800}
                className={`cursor-pointer ${
                  isTermsRoute ? "hidden" : "block"
                }`}
              >
                <li className="duration-300 hover:text-primary-dark active:scale-95">
                  Agenda
                </li>
              </Link>
            </ul>
          </menu>
          {isTermsRoute && (
            <LinkRedirect to={"/"}>
              <Button text={"Garantir Ingresso"} />
            </LinkRedirect>
          )}
        </div>
        <div className="lg:hidden">
          <HiOutlineMenu
            onClick={handleClick}
            className={`${
              isOpen ? "text-black" : "text-primary-medium"
            } text-4xl active:scale-95 z-50 duration-300 cursor-pointer`}
          />
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: window.innerWidth < 1024 ? 0 : 400 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.75, stiffness: 100 }}
            className="absolute top-0 left-0 -z-[5] w-full h-screen bg-primary-light scroll-hidden"
          >
            <ul className="flex flex-col items-center justify-center w-full h-screen gap-10 text-xl font-roboto">
              <LinkRedirect onClick={handleMenuClick} to="/">
                <li className="text-white duration-300 hover:text-primary-dark active:scale-95">
                  Home
                </li>
              </LinkRedirect>
              <LinkRedirect
                onClick={() => {
                  handleMenuClick();
                  setTimeout(() => {
                    const element = document.getElementById("patrocine");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      duration: 800,
                    });
                  }, 100);
                }}
                to="/"
                className={`${
                  isTermsRoute ? "hidden" : "block"
                } cursor-pointer`}
              >
                <li className="text-white duration-300 hover:text-primary-dark active:scale-95">
                  Seja Patrocinador
                </li>
              </LinkRedirect>
              <LinkRedirect
                onClick={() => {
                  handleMenuClick();
                  setTimeout(() => {
                    const element = document.getElementById("agenda");
                    element?.scrollIntoView({
                      behavior: "smooth",
                      duration: 800,
                    });
                  }, 100);
                }}
                to="/"
                className={`${
                  isTermsRoute ? "hidden" : "block"
                } cursor-pointer`}
              >
                <li className="text-white duration-300 hover:text-primary-dark active:scale-95">
                  Agenda
                </li>
              </LinkRedirect>
              {isTermsRoute && (
                <LinkRedirect
                  onClick={() => {
                    handleMenuClick();
                    setTimeout(() => {
                      const element = document.getElementById("contact");
                      element?.scrollIntoView({
                        behavior: "smooth",
                        duration: 800,
                      });
                    }, 100);
                  }}
                  to={"/"}
                >
                  <Button text={"Garantir Ingresso"} />
                </LinkRedirect>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;

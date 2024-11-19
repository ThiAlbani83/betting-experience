import tropicalize from "../assets/tropicalize.svg";
import betpass from "../assets/betpass.svg";
import { motion } from "framer-motion";

const HeroLeft = () => {
  return (
    <motion.div
      initial={{ x: -150 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center w-full gap-8 px-10 py-10 font-roboto 2xl:px-0 mx:pr-10 lg:items-start"
    >
      <span className="text-base text-center text-primary-dark max-w-fit sm:text-left">
        O Primeiro Evento Online de{" "}
        <span className="font-bold">Apostas no Brasil</span>
      </span>
      <div className="flex flex-col gap-2 text-4xl font-extrabold uppercase max-w-fit lg:text-5xl lg:gap-4">
        <h1 className="max-w-fit">Transforme</h1>
        <span className="max-w-fit">sua experiência</span>
        <span className="font-normal max-w-fit">no mercado de</span>
        <span className="font-normal max-w-fit">apostas</span>
      </div>

      <p className="text-gray-800 lg:text-lg text-base max-w-[560px] lg:text-justify text-center">
        A Tropicalize e a Betpass apresentam o Betting Experience, o primeiro
        evento online do setor de apostas esportivas no Brasil. Em um momento de
        grandes mudanças regulatórias, este evento pioneiro traz o conhecimento
        necessário para que operadores, afiliados e investidores se adaptem e
        prosperem no mercado regulamentado.
      </p>
      <div className="flex flex-col gap-2 w-fit">
        <span className="text-sm text-gray-600">Realizado por:</span>
        <div className="flex items-center gap-4">
          <img src={tropicalize} alt="tropicalize" className="w-32" />
          <img src={betpass} alt="betpass" className="w-24 text-black" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroLeft;

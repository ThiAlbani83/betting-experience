import tropicalize from "../assets/tropicalize.svg";
import betpass from "../assets/betpass.svg";

const HeroLeft = () => {
  return (
    <div className="flex w-full flex-col gap-8 font-roboto py-10 px-10 2xl:px-0 mx:pr-10 items-center lg:items-start">
      <span className="text-base text-primary-dark max-w-fit text-center sm:text-left">
        O Primeiro Evento Online de{" "}
        <span className="font-bold">Apostas no Brasil</span>
      </span>
      <div className="max-w-fit uppercase text-4xl lg:text-5xl font-extrabold flex flex-col gap-2 lg:gap-4">
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
    </div>
  );
};

export default HeroLeft;

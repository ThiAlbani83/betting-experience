import React from "react";
import TierCardSection from "./TierCardSection";
import PrizesSection from "./PrizesSection";
import Button from "./Button";

const Patrocine = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10 px-10">
        <h1 className="uppercase text-[#E6E6E6] font-poppins font-extrabold text-2xl md:text-4xl lg:text-5xl text-center">
          Patrocine o betting experience
        </h1>
        <p className="text-[#E6E6E6] font-roboto font-light text-[22px] leading-[35px] text-center max-w-[940px] mx-auto">
          Marcas que desejam se posicionar no mercado de apostas têm a
          oportunidade de participar deste evento como patrocinadoras.
          Oferecemos três faixas de patrocínio exclusivas: 
        </p>
      </div>
      <TierCardSection />
      <h1 className="mt-[20px] uppercase text-[#E6E6E6] font-poppins font-extrabold text-2xl md:text-4xl lg:text-5xl text-center">
        O que você vai ganhar?
      </h1>
      <PrizesSection />
      <h1 className="mt-[20px] mx-auto max-w-[840px] uppercase text-[#1F01B9] font-poppins font-extrabold text-2xl md:text-4xl text-center">
        Não perca essa oportunidade de elevar sua atuação no mercado de apostas.
      </h1>
      <p className=" -mt-14 text-[#1F01B9] font-roboto font-light text-[22px] leading-[35px] text-center max-w-[940px] mx-auto">
        Inscreva-se agora para garantir seu lugar no Betting Experience!
      </p>
      <Button children={"w-fit px-20 sm:px-32 place-self-center"} text={"Inscreva-se"} />
    </div>
  );
};

export default Patrocine;

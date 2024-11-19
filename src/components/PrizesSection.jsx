import React from "react";
import PrizesCards from "./PrizesCards";
import copas from "../assets/copas-decoration.png";
import star from "../assets/star-decoration.png";

const PrizesSection = () => {
  return (
    <div className="relative z-20 flex flex-wrap justify-center w-full gap-6 px-10 mx-auto md:px-20 md:gap-10">
      <PrizesCards
        background="/prize1.png"
        title="Certificado de Participação: "
        description="Comprove sua expertise e diferencial no mercado de apostas."
      />
      <PrizesCards
        background="/prize2.png"
        title="Conteúdos Exclusivos:"
        description="Acesso a vídeos, e-books e materiais especializados para você consultar e usar após o evento. "
      />
      <PrizesCards
        background="/prize3.png"
        title="Networking e Conhecimento:"
        description="Conecte-se com os principais líderes do setor e construa um novo caminho para o sucesso no mercado de apostas."
      />
      <PrizesCards
        background="/prize4.png"
        title="Member Get Member"
        description="Possibilidade de ganhar diversos prêmios com a nossa campanha de indicação"
      />
      <img
        src={copas}
        alt="copas"
        className="absolute top-[140px] left-[180px] max-w-[215px] w-full opacity-30 -z-10"
      />
      <img
        src={star}
        alt="star"
        className="absolute -top-[700px] left-[110px] max-w-[115px] w-full opacity-30 -z-10"
      />
    </div>
  );
};

export default PrizesSection;

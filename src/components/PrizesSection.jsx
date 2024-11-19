import React from "react";
import PrizesCards from "./PrizesCards";

const PrizesSection = () => {
  return (
    <div className="flex w-full mx-auto px-10 md:px-20 gap-6 md:gap-10 justify-center flex-wrap">
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
    </div>
  );
};

export default PrizesSection;
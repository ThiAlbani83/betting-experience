import TiersCards from "./TiersCards";
import tierSilver from "../assets/copas.png";
import tierGold from "../assets/star.png";
import tierPlatinum from "../assets/cloud.png";

const TierCardSection = () => {
  return (
    <div className="flex w-full max-w-fit mx-auto px-10 gap-10 justify-center flex-wrap">
      <TiersCards
        title="Faixa Silver"
        description="Menção e logotipo em materiais de divulgação digital e certificado de participação."
        image={tierSilver}
      />
      <TiersCards
        title="Faixa Gold"
        description="Exposição digital destacada, workshop exclusivo e inserção em materiais pós-evento."
        image={tierGold}
      />
      <TiersCards
        title="Faixa Platinum"
        description="Patrocinador master com exclusividade de marca, ativações ao vivo e dados gerais de contato de participantes interessados."
        image={tierPlatinum}
      />
    </div>
  );
};

export default TierCardSection;

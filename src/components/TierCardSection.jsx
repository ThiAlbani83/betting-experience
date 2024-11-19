import TiersCards from "./TiersCards";
import tierSilver from "../assets/copas.png";
import tierGold from "../assets/star.png";
import tierPlatinum from "../assets/cloud.png";
import star from "../assets/star-decoration.png";

const TierCardSection = () => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-10 px-10 mx-auto max-w-fit">
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
        decoration={
          <img
            src={star}
            alt="star"
            className="absolute top-[340px] right-[40px] max-w-[315px] w-full opacity-30"
          />
        }
      />
    </div>
  );
};

export default TierCardSection;

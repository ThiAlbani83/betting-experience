import pokerCoins from "../assets/poker-coins.svg";
import ContentCard from "./ContentCard";

const WhyJoin = () => {
  return (
    <div className="flex flex-col flex-1 max-w-[1560px] ml-auto relative px-10 2xl:px-0 py-24">
      <div>
        <img
          src={pokerCoins}
          alt="poker-coins"
          className="absolute top-8 lg:right-20 right-0 w- 2xl:w-[700px] 2xl:h-[720px] opacity-10 lg:opacity-60"
        />
      </div>
      <div className="uppercase font-roboto text-4xl lg:text-5xl font-extrabold flex flex-col gap-2 lg:gap-4 w-full">
        <h1 className="text-center md:text-start">Por Que</h1>
        <h1 className="text-center md:text-start text-primary-dark font-normal">
          participar?
        </h1>
      </div>
      <div className="mt-10 font-roboto">
        <p className="text-gray-800 lg:text-lg text-base max-w-[560px] md:text-justify text-center">
          O Betting Experience é uma oportunidade única para entender como a
          nova regulamentação brasileira impacta o setor de apostas e descobrir
          como adaptar e otimizar suas operações. Ao lado de especialistas da
          Tropicalize e da Betpass, os participantes terão acesso a conteúdos
          exclusivos que abordam: 
        </p>
      </div>
      <div className="max-w-[900px] mt-14 flex flex-col gap-6">
        <ContentCard
          title={"Atualização Regulamentar:"}
          description={
            "Entenda em profundidade as novas leis, as obrigações e os benefícios de operar legalmente no Brasil."
          }
        />
        <ContentCard
          title={"Oportunidades para Afiliados:"}
          description={
            " Descubra estratégias para monetizar suas operações e expandir sua presença no mercado regulado."
          }
        />
        <ContentCard
          title={"Posicionamento de Mercado:"}
          description={
            "Aprenda com cases de sucesso e explore estratégias de crescimento com as melhores práticas da Tropicalize."
          }
        />
      </div>
    </div>
  );
};

export default WhyJoin;

import pokerCoins from "../assets/poker-coins.svg";
import ContentCard from "./ContentCard";
import { motion } from "framer-motion";

const WhyJoin = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
      className="flex flex-col flex-1 max-w-[1560px] ml-auto relative px-10 2xl:px-0 py-24"
    >
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src={pokerCoins}
          alt="poker-coins"
          className="absolute top-8 lg:right-20 right-0 w- 2xl:w-[700px] 2xl:h-[720px] opacity-10 lg:opacity-60"
        />
      </motion.div>
      <div className="flex flex-col w-full gap-2 text-4xl font-extrabold uppercase font-roboto lg:text-5xl lg:gap-4">
        <h1 className="text-center md:text-start">Por Que</h1>
        <h1 className="font-normal text-center md:text-start text-primary-dark">
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
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContentCard
            title={"Atualização Regulamentar:"}
            description={
              "Entenda em profundidade as novas leis, as obrigações e os benefícios de operar legalmente no Brasil."
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 600 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContentCard
            title={"Oportunidades para Afiliados:"}
            description={
              " Descubra estratégias para monetizar suas operações e expandir sua presença no mercado regulado."
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -600 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ContentCard
            title={"Posicionamento de Mercado:"}
            description={
              "Aprenda com cases de sucesso e explore estratégias de crescimento com as melhores práticas da Tropicalize."
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyJoin;

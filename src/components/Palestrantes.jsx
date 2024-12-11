import { motion } from "framer-motion";
import { palestrantes } from "../data/data";
import { useState } from "react";
import Modal from "./Modal";

const Palestrantes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    nome: "",
    cargo: "",
    descricao: "",
  });

  const handleOpenModal = (palestrante) => {
    setUserData(palestrante);
    console.log(palestrante)
    if (
      palestrante.nome == "Igor" ||
      palestrante.nome == "Pedro Feitosa" ||
      palestrante.nome == "Danilo Martins" ||
      palestrante.nome == "Matheus Zakur" ||
      palestrante.nome == "Mateus Caumo" ||
      palestrante.nome == "Neto Lima"
    ) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="relative flex">
        <h1 className="uppercase text-[#E6E6E6] font-poppins font-extrabold text-2xl md:text-4xl text-start px-10 md:px-20 border-b border-b-[#E6E6E6] w-full">
          Saiba quem são
          <br /> nossos palestrantes
        </h1>
      </div>
      <div className="py-12 w-full max-w-[1500px] mx-auto flex justify-center flex-wrap gap-20">
        {palestrantes.map((palestrante, index) => (
          <motion.div
            initial={{ opacity: 0, x: -850 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            key={index}
            onClick={() => handleOpenModal(palestrante)}
            className="w-full max-w-[300px] flex flex-col gap-4 bg-primary-medium/10 cursor-pointer hover:scale-105 duration-300"
          >
            <img src={palestrante.imagem} alt={`speaker-${index + 1}`} />
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-gray-200 text-[24px]">{palestrante.nome}</h3>
              <h3 className="text-gray-200 text-[16px]">{palestrante.cargo}</h3>
            </div>
            <button className="w-full py-3 text-lg text-white rounded-b-lg bg-primary-medium">
              <span>Saiba mais</span>
            </button>
          </motion.div>
        ))}
      </div>
      {modalOpen && (
        <Modal
          name={userData.nome}
          role={userData.cargo}
          description={`${userData.description}`
            .split("\n")
            .map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          onClose={handleCloseModal}
          linkedin={userData.linkedin}
          instagram={userData.instagram}
          youtube={userData.youtube}
        />
      )}
    </div>
  );
};

export default Palestrantes;

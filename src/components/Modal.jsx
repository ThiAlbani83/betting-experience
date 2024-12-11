import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Modal({
  name,
  role,
  description,
  linkedin,
  onClose,
  instagram,
  youtube,
}) {
  const handleClickOutside = (e) => {
    // Quando o usuário clicar fora do conteúdo do modal
    onClose();
  };

  const handleModalClick = (e) => {
    // Impede que o clique dentro do modal feche o modal
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial opacity 0
      whileInView={{ opacity: 1 }} // Animate to opacity 1 when in view
      transition={{ duration: 0.5 }} // Slow fade-in over 1.5 seconds
      viewport={{ once: true }} // Animation will trigger once when in view
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={handleClickOutside} // Fecha ao clicar fora do modal
    >
      <div
        className={`bg-gray-200 bg-center bg-cover bg-no-repeat py-10 sm:py-40 px-4 rounded-xl max-w-[80%] sm:max-w-[75%] lg:max-w-[65%] 2xl:max-w-[30%] flex flex-col gap-5 sm:gap-10 relative ${
          (name === "Victoria Ceroni") ||
          (name === "Fernanda Batistella") ||
          (name === "Mariana Chamelette") ||
          (name === "Débora Cunha R.") ||
          (name === "Simone Vicentini") ||
          (name === "Daniele Costa") ||
          (name === "Jacqueline Favraud")||
          (name === "Flávia Feher Merlo") ||
          (name === "Andresa Franco") ||
          (name === "Lara Nicolau")||
          (name === "Mariana Kannebley")
            ? "shadow-[8px_8px_0px_0px_rgb(190,24,93,0.9)]"
            : "shadow-[8px_8px_0px_0px_rgba(31,1,185,1)]"
        } max-h-[90vh] overflow-y-scroll modal`}
        onClick={handleModalClick} // Impede propagação do clique dentro do modal
      >
        <h1
          className={`text-4xl w-fit place-self-center font-bold text-center ${
            (name === "Victoria Ceroni") ||
          (name === "Fernanda Batistella") ||
          (name === "Mariana Chamelette") ||
          (name === "Débora Cunha R.") ||
          (name === "Simone Vicentini") ||
          (name === "Daniele Costa") ||
          (name === "Jacqueline Favraud")||
          (name === "Flávia Feher Merlo") ||
          (name === "Andresa Franco") ||
          (name === "Lara Nicolau")||
          (name === "Mariana Kannebley")
              ? "text-pink-700 drop-shadow-[3px_3px_2px_rgba(190,24,93,0.5)]"
              : "text-primary-dark drop-shadow-[3px_3px_2px_rgba(31,1,185,0.5)]"
          } font-inter`}
        >
          {name}
        </h1>
        <h3
          className={`text-xl font-semibold text-center ${
            (name === "Victoria Ceroni") ||
          (name === "Fernanda Batistella") ||
          (name === "Mariana Chamelette") ||
          (name === "Débora Cunha R.") ||
          (name === "Simone Vicentini") ||
          (name === "Daniele Costa") ||
          (name === "Jacqueline Favraud")||
          (name === "Flávia Feher Merlo") ||
          (name === "Andresa Franco") ||
          (name === "Lara Nicolau")||
          (name === "Mariana Kannebley")
              ? "text-pink-700 drop-shadow-[1px_1px_1px_rgba(190,24,93,0.5)]"
              : "text-primary-dark drop-shadow-[1px_1px_1px_rgba(31,1,185,0.5)]"
          } font-inter`}
        >
          {role}
        </h3>
        <p className="px-2 text-sm text-gray-900 lg:text-lg text-justify sm:text-base sm:px-10">
          {description}
        </p>
        <div className="flex items-center justify-center gap-6">
          {linkedin && (
            <a href={linkedin} target="_blank" className="flex justify-center ">
              <FaLinkedin
                className={`self-center text-4xl ${
                  (name === "Victoria Ceroni") ||
          (name === "Fernanda Batistella") ||
          (name === "Mariana Chamelette") ||
          (name === "Débora Cunha R.") ||
          (name === "Simone Vicentini") ||
          (name === "Daniele Costa") ||
          (name === "Jacqueline Favraud")||
          (name === "Flávia Feher Merlo") ||
          (name === "Andresa Franco") ||
          (name === "Lara Nicolau")||
          (name === "Mariana Kannebley")
                    ? "text-pink-700"
                    : "text-primary-dark"
                }`}
              />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" className="flex justify-center ">
              <FaInstagram
                className={`self-center text-4xl ${
                  (name === "Victoria Ceroni") ||
          (name === "Fernanda Batistella") ||
          (name === "Mariana Chamelette") ||
          (name === "Débora Cunha R.") ||
          (name === "Simone Vicentini") ||
          (name === "Daniele Costa") ||
          (name === "Jacqueline Favraud")||
          (name === "Flávia Feher Merlo") ||
          (name === "Andresa Franco") ||
          (name === "Lara Nicolau")||
          (name === "Mariana Kannebley")
                    ? "text-pink-700"
                    : "text-primary-dark"
                }`}
              />
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" className="flex justify-center ">
              <FaYoutube
                className={`self-center text-4xl ${
                  (name === "Victoria Ceroni") ||
          (name === "Fernanda Batistella") ||
          (name === "Mariana Chamelette") ||
          (name === "Débora Cunha R.") ||
          (name === "Simone Vicentini") ||
          (name === "Daniele Costa") ||
          (name === "Jacqueline Favraud")||
          (name === "Flávia Feher Merlo") ||
          (name === "Andresa Franco") ||
          (name === "Lara Nicolau")||
          (name === "Mariana Kannebley")
                    ? "text-pink-700"
                    : "text-primary-dark"
                }`}
              />
            </a>
          )}
        </div>

        <FaWindowClose
          onClick={onClose}
          className={`absolute rounded-lg cursor-pointer size-8 top-4 right-4 ${
            (name === "Victoria Ceroni") ||
          (name === "Fernanda Batistella") ||
          (name === "Mariana Chamelette") ||
          (name === "Débora Cunha R.") ||
          (name === "Simone Vicentini") ||
          (name === "Daniele Costa") ||
          (name === "Jacqueline Favraud")||
          (name === "Flávia Feher Merlo") ||
          (name === "Andresa Franco") ||
          (name === "Lara Nicolau")||
          (name === "Mariana Kannebley")
              ? "text-pink-700"
              : "text-primary-dark"
          }`}
        />
        <div className="bg-primary absolute -top-[100px] -left-[100px] sm:-top-[175px] sm:-left-[175px] w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full" />
      </div>
    </motion.div>
  );
}

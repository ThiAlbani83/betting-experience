import { useEffect } from "react";
import iFrameForm from "./iFrameForm";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const HeroRight = () => {
  useEffect(() => {
    // Adiciona o script dinamicamente após a montagem do componente
    const script = document.createElement("script");
    script.src = "https://storage.filesmemberclass.com/iframe.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpa o script ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: 150 }}
      id="contact"
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="bg-[url('/noise-bg.png')] bg-cover bg-center place-content-center bg-no-repeat w-full lg:block mx-auto px-3 lg:w-[80%] py-16 lg:py-0"
    >
     {/*  <ContactForm /> */}
      <div className="wrapper-mgmmc" data-id="cm3rcihbm00016xi0b8bmtaon"></div>
    </motion.div>
  );
};

export default HeroRight;

import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const HeroRight = () => {
  return (
    <motion.div
      initial={{ x: 150 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="bg-[url('/noise-bg.png')] bg-cover bg-center place-content-center bg-no-repeat w-full lg:w-[80%] py-16 lg:py-0"
    >
      <ContactForm />
    </motion.div>
  );
};

export default HeroRight;

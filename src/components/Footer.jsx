/* import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png"; */
import tropicalize from "../assets/tropicalize-logo.png";
import betpass from "../assets/betpass-logo.png";
import { useLocation } from "react-router-dom";

const Footer = () => {

  const location = useLocation();
  const isTermsPage = location.pathname === "/terms-and-conditions";

  return (
    <div className={`${isTermsPage ? "hidden" : "flex flex-col gap-20 bg-background-dark py-[100px] "}`}>
      <div className="py-[90px] max-w-[60%] w-full flex flex-col gap-16 border-t bordert-[#E6E6E6] border-b border-b-[#E6E6E6] mx-auto">
        <p className="text-[#E6E6E6] text-center">
          Evento Online e Gratuito - 16 de dezembro de 2024.
        </p>
        {/*  <div className="flex items-center justify-center gap-10 md:gap-20">
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={youtube} alt="youtube" />
          </a>
        </div> */}
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-center text-[#E6E6E6]">Realização</p>
        <div className="flex flex-col items-center justify-center gap-20 sm:flex-row">
          <a href="https://tropicalize.com/" target="_blank">
            <img src={tropicalize} alt="tropicalize" className="w-[150px]" />
          </a>
          <a href="https://www.betpass.tech/" target="_blank">
            <img src={betpass} alt="betpass" className="w-[150px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

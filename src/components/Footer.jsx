import React from "react";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import tropicalize from "../assets/tropicalize-logo.png";
import betpass from "../assets/betpass-logo.png";

const Footer = () => {
  return (
    <div className="bg-background-dark py-[100px] flex flex-col gap-20">
      <div className="py-[90px] max-w-[60%] w-full flex flex-col gap-16 border-t bordert-[#E6E6E6] border-b border-b-[#E6E6E6] mx-auto">
        <p className="text-[#E6E6E6] text-center">
          Evento online e Gratuito - 00 de janeiro
        </p>
        <div className="flex items-center justify-center gap-10 md:gap-20">
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={youtube} alt="instyoutubeagram" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <p className="text-center text-[#E6E6E6]">Realização</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-20">
          <a href="/">
            <img src={tropicalize} alt="instagram" className="w-[150px] sm:w-full" />
          </a>
          <a href="/">
            <img src={betpass} alt="instagram" className="w-[150px] sm:w-full" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

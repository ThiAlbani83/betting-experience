import React from "react";

const iFrameForm = () => {
  useEffect(() => {
    // Adiciona o script dinamicamente após a montagem do componente
    const script = document.createElement("script");
    script.src = "https://storage.filesmemberclass.com/iframe.js?v1.2";
    <div class='wrapper-mgmmc' data-id="cm3rcihbm00016xi0b8bmtaon"></div>
    script.async = true;
    document.body.appendChild(script);

    // Limpa o script ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Substitui o antigo <form> pela div com o iframe */}
      <div className="wrapper-mgmmc" data-id="cm3rcihbm00016xi0b8bmtaon"></div>
    </div>
  );
};

export default iFrameForm;

import React from "react";
import ScheduleAccordion from "./ScheduleAccordion";

const ScheduleDayOne = () => {
  return (
    <>
      <div className="flex flex-col gap-4 font-roboto">
        <ul className="flex flex-col gap-2">
          <li>
            <span className="text-lg font-semibold md:text-xl text-primary-dark">
              18h: Abertura
            </span>
          </li>
          <li className="text-base font-bold text-gray-800 md:text-lg">
            Convidado: Sergio Sacchi- CEO da Tropicalize
          </li>
        </ul>
      </div>
      <div>
        <ScheduleAccordion
          hour="18:10"
          title="Regulamentação das Bets"
          guest="Luiz Felipe Maia - Advogado"
          participants={[
            "Carolina Yumi de Souza - Secretária-Adjunta de Prêmios e Apostas do Ministério da Fazenda",
            "Juliana Albuquerque - vice-presidente executiva CONAR - Conselho Nacional de Autorregulamentação Publicitária",
            "Wagner Batista (LAW SA) - Escritório Jurídico Especialista em Direto Digital (LGPD)",
          ]}
          description="A regulamentação das apostas no Brasil tem ganhado destaque nos últimos meses, especialmente com a crescente popularização das apostas esportivas e jogos online. O cenário atual exige um entendimento aprofundado sobre os marcos legais, as propostas em tramitação e as implicações econômicas e sociais dessa regulamentação. Este painel visa discutir o panorama atual e futuro da regulamentação das apostas no país.
"
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"18:40"}
          title={"The Tips com Pedro Ortega"}
          guest={"Pedro Ortega - Influenciador e Tipster"}
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"18:50"}
          title={"Você sabia? Dúvidas sobre a regulamentação"}
          guest={"Luiz Felipe Santoro - Presidente da Comissão de Jogos da OAB"}
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"19:00"}
          title={
            "Betting Global: A evolução das apostas e a regulamentação de cassinos físicos"
          }
          guest={
            "Gustavo Centeno Biglia - Advogado e professor do curso de pós-graduação da FGV sobre “Meios de Pagamentos e Fintechs”"
          }
          participants={[
            "Waldir Marques - Diretor de Assuntos Regulatórios",
            "Alex Parente - VP Hard Rock Cassino",
            "Antônio Carlos Ferreira - ex-VP do governo na Caixa Federal",
          ]}
          description={
            "A evolução das apostas ao redor do mundo tem sido marcada por inovações tecnológicas e mudanças culturais, com o setor de jogos passando de uma prática tradicional e limitada a um mercado global altamente sonoro. A crescente digitalização permitiu que as apostas on-line se tornassem uma das formas mais populares de entretenimento, enquanto os cassinos físicos também continuaram a desempenhar um papel crucial no ecossistema de apostas. No entanto, com o crescimento acelerado desse mercado, surge a necessidade urgente de uma regulamentação eficaz, que garanta a transparência, a segurança e o bem-estar."
          }
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"19:30"}
          title={"The Tips com Mateus ZK"}
          guest={"Mateus ZK - Influenciador e Tipster"}
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"19:40"}
          title={"Você Sabia? Dúvidas sobre a regulamentação"}
          guest={
            "Udo Seckelmann - Head of Gambling & Crypto at Bichara e Motta Advogados"
          }
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"19:50"}
          title={"Apostas Reguladas: Transparência e direitos do consumidor"}
          guest={"Natália Nogues-  CEO da Control F5"}
          participants={[
            "Leonardo Baptista- CEO da Pay4fun",
            "Felipe Paniago - Co-fundador e CMO do Reclame Aqui",
            "Senador Irajá (PSD-TO), relator da legalização dos cassinos e jogo do bicho",
          ]}
          description={
            "A transparência nas apostas regulamentadas é essencial para garantir que os consumidores possam fazer escolhas conscientes. O governo pode exigir que as empresas de apostas divulguem informações claras sobre como os jogos funcionam, as probabilidades oferecidas, as políticas de pagamento e os critérios para bonificações e promoções. Isso não apenas facilita a confiança do consumidor, mas também permite que ele compreenda os riscos envolvidos em cada aposta e tome decisões com mais responsabilidade. Neste painel vamos abordar alguns direitos do consumidor e o que ele precisa ficar de olho na hora de apostas e consumir conteúdos do setor."
          }
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"20:20"}
          title={"Inovação em jogos e tecnologias aplicadas ao iGaming"}
          participants={[
            "Bruno Barroso - CEO da Betpass",
            "Henrique Moraes - CEO Jet Bet",
            "Thiago  Faustino - sócio e CTO  WeeBet",
            "Guilherme Buso - VP Brasil da Genius Sports",
          ]}
          description={
            "O setor de iGaming está em constante evolução, impulsionado por inovações que transformam a forma como os jogos são desenvolvidos, distribuídos e jogados. À medida que a tecnologia avança, novas experiências de jogo surgem, atraindo um público diversificado e cada vez mais exigente. Neste painel, vamos discutir as principais inovações em jogos e as tecnologias que estão moldando o futuro do iGaming, com foco em como elas afetam a experiência do usuário e a competitividade do mercado."
          }
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"20:50"}
          title={"Influenciadores e Streamers- o que muda com a regulamentação"}
          guest={"Lara Monteiro - CMO da Tropicalize"}
          participants={[
            "Danilo Martins - Influenciador",
            "Neto Lima - Iinfluenciador",
            "Ana Green - Influenciadora",
          ]}
          description={
            "A regulamentação das apostas traz consigo o aumento da supervisão por parte das autoridades competentes, que terão o poder de fiscalizar as ações de influenciadores e streamers. Caso sejam identificadas práticas irresponsáveis, como a promoção de apostas excessivas ou a omissão de informações essenciais, os responsáveis ​​podem ser penalizados, seja com multas ou até com a separação de divulgar tais conteúdos. A previsão de disposições específicas para a atuação de influenciadores no mercado visa mitigar riscos relacionados à violência no jogo, especialmente entre públicos mais jovens."
          }
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"21:40"}
          title={"M&A e investimentos para o mercado de Igaming"}
          description={
            "O mercado de iGaming tem se consolidado como um dos setores de maior crescimento no cenário global, impulsionado pela evolução das tecnologias digitais e pela crescente regulamentação de jogos online em diversas regiões. No contexto de fusões e aquisições (M&A), este mercado tem atraído grandes investidores em busca de diversificação e expansão. A dinâmica das transações nesse setor envolve, principalmente, a compra de operadores de jogos, plataformas tecnológicas e empresas de afiliados, sendo uma forma de acelerar a inovação e ampliar a base de clientes. Neste painel vamos abordar a importância de investidores estratégicos no mercado de IGaming e como isso tem sido um fator chave para o desenvolvimento do setor."
          }
        />
      </div>
    </>
  );
};

export default ScheduleDayOne;

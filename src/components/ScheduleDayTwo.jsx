import React from "react";
import ScheduleAccordion from "./ScheduleAccordion";
import { BsArrowDownRightSquareFill } from "react-icons/bs";


const ScheduleDayTwo = () => {
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
          title="Apostas na Prática: Como a Regulamentação Impacta o Mercado e os Jogadores"
          guest="Fernanda Batistella- Head da área de Contencioso Cível no Maia Yoshiyasu Advogados"
          participants={[
            "Victória Cerioni- Head de iGaming e Inovação no Sadi Morishita Advogados",
            "Bruno Barroso- CEO da Betpass",
          ]}
          description="O setor de apostas online tem crescido em diversas partes do mundo, impulsionado pela digitalização e pela popularidade dos jogos. Em regiões como a Europa e partes da Ásia, uma regulamentação já está bem estabelecida, permitindo um ambiente competitivo e seguro tanto para operadores quanto para jogadores. A diversidade de métodos de pagamento, ofertas de bônus e tecnologias inovadoras são algumas das características que tornam essas plataformas específicas. Apesar disso, o cenário não é homogêneo: muitos países ainda lutam para encontrar um equilíbrio entre a proteção do consumidor e a promoção de um mercado justo."
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"18:30"}
          title={"Mulheres nos Jogo: Desafios, Conquistas e o Futuro dos Jogos"}
          guest={"Danielle Santos Costa- gerente de marketing da Pay4fun "}
          description={
            "O universo dos jogos tem evoluído significativamente, e com ele, a presença das mulheres, que vem ganhando visibilidade e espaço. A participação feminina nos jogos, seja como jogadoras, desenvolvedoras ou influenciadoras, tem crescido, refletindo mudanças culturais e sociais. Ainda assim, as mulheres enfrentam obstáculos nos espaços online. Organizações, estúdios e comunidades têm se esforçado para criar ambientes mais seguros e respeitosos, promovendo campanhas de conscientização nas redes e fora dela. A luta por um espaço mais inclusivo exige um esforço contínuo de todos."
          }
          participants={[
            "Simone Vicentini- vice-presidente da Commissão de Direito dos jogos da OAB/SP",
            "Flávia Merlo- gerente de Marketing da Control F5",
            "Jacqueline Favraud- Sporting Tech",
          ]}
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"19:00"}
          title={"Novas Estratégias para Afiliados"}
          guest={"Mariana Kannebley- CMO da JetBet"}
          description={
            "Com o crescimento constante do mercado digital, as estratégias para afiliados têm evoluído de forma significativa. Anteriormente, a principal tática era promover produtos de maneira simples através de links. Hoje, no entanto, as abordagens mais sofisticadas envolvem segmentação precisa, personalização de conteúdo e análise de dados em tempo real. O uso de ferramentas como automação de marketing, inteligência artificial e plataformas de dados, permite que os afiliados atinjam públicos mais segmentados, aumentando a relevância das ofertas e, consequentemente, a taxa de conversão."
          }
          participants={[
            "Andresa Franco- CGO na Webjet",
            "Bruno Barroso- CEO da Betpass",
            "Mateus Nunes- Tropicalize",
          ]}
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"19:30"}
          title={"The Tips com o Matheus Caumo"}
          guest={" Matheus Caumo: Influencer e Tipster”)"}
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"19:40"}
          title={"Compliance e Melhores Práticas nas Apostas Online"}
          guest={
            "Débora Cunha Romanov - Head de Compliance do Maia Yoshiyasu Advogados"
          }
          participants={[
            "Felipe Crisafulli - sócio do Ambiel Advogados e especialista em Direito Desportivo e Regulamentação de Jogos e Apostas",
            "Pedro Feitosa- Advogado e tipster",
            "Sergio Garcia-presidente da Comissão/OAB de Brasília",
          ]}
          description={
            "O compliance nas apostas online refere-se ao conjunto de normas e regulamentos que as plataformas de jogos devem seguir para garantir a integridade de suas operações e a segurança dos jogadores. As autoridades reguladoras de diferentes países estabelecem essas regras para garantir que as empresas de apostas operem de maneira transparente, justa e responsável. Além disso, o compliance garante que as práticas do setor estejam em conformidade com as leis locais, prevenindo o envolvimento com atividades ilegais, como lavagem de dinheiro ou financiamento do terrorismo. Para as operadoras, isso significa implementar medidas rigorosas de verificação de identidade e monitoramento de transações financeiras, entre outros processos."
          }
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"20:00"}
          title={"The Tips Talks"}
          guest={"Mateus Nunes"}
          description={
            "No universo das apostas online, a presença de influenciadores se tornou um elemento importante para conectar plataformas de apostas com os jogadores. Neste painel, discutiremos como os influenciadores têm impactado o comportamento dos apostadores e a forma como as empresas do setor se comunicam com seu público. A troca de experiências e insights entre influenciadores e operadores de apostas pode fornecer uma visão valiosa sobre as melhores práticas e as tendências que dominam o mercado de iGaming."
          }
          participants={[
            "Ygor Business- influenciador e CEO da BCompany",
            "Cacique Ads- Affiliate Manager",
          ]}
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"20:30"}
          title={"A Importância do Jogo Responsável"}
          guest={"Ricardo Magri- iGaming Business Development Specialist"}
        />
      </div>
      <div>
        <ScheduleAccordion
          hour={"20:45"}
          title={"O Futuro dos Programas de Afiliados no iGaming"}
          guest={"Danielle Santos Costa- gerente de marketing da Pay4fun"}
          participants={[
            "Cacique ADS- Affiliate Manager",
            "Alessandro Gherardi- diretor e Co-fundador da Fomento",
            "Matt Sahakian- diretor de projetos estratégicos B2B BetConstruct",
          ]}
          description={
            "O iGaming, que abrange jogos online e apostas, tem crescido exponencialmente nos últimos anos. Neste cenário, os programas de afiliados desempenham um papel crucial, conectando operadores a novos jogadores. Neste painel, vamos discutir a evolução dos programas de afiliados, abordando como as mudanças nas regulamentações, a tecnologia e as preferências dos consumidores estão moldando o futuro desse modelo de negócios."
          }
        />
      </div>
    </>
  );
};

export default ScheduleDayTwo;

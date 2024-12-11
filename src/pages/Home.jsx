import Palestrantes from "../components/Palestrantes";
import Patrocine from "../components/Patrocine";
import WhyJoin from "../components/WhyJoin";
import Hero from "../components/Hero";
import Agenda from "../components/Agenda";

const Home = () => {
  return (
    <main>
      <Hero />
      <section
        id="join"
        className="bg-gradient-to-b from-[#F1F1F1] to-[#E6E6E6] "
      >
        <WhyJoin />
      </section>
      <section id="palestrantes" className="px-10 pt-20 bg-background-dark">
        <Palestrantes />
      </section>
      <section className="w-full bg-[url('/bg-gradient-blue.png')] bg-cover bg-no-repeat bg-center mt-20 py-24 relative">
        <Patrocine />
      </section>
      <section className="relative w-full py-10 bg-gradient-to-b from-background to-white">
          <Agenda />
      </section>
    </main>
  );
};

export default Home;

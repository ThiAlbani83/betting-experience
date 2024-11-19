import Carroussel from "./components/Carroussel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Patrocine from "./components/Patrocine";
import WhyJoin from "./components/WhyJoin";

function App() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <section
        id="join"
        className="bg-gradient-to-b from-[#F1F1F1] to-[#E6E6E6] "
      >
        <WhyJoin />
      </section>
      <section id="palestrantes" className="px-10 pt-20 bg-background-dark">
        <Carroussel />
      </section>
      <section
        className=" w-full bg-[url('/bg-gradient-blue.png')] bg-cover bg-no-repeat bg-center mt-40 py-24 relative"
      >
        <Patrocine />
      </section>
      <Footer />
    </main>
  );
}

export default App;

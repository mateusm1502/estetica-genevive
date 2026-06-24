import Navbar       from "./Components/Navbar";
import Hero         from "./Components/Hero";
import Sobre        from "./Components/Sobre";
import Servicos     from "./Components/Servicos";
import Diferenciais from "./Components/Diferenciais";
import Depoimentos  from "./Components/Depoimentos";
import Contato      from "./Components/Contato";
import Footer       from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Diferenciais />
      <Depoimentos />
      <Contato />
      <Footer />
    </>
  );
}

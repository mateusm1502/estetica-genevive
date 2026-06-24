const depoimentos = [
  { text: "Minha pele nunca esteve tão bem. O tratamento facial da Genevive transformou minha autoestima completamente.",             autor: "Ana Paula M."   },
  { text: "Profissionalismo impecável. O design de sobrancelha foi exatamente o que eu precisava para valorizar meu olhar.",          autor: "Fernanda Costa" },
  { text: "Um ambiente acolhedor e um atendimento que vai além do esperado. Me sinto renovada a cada visita.",                        autor: "Mariana Silva"  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-5 bg-rosa-claro">
      <div className="container py-5">
        <div className="text-center mb-5" style={{ maxWidth: 500, margin: "0 auto 64px" }}>
          <p className="eyebrow mb-3">Depoimentos</p>
          <h2 className="font-serif fw-light mb-3" style={{ fontSize: "clamp(32px, 4vw, 50px)", lineHeight: 1.2 }}>
            O que nossas <em className="text-rosa">clientes</em> dizem
          </h2>
          <span className="gold-divider mx-auto" />
        </div>

        <div className="row g-4">
          {depoimentos.map((d, i) => (
            <div className="col-md-4" key={i}>
              <div className="bg-white h-100 p-5">
                <div className="text-dourado mb-4" style={{ fontSize: 16, letterSpacing: 4 }}>★★★★★</div>
                <p className="font-serif fst-italic mb-4" style={{ fontSize: 18, lineHeight: 1.7 }}>"{d.text}"</p>
                <p className="mb-0 text-uppercase" style={{ fontSize: 12, letterSpacing: 2, color: "#999" }}>— {d.autor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
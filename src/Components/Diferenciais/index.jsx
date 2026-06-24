const diferenciais = [
  { n: "01", title: "Produtos Premium",         desc: "Linhas profissionais selecionadas com ativos de alta concentração e eficácia comprovada."                              },
  { n: "02", title: "Atendimento Personalizado", desc: "Cada cliente recebe uma anamnese detalhada e protocolo adaptado às suas necessidades únicas."                          },
  { n: "03", title: "Ambiente Exclusivo",         desc: "Espaço pensado para proporcionar relaxamento total e privacidade durante todo o atendimento."                         },
];

const stats = [
  { n: "2.4k+", l: "Clientes atendidas" },
  { n: "98%",   l: "Satisfação"         },
  { n: "6+",    l: "Especialidades"     },
  { n: "8",     l: "Anos de mercado"    },
];

export default function Diferenciais() {
  return (
    <section className="py-5 bg-grafite text-white">
      <div className="container py-5">
        <div className="row g-5 align-items-center">

          <div className="col-lg-6">
            <p className="eyebrow mb-3 text-rosa">Por que escolher</p>
            <h2 className="font-serif fw-light mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.2 }}>
              O padrão <em className="text-rosa">Genevive</em> de excelência
            </h2>
            <p className="fw-light lh-lg mb-5" style={{ fontSize: 15, color: "rgba(255,255,255,.65)" }}>
              Cada visita é uma experiência cuidadosamente orquestrada para oferecer
              resultado, conforto e a sensação de ser verdadeiramente cuidada.
            </p>
            <div className="d-flex flex-column gap-4">
              {diferenciais.map((d) => (
                <div className="d-flex gap-4 align-items-start" key={d.n}>
                  <span className="font-serif text-dourado flex-shrink-0" style={{ fontSize: 40, fontWeight: 300, lineHeight: 1 }}>
                    {d.n}
                  </span>
                  <div>
                    <h4 className="text-uppercase mb-1" style={{ fontSize: 13, letterSpacing: 1, fontWeight: 400 }}>{d.title}</h4>
                    <p className="fw-light mb-0" style={{ fontSize: 14, color: "rgba(255,255,255,.55)" }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-1">
              {stats.map((s, i) => (
                <div className="col-6" key={i}>
                  <div className="p-4 p-lg-5" style={{ background: "rgba(255,255,255,.05)" }}>
                    <div className="font-serif text-dourado" style={{ fontSize: 50, fontWeight: 300, lineHeight: 1 }}>{s.n}</div>
                    <p className="mb-0 mt-2 text-uppercase" style={{ fontSize: 11, letterSpacing: 1.5, color: "rgba(255,255,255,.5)" }}>{s.l}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
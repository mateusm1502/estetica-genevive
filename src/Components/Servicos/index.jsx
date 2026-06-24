const services = [
  { icon: "bi-stars",      title: "Limpeza de Pele",       desc: "Tratamento profundo com técnicas avançadas para uma pele radiante e saudável, removendo impurezas e renovando células.",                       preco: "A partir de R$ 180" },
  { icon: "bi-brush",      title: "Design de Sobrancelha", desc: "Modelagem personalizada que valoriza o contorno do seu rosto com precisão artística e harmonia facial.",                                       preco: "A partir de R$ 90"  },
  { icon: "bi-flower1",    title: "Tratamento Facial",      desc: "Protocolos exclusivos com ativos de alta performance para rejuvenescimento, hidratação e uniformização do tom.",                               preco: "A partir de R$ 220" },
  { icon: "bi-heart-pulse",title: "Massagem Relaxante",     desc: "Rituais sensoriais que aliviam tensões e promovem bem-estar profundo com técnicas orientais e ocidentais.",                                   preco: "A partir de R$ 150" },
  { icon: "bi-droplet",    title: "Drenagem Linfática",     desc: "Manobras suaves e precisas que estimulam o sistema linfático, reduzindo retenção e modelando o corpo.",                                       preco: "A partir de R$ 130" },
  { icon: "bi-magic",      title: "Peeling Químico",        desc: "Renovação celular controlada com ácidos selecionados para manchas, acne e textura irregular da pele.",                                        preco: "A partir de R$ 260" },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-5 bg-creme">
      <div className="container py-5">
        <div className="text-center mb-5" style={{ maxWidth: 560, margin: "0 auto 64px" }}>
          <p className="eyebrow mb-3">Nossos serviços</p>
          <h2 className="font-serif fw-light mb-3" style={{ fontSize: "clamp(32px, 4vw, 50px)", lineHeight: 1.2 }}>
            Tratamentos <em className="text-rosa">exclusivos</em>
          </h2>
          <span className="gold-divider mx-auto mb-4" />
          <p className="text-secondary fw-light mb-0" style={{ fontSize: 15 }}>
            Cada serviço é pensado para revelar o melhor de você, com resultados visíveis e duradouros.
          </p>
        </div>

        <div className="row g-2">
          {services.map((s, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div
                className="bg-white h-100 p-5 position-relative overflow-hidden"
                style={{ transition: "transform .35s", cursor: "default" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.querySelector(".card-bar").style.transform = "scaleX(1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.querySelector(".card-bar").style.transform = "scaleX(0)";
                }}
              >
                <span
                  className="card-bar position-absolute bottom-0 start-0 w-100"
                  style={{ height: 3, background: "var(--dourado)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform .35s" }}
                />
                <i className={`bi ${s.icon} fs-2 mb-4 d-block`} style={{ color: "var(--rosa)" }} />
                <h3 className="font-serif fw-normal mb-3" style={{ fontSize: 22 }}>{s.title}</h3>
                <p className="text-secondary fw-light lh-lg mb-4" style={{ fontSize: 14 }}>{s.desc}</p>
                <p className="eyebrow mb-0" style={{ fontSize: 11 }}>{s.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
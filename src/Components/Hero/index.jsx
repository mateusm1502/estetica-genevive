import { useState, useEffect } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-vh-100 d-flex flex-column flex-lg-row overflow-hidden">
      {/* Esquerda */}
      <div
        className="d-flex flex-column justify-content-center bg-creme px-4 px-lg-5 py-5"
        style={{ flex: 1 }}
      >
        <div style={{ maxWidth: 480, paddingTop: 80 }}>
          <p className="eyebrow mb-3">Estética Genevive — Cuidado & Beleza</p>
          <h1
            className="font-serif fw-light lh-sm mb-4"
            style={{ fontSize: "clamp(42px, 5vw, 68px)" }}
          >
            Realce a sua<br />
            <em className="text-rosa">beleza natural</em><br />
            com sofisticação
          </h1>
          <span
            className="gold-divider mb-4"
            style={{ width: loaded ? 80 : 0, transition: "width 1.2s ease .5s" }}
          />
          <p className="text-secondary fw-light lh-lg mb-5" style={{ fontSize: 15 }}>
            Protocolos exclusivos, técnicas avançadas e um ambiente pensado
            para o seu bem‑estar. Porque você merece se sentir extraordinária.
          </p>
          <button className="btn-genevive" onClick={() => scrollTo("contato")}>
            Agendar consulta
          </button>
        </div>
      </div>

      {/* Direita */}
      <div className="position-relative overflow-hidden" style={{ flex: 1, minHeight: 340 }}>
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85&fit=crop"
          alt="Estética Genevive"
          className="w-100 h-100"
          style={{
            objectFit: "cover",
            transform: loaded ? "scale(1)" : "scale(1.06)",
            transition: "transform 6s ease",
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "linear-gradient(135deg, rgba(201,160,160,.3) 0%, transparent 60%)" }}
        />
        <div
          className="position-absolute bg-white shadow"
          style={{ bottom: 48, left: -8, padding: "24px 28px" }}
        >
          <div className="font-serif text-dourado" style={{ fontSize: 44, fontWeight: 300, lineHeight: 1 }}>
            8+
          </div>
          <p className="eyebrow mt-1 mb-0" style={{ fontSize: 10 }}>Anos de expertise</p>
        </div>
      </div>
    </section>
  );
}
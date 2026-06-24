export default function Sobre() {
  return (
    <section id="sobre" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row align-items-center g-5">

          <div className="col-lg-5">
            <div className="position-relative">
              <span
                className="position-absolute"
                style={{ top: -20, left: -20, width: 180, height: 180, border: "1px solid var(--rosa)", zIndex: 0 }}
              />
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=85&fit=crop"
                alt="Sobre Genevive"
                className="img-fluid w-100 position-relative"
                style={{ objectFit: "cover", aspectRatio: "3/4", zIndex: 1 }}
              />
              <div
                className="position-absolute bg-rosa-claro p-4"
                style={{ bottom: -16, right: -16, maxWidth: 200, zIndex: 2 }}
              >
                <p className="font-serif fst-italic mb-0" style={{ fontSize: 14, lineHeight: 1.6 }}>
                  Beleza que transforma, cuidado que permanece
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <p className="eyebrow mb-3">Sobre nós</p>
            <h2
              className="font-serif fw-light mb-3"
              style={{ fontSize: "clamp(32px, 4vw, 50px)", lineHeight: 1.2 }}
            >
              Mais do que estética,<br />
              <em className="text-rosa">uma experiência</em>
            </h2>
            <span className="gold-divider mb-4" />
            <p className="text-secondary fw-light lh-lg mb-4" style={{ fontSize: 15 }}>
              A Estética Genevive nasceu da paixão pelo cuidado genuíno com a
              beleza feminina. Com uma abordagem personalizada, unimos tecnologia
              de ponta e técnicas consagradas para oferecer resultados que vão além do visível.
            </p>
            <p className="text-secondary fw-light lh-lg mb-0" style={{ fontSize: 15 }}>
              Nossa equipe é formada por profissionais certificadas, em constante
              atualização, comprometidas com a excelência em cada detalhe do seu atendimento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
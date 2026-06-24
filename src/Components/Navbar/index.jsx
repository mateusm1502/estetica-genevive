import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-4 px-lg-5 py-3 ${
        scrolled ? "bg-creme shadow-sm" : "bg-transparent"
      }`}
      style={{ transition: "all .4s ease" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand font-serif fw-light fs-5 text-grafite" href="#">
          Genevive<span className="text-dourado">.</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <i className="bi bi-list fs-4 text-grafite"></i>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto gap-lg-4">
            {[
              { label: "Sobre",    id: "sobre"       },
              { label: "Serviços", id: "servicos"    },
              { label: "Clientes", id: "depoimentos" },
              { label: "Contato",  id: "contato"     },
            ].map(({ label, id }) => (
              <li className="nav-item" key={id}>
                <button
                  className="nav-link btn btn-link p-0 eyebrow"
                  style={{ letterSpacing: "2px", textDecoration: "none" }}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="btn-outline-dourado d-none d-lg-inline-block"
            onClick={() => scrollTo("contato")}
          >
            Agendar
          </button>
        </div>
      </div>
    </nav>
  );
}
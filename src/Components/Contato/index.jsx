import { useState } from "react";

const services = [
  "Limpeza de Pele","Design de Sobrancelha","Tratamento Facial",
  "Massagem Relaxante","Drenagem Linfática","Peeling Químico",
];

const contactDetails = [
  { icon: "bi-geo-alt",   title: "Endereço",            text: "Rua das Flores, 245 — Centro, Joinville/SC" },
  { icon: "bi-whatsapp",  title: "Telefone / WhatsApp",  text: "(47) 99999-0000"                           },
  { icon: "bi-clock",     title: "Horário",              text: "Seg–Sex: 9h às 19h | Sáb: 9h às 15h"      },
];

export default function Contato() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ nome: "", telefone: "", servico: "", mensagem: "" });
  };

  return (
    <section id="contato" className="py-5 bg-creme">
      <div className="container py-5">
        <div className="row g-5 align-items-start">

          <div className="col-lg-5">
            <p className="eyebrow mb-3">Contato</p>
            <h2 className="font-serif fw-light mb-3" style={{ fontSize: "clamp(32px, 4vw, 50px)", lineHeight: 1.2 }}>
              Agende sua <em className="text-rosa">consulta</em>
            </h2>
            <span className="gold-divider mb-4" />
            <p className="text-secondary fw-light lh-lg mb-5" style={{ fontSize: 15 }}>
              Estamos prontas para recebê-la e criar um protocolo exclusivo para
              realçar sua beleza natural. Entre em contato e agende seu horário.
            </p>
            <div className="d-flex flex-column gap-4">
              {contactDetails.map((c, i) => (
                <div className="d-flex gap-3 align-items-start" key={i}>
                  <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-rosa-claro" style={{ width: 44, height: 44 }}>
                    <i className={`bi ${c.icon}`} style={{ color: "var(--rosa)" }} />
                  </div>
                  <div>
                    <h6 className="text-uppercase mb-1" style={{ fontSize: 11, letterSpacing: 2, fontWeight: 500 }}>{c.title}</h6>
                    <p className="mb-0 text-secondary fw-light" style={{ fontSize: 14 }}>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="bg-white p-5">
              <p className="eyebrow mb-4">Envie uma mensagem</p>
              {sent ? (
                <div className="text-center py-5">
                  <i className="bi bi-check-circle d-block mb-3 text-dourado" style={{ fontSize: 40 }} />
                  <p className="font-serif" style={{ fontSize: 22 }}>Mensagem enviada!</p>
                  <p className="text-secondary fw-light" style={{ fontSize: 14 }}>Entraremos em contato em breve.</p>
                </div>
              ) : (
                <form className="form-genevive" onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Nome</label>
                      <input type="text" className="form-control" placeholder="Seu nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Telefone</label>
                      <input type="tel" className="form-control" placeholder="(47) 99999-9999" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Serviço de interesse</label>
                    <select className="form-select" value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })} required>
                      <option value="">Selecione...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Mensagem</label>
                    <textarea className="form-control" rows={3} placeholder="Alguma observação ou dúvida?" value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
                  </div>
                  <button type="submit" className="btn-genevive w-100">Enviar mensagem</button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
import React from "react";
import Layout from "./Layout.tsx";

export default function Checkout() {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center bg-[#111] text-white px-4 py-10">
        <div className="bg-[#1c1c1e] p-10 rounded-xl shadow-md max-w-xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Finalize sua inscrição
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full p-3 rounded bg-black/40 text-white placeholder-white/60"
            />
            <input
              type="email"
              placeholder="Seu email"
              className="w-full p-3 rounded bg-black/40 text-white placeholder-white/60"
            />
            <input
              type="email"
              placeholder="Confirme seu email"
              className="w-full p-3 rounded bg-black/40 text-white placeholder-white/60"
            />
            <input
              type="tel"
              placeholder="Celular"
              className="w-full p-3 rounded bg-black/40 text-white placeholder-white/60"
            />
            <a
              href="https://wa.me/5531995641190?text=Olá,%20quero%20pagar%20com%20Pix!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition w-full p-3 rounded text-black font-semibold text-center block"
            >
              Ir Para o WhatsApp
            </a>
          </form>
        </div>
      </div>
    </Layout>
  );
}

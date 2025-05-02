import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import LocalLogo from "./LOGO.png";

const LOGO_IMG = "https://ext.same-assets.com/81285630/649153979.png";

export default function App() {
  return (
    <Layout>
      <main className="flex flex-col lg:flex-row flex-1 w-full">
        {/* Texto */}
        <section className="flex flex-col justify-center w-full lg:w-1/2 px-6 lg:px-16 py-10 text-white bg-black/85">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-7 leading-snug">
            Ganhe dinheiro assistindo filmes
          </h1>
          <p className="text-lg lg:text-xl mb-8 lg:mb-10 max-w-[36rem]">
            A Amazon está pagando para você avaliar filmes em 2025. Clique no
            botão abaixo e aprenda como receber diretamente no seu PIX!
          </p>

          <Link
            to="/checkout"
            className="bg-white text-black text-base lg:text-lg font-medium px-5 py-3 rounded-xl shadow hover:bg-neutral-200 transition mb-6 w-fit"
          >
            Go to Amazon.com to watch
          </Link>

          <span className="text-white/60 text-sm mt-2">
            Live outside of the United States?{" "}
            <span className="underline cursor-pointer">Sign in to continue.</span>
          </span>
        </section>

        {/* Imagem */}
        <section className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] relative">
          <img
            src={LocalLogo}
            alt="landing visual"
            className="object-cover w-full h-full"
          />
        </section>
      </main>
    </Layout>
  );
}

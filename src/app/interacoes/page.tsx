"use client";

import { useFan } from "../context/FanContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const opcoesInteracoes = [
  "Assisto jogos ao vivo",
  "Curto posts nas redes sociais",
  "Compro produtos oficiais",
  "Participo de eventos",
  "Só acompanho resultados",
];

export default function InteracoesPage() {
  const { setInteracoes } = useFan();
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const router = useRouter();

  function toggleSelecionado(interacao: string) {
    if (selecionados.includes(interacao)) {
      setSelecionados(selecionados.filter((i) => i !== interacao));
    } else {
      setSelecionados([...selecionados, interacao]);
    }
  }

  function handleContinuar() {
    setInteracoes(selecionados);
    router.push("/resultado");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Como você interage com a FURIA?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full max-w-2xl">
        {opcoesInteracoes.map((interacao) => (
          <button
            key={interacao}
            onClick={() => toggleSelecionado(interacao)}
            className={`p-4 rounded-xl border-2 ${
              selecionados.includes(interacao)
                ? "border-purple-500 bg-purple-700"
                : "border-gray-600"
            } transition-all`}
          >
            {interacao}
          </button>
        ))}
      </div>
      <button
        onClick={handleContinuar}
        disabled={selecionados.length === 0}
        className="bg-purple-600 hover:bg-purple-800 disabled:bg-gray-700 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all disabled:cursor-not-allowed"
      >
        Ver Meu Perfil
      </button>
    </main>
  );
}

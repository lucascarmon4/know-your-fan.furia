"use client";

import { useFan } from "../context/FanContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const opcoesInteresses = [
  "FPS (CS:GO, Valorant)",
  "MOBA (LoL)",
  "Battle Royale (Free Fire, PUBG)",
  "FURIA Feminina",
  "FURIA Academy",
  "E-sports em geral",
];

export default function InteressesPage() {
  const { setInteresses } = useFan();
  const [selecionados, setSelecionados] = useState<string[]>([]);
  const router = useRouter();

  function toggleSelecionado(interesse: string) {
    if (selecionados.includes(interesse)) {
      setSelecionados(selecionados.filter((i) => i !== interesse));
    } else {
      setSelecionados([...selecionados, interesse]);
    }
  }

  function handleContinuar() {
    setInteresses(selecionados);
    router.push("/interacoes");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">O que você mais curte?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full max-w-2xl">
        {opcoesInteresses.map((interesse) => (
          <button
            key={interesse}
            onClick={() => toggleSelecionado(interesse)}
            className={`p-4 rounded-xl border-2 ${
              selecionados.includes(interesse)
                ? "border-purple-500 bg-purple-700"
                : "border-gray-600"
            } transition-all`}
          >
            {interesse}
          </button>
        ))}
      </div>
      <button
        onClick={handleContinuar}
        disabled={selecionados.length === 0}
        className="bg-purple-600 hover:bg-purple-800 disabled:bg-gray-700 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all disabled:cursor-not-allowed"
      >
        Continuar
      </button>
    </main>
  );
}

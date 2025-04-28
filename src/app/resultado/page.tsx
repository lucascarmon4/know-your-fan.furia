"use client";

import { useFan } from "../context/FanContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ResultadoPage() {
  const {
    nickname,
    idade,
    cidade,
    timeFavorito,
    interesses,
    interacoes,
    redeSocial,
    engajamentoSocial,
  } = useFan();

  const router = useRouter();
  const [tipoFa, setTipoFa] = useState<string>("");
  const [medalhas, setMedalhas] = useState<string[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (
      nickname === "" &&
      interesses.length === 0 &&
      interacoes.length === 0
    ) {
      router.push("/");
    } else {
      calcularTipoFa();
      gerarMedalhas();
      setCarregando(false);
    }
  }, [nickname, interesses, interacoes]);

  function calcularTipoFa() {
    let pontos = 0;

    interesses.forEach((item) => {
      if (item.includes("FPS")) pontos += 2;
      if (item.includes("MOBA")) pontos += 1;
      if (item.includes("Battle Royale")) pontos += 1;
      if (item.includes("FURIA Feminina")) pontos += 2;
      if (item.includes("FURIA Academy")) pontos += 1;
      if (item.includes("E-sports")) pontos += 1;
    });

    interacoes.forEach((item) => {
      if (item.includes("Assisto jogos")) pontos += 2;
      if (item.includes("Curto posts")) pontos += 1;
      if (item.includes("Compro produtos")) pontos += 3;
      if (item.includes("Participo de eventos")) pontos += 3;
      if (item.includes("Só acompanho resultados")) pontos += 1;
    });

    pontos += engajamentoSocial;

    if (pontos >= 15) {
      setTipoFa("Fã Hardcore 🔥");
    } else if (pontos >= 8) {
      setTipoFa("Fã Casual 🎮");
    } else {
      setTipoFa("Simpatizante 👀");
    }
  }

  function gerarMedalhas() {
    const novasMedalhas: string[] = [];

    if (interacoes.includes("Compro produtos oficiais")) novasMedalhas.push("🛒 Patrocinador");
    if (interacoes.includes("Assisto jogos ao vivo")) novasMedalhas.push("📺 View Master");
    if (engajamentoSocial >= 4) novasMedalhas.push("💬 Social Influencer");
    if (interesses.length >= 4) novasMedalhas.push("🌎 Multiversado");

    setMedalhas(novasMedalhas);
  }

  if (carregando) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Carregando perfil...</p>
      </main>
    );
  }

  return (
<main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center overflow-hidden">
      {/* Conteúdo principal */}
      <div className="z-10 bg-black p-8 rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col gap-6 border-2 border-white">
      <h1 className="text-4xl font-bold mb-8">Seu Perfil de Fã</h1>

        <div className="p-4 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{nickname}</h2>
            <p className="text-sm text-gray-300">
              {idade} anos | {cidade} | Torce para: {timeFavorito}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Tipo de Fã:</h3>
            <div className="text-3xl font-bold">{tipoFa}</div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Rede Social Favorita:</h3>
            <p>{redeSocial}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Medalhas:</h3>
            {medalhas.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-3">
                {medalhas.map((medalha, idx) => (
                  <span key={idx} className="text-2xl">
                    {medalha}
                  </span>
                ))}
              </div>
            ) : (
              <p>Sem medalhas ainda 🥲</p>
            )}
          </div>
        </div>
      </div>

      <button
    onClick={() => {
      localStorage.removeItem("fanData");
      router.push("/");
    }}
    className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all"
  >
    Refazer Teste
  </button>
</main>
  );
}

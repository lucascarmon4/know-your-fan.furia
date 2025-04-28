"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFan } from "../context/FanContext";

export default function RedesSociaisPage() {
  const router = useRouter();
  const { setRedeSocial, setEngajamentoSocial } = useFan(); // Vamos melhorar o contexto para ter isso
  const [passo, setPasso] = useState(1);

  const [redeEscolhida, setRedeEscolhida] = useState<string | null>(null);
  const [frequenciaInteracao, setFrequenciaInteracao] = useState<string | null>(null);
  const [compartilhou, setCompartilhou] = useState<string | null>(null);

  function handleAvancar() {
    if (passo === 3 && redeEscolhida && frequenciaInteracao && compartilhou) {
      setRedeSocial(redeEscolhida);
      let score = 0;
      if (frequenciaInteracao === "Frequentemente") score += 2;
      if (frequenciaInteracao === "Às vezes") score += 1;
      if (compartilhou === "Sim") score += 2;
      setEngajamentoSocial(score);
      router.push("/interesses");
    } else {
      setPasso((prev) => prev + 1);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-md flex flex-col gap-6">
        {passo === 1 && (
          <>
            <h1 className="text-2xl font-bold text-center">Onde você mais acompanha a FURIA?</h1>
            <div className="grid grid-cols-1 gap-4">
              {["Instagram", "TikTok", "YouTube", "Twitter (X)", "Facebook"].map((rede) => (
                <button
                  key={rede}
                  onClick={() => setRedeEscolhida(rede)}
                  className={`p-4 rounded-xl border-2 ${
                    redeEscolhida === rede
                      ? "border-purple-500 bg-purple-700"
                      : "border-gray-600"
                  } transition-all`}
                >
                  {rede}
                </button>
              ))}
            </div>
          </>
        )}

        {passo === 2 && (
          <>
            <h1 className="text-2xl font-bold text-center">Com que frequência você curte ou comenta?</h1>
            <div className="grid grid-cols-1 gap-4">
              {["Frequentemente", "Às vezes", "Raramente"].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFrequenciaInteracao(freq)}
                  className={`p-4 rounded-xl border-2 ${
                    frequenciaInteracao === freq
                      ? "border-purple-500 bg-purple-700"
                      : "border-gray-600"
                  } transition-all`}
                >
                  {freq}
                </button>
              ))}
            </div>
          </>
        )}

        {passo === 3 && (
          <>
            <h1 className="text-2xl font-bold text-center">Você já compartilhou posts da FURIA?</h1>
            <div className="grid grid-cols-1 gap-4">
              {["Sim", "Não"].map((resp) => (
                <button
                  key={resp}
                  onClick={() => setCompartilhou(resp)}
                  className={`p-4 rounded-xl border-2 ${
                    compartilhou === resp
                      ? "border-purple-500 bg-purple-700"
                      : "border-gray-600"
                  } transition-all`}
                >
                  {resp}
                </button>
              ))}
            </div>
          </>
        )}

        <button
          onClick={handleAvancar}
          disabled={
            (passo === 1 && !redeEscolhida) ||
            (passo === 2 && !frequenciaInteracao) ||
            (passo === 3 && !compartilhou)
          }
          className="mt-6 bg-purple-600 hover:bg-purple-800 disabled:bg-gray-700 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all disabled:cursor-not-allowed"
        >
          {passo === 3 ? "Continuar" : "Próxima"}
        </button>
      </div>
    </main>
  );
}

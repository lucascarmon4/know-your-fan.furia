"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  function handleStart() {
    router.push("/cadastro");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Conheça seu Tipo de Fã 🎯
      </h1>
      <p className="text-lg mb-10 text-center max-w-md">
        Vamos descobrir juntos que tipo de fã da FURIA você é!
      </p>
      <button
        onClick={handleStart}
        className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all"
      >
        Começar Jornada
      </button>
    </main>
  );
}

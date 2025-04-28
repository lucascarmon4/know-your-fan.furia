"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFan } from "../context/FanContext";

export default function CadastroPage() {
    const router = useRouter();
    const { setNickname, setIdade, setCidade, setTimeFavorito } = useFan();

    const [nicknameInput, setNicknameInput] = useState("");
    const [idadeInput, setIdadeInput] = useState("");
    const [cidadeInput, setCidadeInput] = useState("");
    const [timeFavoritoInput, setTimeFavoritoInput] = useState("");

    function handleContinuar() {
        setNickname(nicknameInput);
        setIdade(idadeInput);
        setCidade(cidadeInput);
        setTimeFavorito(timeFavoritoInput);

        router.push("/redes-sociais");
    }

    const isFormValid = nicknameInput && idadeInput && cidadeInput && timeFavoritoInput;

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Primeiro, nos conte um pouco sobre você!
            </h1>

            <div className="w-full max-w-md flex flex-col gap-5">
                <input
                    type="text"
                    placeholder="Nickname"
                    value={nicknameInput}
                    onChange={(e) => setNicknameInput(e.target.value)}
                    className="p-3 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    type="number"
                    placeholder="Idade"
                    value={idadeInput}
                    onChange={(e) => setIdadeInput(e.target.value)}
                    className="p-3 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    type="text"
                    placeholder="Cidade/Estado"
                    value={cidadeInput}
                    onChange={(e) => setCidadeInput(e.target.value)}
                    className="p-3 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    type="text"
                    placeholder="Time favorito"
                    value={timeFavoritoInput}
                    onChange={(e) => setTimeFavoritoInput(e.target.value)}
                    className="p-3 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <button
                    onClick={handleContinuar}
                    disabled={!isFormValid}
                    className="mt-6 bg-purple-600 hover:bg-purple-800 disabled:bg-gray-700 text-white font-bold py-3 px-8 rounded-2xl text-lg transition-all disabled:cursor-not-allowed"
                >
                    Continuar
                </button>
            </div>
        </main>
    );
}

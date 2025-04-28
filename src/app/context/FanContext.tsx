"use client";

import { createContext, useContext, useState, useEffect } from "react";

type FanContextType = {
  nickname: string;
  idade: string;
  cidade: string;
  timeFavorito: string;
  interesses: string[];
  interacoes: string[];
  redeSocial: string;
  engajamentoSocial: number;
  setNickname: (n: string) => void;
  setIdade: (i: string) => void;
  setCidade: (c: string) => void;
  setTimeFavorito: (t: string) => void;
  setInteresses: (i: string[]) => void;
  setInteracoes: (i: string[]) => void;
  setRedeSocial: (r: string) => void;
  setEngajamentoSocial: (e: number) => void;
};

const FanContext = createContext<FanContextType | null>(null);

export function FanProvider({ children }: { children: React.ReactNode }) {
  const [nickname, setNickname] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [timeFavorito, setTimeFavorito] = useState("");
  const [interesses, setInteresses] = useState<string[]>([]);
  const [interacoes, setInteracoes] = useState<string[]>([]);
  const [redeSocial, setRedeSocial] = useState("");
  const [engajamentoSocial, setEngajamentoSocial] = useState(0);

  // Carregar do localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("fanData");
    if (savedData) {
      const data = JSON.parse(savedData);
      setNickname(data.nickname || "");
      setIdade(data.idade || "");
      setCidade(data.cidade || "");
      setTimeFavorito(data.timeFavorito || "");
      setInteresses(data.interesses || []);
      setInteracoes(data.interacoes || []);
      setRedeSocial(data.redeSocial || "");
      setEngajamentoSocial(data.engajamentoSocial || 0);
    }
  }, []);

  // Salvar no localStorage sempre que mudar algo
  useEffect(() => {
    const data = {
      nickname,
      idade,
      cidade,
      timeFavorito,
      interesses,
      interacoes,
      redeSocial,
      engajamentoSocial,
    };
    localStorage.setItem("fanData", JSON.stringify(data));
  }, [
    nickname,
    idade,
    cidade,
    timeFavorito,
    interesses,
    interacoes,
    redeSocial,
    engajamentoSocial,
  ]);

  return (
    <FanContext.Provider
      value={{
        nickname,
        idade,
        cidade,
        timeFavorito,
        interesses,
        interacoes,
        redeSocial,
        engajamentoSocial,
        setNickname,
        setIdade,
        setCidade,
        setTimeFavorito,
        setInteresses,
        setInteracoes,
        setRedeSocial,
        setEngajamentoSocial,
      }}
    >
      {children}
    </FanContext.Provider>
  );
}

export function useFan() {
  const context = useContext(FanContext);
  if (!context) throw new Error("useFan must be used within FanProvider");
  return context;
}

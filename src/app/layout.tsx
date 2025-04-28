import "./globals.css";
import { FanProvider } from "./context/FanContext";
import Image from "next/image";

export const metadata = {
  title: "Conheça seu Tipo de Fã",
  description: "Desafio FURIA #2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white relative">
        <FanProvider>
          {/* Logo FURIA flutuante */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
            <Image
              src="/logo-furia.png"
              alt="Logo FURIA"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Conteúdo da página */}
          {children}
        </FanProvider>
      </body>
    </html>
  );
}

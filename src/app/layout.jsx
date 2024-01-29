import { Inter } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/sidebar/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proyecto Final BD2",
  description:
    "Proyecto final de la materia de Bases de Datos 2. Interfaz web para la administración de una base de datos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-cyan-300">
      <body className={`${inter.className} h-full`}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Strony internetowe | Mateusz Bizoń",
  description: "Tworzę nowoczesne strony dla firm, które nie tylko dobrze wyglądają, ale też skutecznie sprzedają. Pomagam w pozycjonowaniu wizytówki Google, by klienci trafiali do Ciebie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.className}`}
      >
        <ToastContainer
            position="top-center"
            autoClose={3000}
            closeOnClick={true}
        />
        {children}
      </body>
    </html>
  );
}

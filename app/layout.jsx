import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Fran Muñoz | Portfolio",
  description: "Portfolio personal de Fran Muñoz, desarrollador de software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={jetbrainsMono.variable}>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

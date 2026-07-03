import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fortekpr.com"),
  title: {
    default: "ForTek PR — Agencia Digital en Puerto Rico",
    template: "%s | ForTek PR",
  },
  description:
    "ForTek PR es una agencia digital en Puerto Rico especializada en páginas web, tiendas en línea, portafolios personales y producción de contenido visual.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "ForTek PR — Agencia Digital en Puerto Rico",
    description:
      "Transformamos negocios en Puerto Rico con presencia digital de primer nivel.",
    url: "https://fortekpr.com",
    siteName: "ForTek PR",
    locale: "es_PR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEMA - Sociedade de Apoio a Crianças e Jovens",
  description: "Transformando vidas através da educação, cultura e apoio social. A SEMA é uma instituição beneficente dedicada ao desenvolvimento integral de crianças e jovens em situação de vulnerabilidade social.",
  keywords: "SEMA, instituição beneficente, crianças, jovens, educação, apoio social, doações, voluntariado, ONG",
  authors: [{ name: "SEMA" }],
  creator: "SEMA",
  publisher: "SEMA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sema-instituicao.org"),
  openGraph: {
    title: "SEMA - Sociedade de Apoio a Crianças e Jovens",
    description: "Transformando vidas através da educação, cultura e apoio social.",
    url: "https://sema-instituicao.org",
    siteName: "SEMA",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ad56766-1e1b-4a7b-998d-7aec419f0c82.png",
        width: 1200,
        height: 630,
        alt: "SEMA - Transformando vidas através da educação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEMA - Sociedade de Apoio a Crianças e Jovens",
    description: "Transformando vidas através da educação, cultura e apoio social.",
    images: ["https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f958c806-bc6d-48a0-ba56-eaef9c2ae131.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
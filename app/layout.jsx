import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-head", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://nascoretech.com"),
  title: "AI Automation, SEO, Web Development & AWS Cloud | NasCore Technologies",
  description:
    "NasCore Technologies provides AI automation, MERN and Next.js development, SEO, and AWS cloud solutions to help businesses automate, grow and scale.",
  keywords: ["AI automation agency","AI automation services","SEO services","SEO agency","MERN stack development","Next.js development","web development company","AWS cloud services","AWS consulting","workflow automation","business process automation","custom software development"],
  alternates: { canonical: "https://nascoretech.com" },
  openGraph: {
    title: "NasCore Technologies | AI Automation, SEO, Development & Cloud",
    description: "We build intelligent digital systems that help businesses automate operations, grow organic visibility and scale.",
    url: "https://nascoretech.com", siteName: "NasCore Technologies", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NasCore Technologies | Build. Automate. Optimize. Scale.",
    description: "AI automation, SEO, modern web development and AWS cloud solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dm.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EmKiattinan | Portfolio",
  description: "ผู้เชี่ยวชาญด้านการตัดต่อวิดีโอและออกแบบกราฟิก ที่หลงใหลในความคิดสร้างสรรค์และการเล่าเรื่องด้วยภาพ",
  openGraph: {
    title: 'EmKiattinan',
    description: 'ผู้เชี่ยวชาญด้านการตัดต่อวิดีโอและออกแบบกราฟิก ที่หลงใหลในความคิดสร้างสรรค์และการเล่าเรื่องด้วยภาพ',
    url: 'https://emportfolio-ivory.vercel.app',
    siteName: 'emportfolio',
    images: [
      {
        url: '/em-og.png',
        width: 1200,
        height: 630,
        alt: 'EmKiattinan',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

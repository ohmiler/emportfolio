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
  title: "เอ็ม เกียรตินันต์ | Portfolio",
  description: "สวัสดีครับ ผมชื่อเอ็ม หรือ นายเกียรตินันต์ รับจ้างตัดต่อถ่ายรูป กราฟฟิค รวมไปถึงการคิดคอนเทนต์และ Script สามารถรับชมผลงานได้เลยครับ",
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

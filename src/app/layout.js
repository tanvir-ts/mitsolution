import { Geist, Geist_Mono } from "next/font/google"; 
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MIT Solution Computer Training Institute",
  description: "MIT Solution Computer Training Institute",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navber />
        <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}

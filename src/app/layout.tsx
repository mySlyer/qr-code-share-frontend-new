import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
// import Providers from './providers';
import "./globals.css";
import { Toaster } from "./components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ header, children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers> */}
        <main className="flex flex-col h-screen w-full">
          {header}
          {children}
        </main>
        <Toaster />
        {/* </Providers> */}
      </body>
    </html>
  );
}

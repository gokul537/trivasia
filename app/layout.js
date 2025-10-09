import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Head from "next/head";

import favicons from "@/asset/favicon.jpg"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick weights you need
  variable: "--font-quicksand", // for Tailwind usage
});



export const metadata = {
  title: "trivasia",
  description: "tamil nadu ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href={favicons} sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body
        className={quicksand.variable} 
      >
        <Header/>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}

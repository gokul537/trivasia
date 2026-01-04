import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import StructuredData from "@/components/StructuredData";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick weights you need
  variable: "--font-quicksand", // for Tailwind usage
});



export const metadata = {
  title: "Trivasia Overseas - Study Abroad, Holiday Packages & Immigration Services",
  description: "Leading education and travel consultancy in Tamil Nadu. Expert guidance for studying abroad, customized holiday packages, and immigration assistance. Trusted by 500+ happy clients.",
  keywords: "study abroad, overseas education, holiday packages, immigration services, visa assistance, Tamil Nadu, Karur, Trivasia",
  authors: [{ name: "Trivasia Overseas" }],
  openGraph: {
    title: "Trivasia Overseas - Your Gateway to Global Opportunities",
    description: "Expert guidance for studying abroad, travel, and immigration services",
    url: "https://www.trivasia.com",
    siteName: "Trivasia Overseas",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trivasia Overseas",
    description: "Study Abroad, Holiday Packages & Immigration Services",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
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

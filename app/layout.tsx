import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AnimatedCursor from "react-animated-cursor"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


const font = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800',],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Krushit pandav | Flutter Developer",
  description: "Explore the professional portfolio of Jenesh Devganiya, showcasing projects, skills, and expertise in Full-Stack Development, Node.js, React, and modern web technologies.",
  keywords: [
    
  ],
  authors: [{ name: "Krushit Pandav", url: "" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico", // Path to your favicon inside the public/ folder
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${font.className}`}>
        <div className="hidden md:block">
          <AnimatedCursor
           innerSize={8}
           outerSize={35}
           innerScale={2}
           outerScale={2}
           outerAlpha={0}
           innerStyle={{
            backgroundColor: "white",
           }}
           outerStyle={{
            border: "3px solid white",
           }}
           />
        </div>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

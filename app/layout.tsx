import type { Metadata } from "next";
import { Jost, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "The Real Estate Fund | Luxury Multi-Family Investments",
  description: "Exclusive multi-family real estate private equity fund focused on value-added property acquisitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${nanumMyeongjo.variable} font-sans antialiased bg-background text-foreground`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

import FooterComponent from "@/components/FooterComponent";

import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import NavbarV1Component from "@/components/NavbarComponent/NavbarV1Component";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable}`}>
        <NavbarV1Component />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}

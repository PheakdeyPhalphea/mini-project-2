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
  title: {
    template: "%s - K3-Shop",
    default: "Kd3y-Shop",
  },
  description: "This E-Commerce Website In Cambodia",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: {
      template: "%s - K3-Shop",
      default: "Kd3y-Shop",
    },
    description: "This E-Commerce Website In Cambodia",
    images: [
      "https://i.pinimg.com/736x/3d/65/b2/3d65b2895c7a2fb27bf430e24cc7ac81.jpg",
    ],
  },
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

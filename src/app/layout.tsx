import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import ToasterProvider from "@/components/providers/ToastProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "4 Wheelz Driving School",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}

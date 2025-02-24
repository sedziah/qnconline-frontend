import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components";
import Footer from "@/components/Footer";
import ClientWrapper from "./ClientWrapper"; // New wrapper component

export const metadata: Metadata = {
  title: "Q&C Online - Home",
  description: "A Home of Premium Products & Exemplary Customer Care!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}

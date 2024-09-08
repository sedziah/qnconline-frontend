import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components"
import Footer from "@/components/Footer"


export const metadata: Metadata = {
  title: "QNCONLINE - Home",
  description: "A Home of Premium Products & Exemplary Customer Care!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

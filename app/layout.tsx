import type React from "react"
import localFont from "next/font/local"
import { Poppins } from "next/font/google"
import "./globals.css"

const aliceFont = localFont({
  src: "../public/fonts/Alice_in_Wonderland_3.ttf",
  variable: "--font-alice",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${aliceFont.variable} ${poppins.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };

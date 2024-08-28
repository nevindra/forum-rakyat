import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import "./globals.css"
import { cn } from "@/ui/utils"
import { NEXT_PUBLIC_APP_NAME } from "@/env"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

export const metadata: Metadata = {
  title: NEXT_PUBLIC_APP_NAME,
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          `${GeistSans.variable} ${GeistMono.variable}`
        )}
      >
        {children}
      </body>
    </html>
  )
}

import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"
import type { Metadata } from "next"
import AIChatBox from "./components/AIChatBox"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kevin Lin - Software Developer",
  description: "Personal portfolio website of Kevin Lin, a software developer specializing in modern web technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <AIChatBox />
      </body>
    </html>
  )
}
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import Attribution from "./components/attribution"

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Frontend Mentor Challenge",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${dmSans.className} flex min-h-screen flex-col items-center bg-cream text-dark-brown`}
      >
        {children}
        <Attribution />
      </body>
    </html>
  )
}

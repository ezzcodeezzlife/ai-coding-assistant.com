import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Coding Assistant - Build Full-Stack Web Apps with AI, Instantly",
  description:
    "ai-coding-assistant.com is an open source AI web builder and coding assistant that helps you build full-stack applications directly in your browser. Use models from OpenAI, HuggingFace, and more. No setup needed.",
  keywords:
    "ai code assistant, ai web builder, ai web development, open source ai assistant, open source ai projects, build apps with ai, code with ai, fullstack ai development, ai coding tools, web dev ai assistant",
  authors: [{ name: "AI Coding Assistant Team" }],
  creator: "AI Coding Assistant",
  publisher: "AI Coding Assistant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ai-coding-assistant.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "AI Coding Assistant - Build Full-Stack Web Apps with AI, Instantly",
    description:
      "The ultimate open source AI code assistant in your browser. Develop complete web applications using the latest AI models.",
    url: "https://ai-coding-assistant.com",
    siteName: "AI Coding Assistant",
    images: [
      {
        url: "https://ai-coding-assistant.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Coding Assistant - Build Full-Stack Web Apps with AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Coding Assistant - Build Full-Stack Web Apps with AI, Instantly",
    description:
      "The ultimate open source AI code assistant in your browser. Develop complete web applications using the latest AI models.",
    images: ["https://ai-coding-assistant.com/twitter-image.jpg"],
    creator: "@aicodingassist",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

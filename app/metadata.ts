import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wellness Center - Medical Weight Loss Programs",
  description:
    "Doctor-led, personalized weight loss programs designed for real, lasting results. Expert medical care with GLP-1 treatments, nutrition counseling, and ongoing support.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}
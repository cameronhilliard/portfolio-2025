import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cameron Hilliard",
  description: "My Portfolio showcasing all of my development work.",
};

export default function RootLayout({ children }) {
  return (
    <html className="dark scroll-smooth" lang="en">
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

    </head>
      <body className="dark:bg-background bg-white">
        {children}
      </body>
    </html>
  );
}

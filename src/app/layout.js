
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});



export const metadata = {
  title: "Cameron Hilliard | IT Professional | Systems & Automation",
  description: "IT Professional with experience in systems support, automation, and technical problem solving. Focused on reliable solutions, documentation, and secure workflows.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  
};


export default function RootLayout({ children }) {
  return (
    <html className={`dark ${montserrat.className}`}>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    

    </head>
      <body className="dark:bg-background bg-white">
        {children}
      </body>
    </html>
  );
}


import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});



export const metadata = {
  title: "Cameron Hilliard",
  description: "My Portfolio showcasing all of my development work.",
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

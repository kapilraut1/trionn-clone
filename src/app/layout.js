import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter_Tight, Oswald } from "next/font/google";
import Cursor from "./components/Cursor";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-interTight",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dirtyline = Oswald({
  subsets: ["latin"],
  variable: "--font-dirtyline",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "TRIONN | Crafting Award- Winning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${dirtyline.variable} antialiased`}
      >
        <Cursor />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

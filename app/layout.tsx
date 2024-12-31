import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Conor Walton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <CSPostHogProvider>
        <body className={`${funnelSans.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </CSPostHogProvider>
    </html>
  );
}

import type { Metadata } from "next";
import { merriweather } from "@/app/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cody Thatcher",
  description: "Created by Stijn Peeters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";

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
      <head>
        <Script id="test">
          {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "oj33yne69z");`}
        </Script>
      </head>
      <body className={`${merriweather.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

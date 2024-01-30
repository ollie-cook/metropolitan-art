import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const bitter = Bitter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Art",
  description: "Random art from the Metropolitan Museum of Art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bitter.className} object-cover relative`} style={{backgroundImage: 'url(/background.png)'}}>
        {children}
        <p className="absolute -bottom-0 right-2 text-sm md:bottom-2 md:right-2">Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image"
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Mobile Todo App",
  description: "Created by habeeb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased relative`}
      >
        <Image alt="Background image" className="left-0 top-0 absolute z-50" src="/background_image.png" width={135} height={150}  />
        {children}
      </body>
    </html>
  );
}
